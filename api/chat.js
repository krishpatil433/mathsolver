/**
 * Vercel Serverless Function: /api/chat
 * Handles math doubt solver queries securely using Google Gemini API.
 * Never exposes GEMINI_API_KEY to the client.
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not set in Vercel environment variables. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.'
    });
  }

  try {
    const { messages = [], topicContext = '' } = req.body || {};

    const systemInstruction = `You are "MathGenie AI Tutor" – a friendly, patient senior engineering student explaining maths to a junior in simple Hinglish (Hindi + English mix).
The course is Diploma / Degree Engineering Mathematics (MSBTE Course Code 314320).

CRITICAL PEDAGOGICAL RULES (STRICTLY ENFORCED):
1. NO DIRECT JUMPS EVER: Never jump from a derivative to substituting values. Always state:
   - What the variable means (e.g. "r kya hai? r = ∂²f/∂x² (x ke respect mein function ka double derivative). Toh pehle hum ∂f/∂x nikalenge, fir use dobara x se differentiate karenge").
   - Then show the derivative calculation step by step.
   - Then substitute the coordinates explicitly: "r = 6 + 6(0) = 6 + 0 = 6".
2. WEAK-STUDENT FRIENDLY: Assume the student finds maths intimidating. Use friendly phrases like "Ghabrane ki zarurat nahi, ekdam step-by-step dekho", "Ye step isliye kiya kyunki...".
3. PROPER MATH NOTATION: Write mathematical formulas in clean LaTeX notation using dollar signs (e.g. $r = \\frac{\\partial^2 f}{\\partial x^2}$, $\\vec{a} = 2\\hat{i} - 3\\hat{j} + \\hat{k}$). Never use broken Unicode characters.
4. EXAM ANSWER TEMPLATE: Show how to write the solution on exam paper so the MSBTE examiner gives full marks. Highlight what line to write in the answer sheet.
5. KEEP IT GROUND LEVEL: Connect abstract formulas to simple real-life analogies or geometric intuition whenever helpful.`;

    // Format chat history for Google Gemini API
    const contents = [];

    // System prompt in Gemini API format
    contents.push({
      role: 'user',
      parts: [{ text: `${systemInstruction}\n\nCurrent Topic Context: ${topicContext || 'Engineering Mathematics'}` }]
    });
    contents.push({
      role: 'model',
      parts: [{ text: 'Samajh gaya! Main MathGenie tutor hoon. Main har ek step bilkul ground level se, bina kisi direct jump ke, variable ka matlab samjhaate hue Hinglish mein explain karunga.' }]
    });

    // Add conversation history
    for (const msg of messages) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text || msg.content || '' }]
      });
    }

    // Call Google Gemini REST API v1beta
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', errText);
      return res.status(response.status).json({
        error: `Gemini API returned error: ${response.status}`,
        details: errText
      });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf karna, main solution generate nahi kar paya. Kripya dobara poochhein.';

    return res.status(200).json({ text: replyText });
  } catch (error) {
    console.error('Vercel chat function error:', error);
    return res.status(500).json({
      error: 'Failed to process AI Doubt request.',
      message: error.message
    });
  }
}
