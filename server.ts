import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = (customKey?: string) => {
  const apiKey = customKey || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Endpoint for AI Doubt Solver
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userMessage, customKey, topicContext } = req.body;
    const ai = getGeminiClient(customKey);

    const systemInstruction = `You are "MathGenie AI Tutor" – a friendly, patient senior engineering student explaining maths to a junior in simple Hinglish (Hindi + English mix).
The course is Diploma / Degree Engineering Mathematics (MSBTE Course Code 314320).

CRITICAL RULES (STRICTLY ENFORCED):
1. NO DIRECT JUMPS EVER: Never jump from a derivative to substituting values. Always state:
   - What the variable means (e.g. "r kya hai? r = ∂²f/∂x² (x ke respect mein function ka double derivative). Toh pehle hum ∂f/∂x nikalenge, fir use dobara x se differentiate karenge").
   - Then show the derivative calculation step by step.
   - Then substitute the coordinates explicitly: "r = 6 + 6(0) = 6 + 0 = 6".
2. WEAK-STUDENT FRIENDLY: Assume the student finds maths intimidating. Explain why every step is taken, not just what it is.
3. PROPER MATH NOTATION: Write mathematical formulas in clean LaTeX notation using dollar signs (e.g. $r = \\frac{\\partial^2 f}{\\partial x^2}$, $\\vec{a} = 2\\hat{i} - 3\\hat{j} + \\hat{k}$). Never use broken Unicode characters.
4. EXAM ANSWER TEMPLATE: Show how to write the solution on exam paper so the MSBTE examiner gives full marks. Highlight what lines to write in the answer sheet.
5. Real-life analogies (pizza slice, velocity, traffic, balance, etc.) to build intuition.
${topicContext ? `Current Topic Context: ${topicContext}` : ''}`;

    if (!ai) {
      // Friendly fallback if API key is not yet set in environment
      return res.json({
        reply: `**MathGenie Tutor:** Ghabrao mat! Server par Gemini API key abhi configure nahi hai. Aap AI Studio Secrets panel me \`GEMINI_API_KEY\` add kar sakte hain, ya chat modal ke settings icon se apni API key daal sakte hain.

Lekin filhal ye yaad rakho: Engineering Maths me formula se zyada **Step-by-Step logic** aur **Shortcuts** kaam aate hain! Aap niche diye gaye topics browse karke sabhi Solved Examples aur Tricks directly padh sakte hain.`
      });
    }

    // Build contents for gemini-3.8-flash
    let promptText = userMessage || '';
    if (messages && messages.length > 0) {
      const historySummary = messages.slice(-4).map((m: any) => `${m.role === 'user' ? 'Student' : 'MathGenie'}: ${m.content}`).join('\n');
      promptText = `${historySummary}\nStudent: ${userMessage || ''}`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
      },
    });

    const reply = response.text || "Main abhi samajh nahi paya, kya aap dobara pooch sakte hain?";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return res.status(500).json({
      error: 'Failed to generate response',
      details: error.message || String(error),
      fallback: `Arre re! Ek chhota sa network issue hua. Aap direct Topic cards me Solved Examples aur Shortcuts dekh sakte hain.`
    });
  }
});

// Serve public folder statically (for PWA manifest.json, sw.js, icons)
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('manifest.json')) {
      res.setHeader('Content-Type', 'application/manifest+json');
    } else if (filePath.endsWith('sw.js')) {
      res.setHeader('Content-Type', 'application/javascript');
      res.setHeader('Service-Worker-Allowed', '/');
    }
  }
}));

// Vite Middleware for Dev or Static Files for Prod
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MathGenie server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
