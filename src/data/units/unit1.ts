import { SubTopic } from '../../types/math';

export const unit1SubTopics: SubTopic[] = [
  {
    id: '1.1',
    unitId: 1,
    title: 'Introduction to Derivative',
    subtitle: 'Ordinary Derivative ka Basic Concept aur Rate of Change',
    yeKyaHai: {
      definition: 'Derivative basically "Rate of Change" hota hai — yaani jab ek cheez badalti hai, toh doosri cheez kitni tezi se badalti hai.',
      analogy: 'Imagine karo aap bike chala rahe ho. Distance badal raha hai time ke sath. Aapke speedometer ki needle jo instant speed dikha rahi hai, wahi distance ka time ke respect mein derivative hai: v = ds/dt!'
    },
    groundLevel: {
      intro: 'School mein humne y = f(x) padha tha jisme sirf EK independent variable x hota hai. Ground level se samjho:',
      points: [
        {
          heading: 'Single Variable Dependency',
          content: 'Jab y sirf x pe depend kare, toh x ko halka sa badhane (dx) se y mein jo chhota badlaav (dy) aata hai, uske ratio dy/dx ko derivative kehte hain.'
        },
        {
          heading: 'Slope of Tangent',
          content: 'Geometric meaning: Kisi curve ke kisi point par khinchi gayi tangent ka slope (dhalan) hi uska derivative dy/dx hota hai.'
        },
        {
          heading: 'Engineering Importance',
          content: 'Mechanical me acceleration (dv/dt), electrical me current (dq/dt), civil me beam deflection (dy/dx) — sab derivative se hi calculate hote hain.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Standard Derivatives jo har engineering student ke fingertips pe hone chahiye:',
      formulas: [
        { name: 'Power Rule', latex: '\\frac{d}{dx}(x^n) = n x^{n-1}', note: 'Power aage aayegi, power mein se 1 kam hoga' },
        { name: 'Exponential', latex: '\\frac{d}{dx}(e^{ax}) = a e^{ax}', note: 'e ki power as it is, x ke coefficient se multiply' },
        { name: 'Logarithmic', latex: '\\frac{d}{dx}(\\ln x) = \\frac{1}{x}', note: 'Positive x ke liye' },
        { name: 'Trigonometric', latex: '\\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x', note: 'Cos wale me minus lagta hai' },
        { name: 'Product Rule', latex: '\\frac{d}{dx}(u \\cdot v) = u \\frac{dv}{dx} + v \\frac{du}{dx}', note: 'Pehle ko chhod do, doosre ka karo + doosre ko chhod do, pehle ka karo' },
        { name: 'Quotient Rule', latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}', note: 'Denominator square niche, upar v*(u derivative) - u*(v derivative)' }
      ]
    },
    solvedExamples: [
      {
        title: 'Basic Polynomial and Trigonometric Derivative',
        problem: 'Find dy/dx for y = 5x^4 - 3\\sin(x) + e^{2x}',
        latexProblem: 'y = 5x^4 - 3\\sin x + e^{2x}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Har term ko alag-alag differentiate karo with respect to x.',
            whyThisStep: 'Differentiation linear operator hota hai: d/dx(A + B) = dA/dx + dB/dx.',
            mathLatex: '\\frac{dy}{dx} = \\frac{d}{dx}(5x^4) - \\frac{d}{dx}(3\\sin x) + \\frac{d}{dx}(e^{2x})'
          },
          {
            stepNumber: 2,
            explanation: 'Power rule, trig rule, aur chain rule lagao.',
            whyThisStep: '5(4x^3) = 20x^3, sin(x) ka cos(x), aur e^(2x) ka 2*e^(2x).',
            mathLatex: '\\frac{dy}{dx} = 20x^3 - 3\\cos x + 2e^{2x}'
          }
        ],
        finalAnswer: 'dy/dx = 20x^3 - 3cos(x) + 2e^(2x)'
      },
      {
        title: 'Product Rule Example',
        problem: 'Differentiate y = x^2 \\cdot \\cos x with respect to x.',
        latexProblem: 'y = x^2 \\cos x',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Pehchan karo: u = x^2 aur v = cos(x). Product rule use hoga.',
            whyThisStep: 'Do functions aapas mein multiply ho rahe hain, seedhe alag alag multiply nahi kar sakte.',
            mathLatex: '\\frac{dy}{dx} = x^2 \\frac{d}{dx}(\\cos x) + \\cos x \\frac{d}{dx}(x^2)'
          },
          {
            stepNumber: 2,
            explanation: 'Derivatives calculate karke values substitute karo.',
            whyThisStep: 'd/dx(cos x) = -sin x aur d/dx(x^2) = 2x.',
            mathLatex: '\\frac{dy}{dx} = x^2(-\\sin x) + (\\cos x)(2x) = 2x\\cos x - x^2\\sin x'
          }
        ],
        finalAnswer: 'dy/dx = x(2cos x - x sin x)'
      }
    ],
    shortcuts: [
      {
        title: 'Trig Minus Rule Mnemonic',
        rule: 'Har trigonometic function jo letter "C" se start hota hai (cos, cot, cosec) uska derivative HAMESHA MINUS (-) sign deta hai!',
        mnemonic: '"C gives Negative" (cos -> -sin, cot -> -cosec^2, cosec -> -cosec*cot)',
        whenToUse: 'Jab exam me minus sign ka confusion ho.'
      },
      {
        title: 'Root x Direct Shortcut',
        rule: 'd/dx(sqrt(x)) = 1 / (2*sqrt(x)). Baar baar x^(1/2) calculate karne ki zarurat nahi.',
        whenToUse: 'Square root terms me instant time-save ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.1-p1',
        question: 'Differentiate y = x^3 \\ln(x) with respect to x.',
        latex: 'y = x^3 \\ln x',
        hint: 'Use Product Rule: u = x^3, v = ln(x)',
        solution: 'dy/dx = x^3(1/x) + ln(x)(3x^2) = x^2 + 3x^2 ln(x) = x^2(1 + 3 ln x).',
        solutionLatex: '\\frac{dy}{dx} = x^2(1 + 3\\ln x)'
      },
      {
        id: '1.1-p2',
        question: 'Find the derivative of y = (x^2 + 1) / (x - 1).',
        latex: 'y = \\frac{x^2 + 1}{x - 1}',
        hint: 'Quotient rule lagao: (v u\' - u v\') / v^2',
        solution: 'Numerator = (x-1)(2x) - (x^2+1)(1) = 2x^2 - 2x - x^2 - 1 = x^2 - 2x - 1. Denominator = (x-1)^2.',
        solutionLatex: '\\frac{dy}{dx} = \\frac{x^2 - 2x - 1}{(x - 1)^2}'
      },
      {
        id: '1.1-p3',
        question: 'Evaluate dy/dx at x = 0 for y = e^{3x} + \\sin(2x).',
        hint: 'Differentiate karo, fir x = 0 put karo.',
        solution: 'dy/dx = 3e^(3x) + 2cos(2x). At x=0: 3(1) + 2(1) = 5.',
        solutionLatex: '\\left.\\frac{dy}{dx}\\right|_{x=0} = 3(1) + 2(1) = 5'
      }
    ],
    commonMistakes: [
      'd/dx(constant) = 0 hota hai, par student galti se constant ko 1 likh dete hain.',
      'Product rule me minus laga dena — product rule me "+" hota hai, quotient rule me "-" hota hai!'
    ],
    examTip: 'Exam paper me standard derivative ke pehle step me "Differentiating both sides w.r.t x" zaroor likho, step marking me 1 mark pakka milta hai.'
  },
  {
    id: '1.2',
    unitId: 1,
    title: 'Partial Derivative (Two Variables)',
    subtitle: 'First Order, Second Order, aur Mixed Order Derivatives',
    yeKyaHai: {
      definition: 'Jab koi function do ya do se zyada variables par depend karta hai z = f(x, y), aur hum EK variable ke respect mein rate of change nikalte hain DUSRE KO CONSTANT (FREEZE) MAANKAR, use Partial Derivative kehte hain.',
      analogy: 'Pizza ki total cost depend karti hai: (1) Cheese quantity (x) aur (2) Size (y). Agar hum sirf cheese badhayein par size wahi rakhein, toh cost kitni badhegi? Wahi hai ∂(Cost)/∂x! Dusra variable chup-chap freeze rehta hai.'
    },
    groundLevel: {
      intro: 'Notation: Ordinary derivative me d/dx likhte the. Partial derivative me symbol curly "∂" (del ya curly-d) banate hain: ∂z/∂x ya fx.',
      points: [
        {
          heading: 'Golden Rule of Partial Differentiation',
          content: 'Jab x ke respect me differentiate kar rahe ho (∂z/∂x), toh pure calculation me "y" ko ek simple number (constant) ki tarah treat karo! Jaise 5 ya 7.'
        },
        {
          heading: 'Second Order Derivatives',
          content: '∂²z/∂x² (x ke respect me do baar) aur ∂²z/∂y² (y ke respect me do baar).'
        },
        {
          heading: 'Mixed Partial Derivative (Clairaut\'s Theorem)',
          content: '∂²z/(∂x∂y) matlab pehle y ke respect me kiya fir x ke respect me. Continuous functions ke liye: ∂²z/(∂x∂y) = ∂²z/(∂y∂x) hamesha barabar hote hain!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Essential Notations and Definitions:',
      formulas: [
        { name: 'First Order w.r.t x', latex: '\\frac{\\partial z}{\\partial x} = f_x = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x,y)}{h}', note: 'y ko constant maano' },
        { name: 'First Order w.r.t y', latex: '\\frac{\\partial z}{\\partial y} = f_y = \\lim_{k \\to 0} \\frac{f(x, y+k) - f(x,y)}{k}', note: 'x ko constant maano' },
        { name: 'Second Order Pure', latex: 'r = \\frac{\\partial^2 z}{\\partial x^2} = f_{xx}, \\quad t = \\frac{\\partial^2 z}{\\partial y^2} = f_{yy}', note: 'Standard engineering symbols: r, t' },
        { name: 'Mixed Order', latex: 's = \\frac{\\partial^2 z}{\\partial x \\partial y} = \\frac{\\partial^2 z}{\\partial y \\partial x} = f_{xy}', note: 'Standard engineering symbol: s' }
      ]
    },
    equationBreakdown: {
      title: 'Mixed Second Order Partial Derivative Formula',
      formulaLatex: '\\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left( \\frac{\\partial f}{\\partial x} \\right)',
      kyunAisaHotaHai: 'Iska matlab hai: Pehle function f ka rate of change x ke along nikalo (y ko freeze karke). Fir jo naya expression aaye, uska rate of change y ke along nikalo (x ko freeze karke). Jab function smooth curve hota hai, order badalne par bhi answer bilkul same rehta hai!',
      termExplanations: [
        { symbol: 'f', symbolLatex: 'f(x, y)', meaning: 'Original multivariable function jisme x aur y dono variables hain.' },
        { symbol: '∂/∂x', symbolLatex: '\\frac{\\partial}{\\partial x}', meaning: 'Differentiation operator jo y ko ek frozen number (constant) maanta hai.' },
        { symbol: '∂/∂y', symbolLatex: '\\frac{\\partial}{\\partial y}', meaning: 'Differentiation operator jo x ko ek frozen number (constant) maanta hai.' }
      ],
      numericExample: {
        values: 'f(x, y) = x^2 - 2xy (Summer 2025 Paper Q1(a))',
        calculationLatex: '\\frac{\\partial f}{\\partial x} = 2x - 2y \\implies \\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}(2x - 2y) = 0 - 2 = -2',
        result: '\\frac{\\partial^2 f}{\\partial y \\partial x} = -2'
      }
    },
    examTemplate: {
      questionType: 'Find Second Order / Mixed Partial Derivative (e.g. Summer 2025 Q1(a))',
      totalMarks: '2 Marks',
      examinerCatchphrase: 'Examiner checks if you explicitly wrote "Treating y as constant" in Step 1 and "Treating x as constant" in Step 2.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Find First Partial Derivative',
          whatToWrite: 'Differentiating f(x, y) partially with respect to x, keeping y as constant:',
          latexTemplate: '\\frac{\\partial f}{\\partial x} = \\dots',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Differentiate with respect to y',
          whatToWrite: 'Differentiating (∂f/∂x) partially with respect to y, keeping x as constant:',
          latexTemplate: '\\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right) = \\text{Final Answer}',
          marksAllotted: '1 Mark'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'First Order Partial Derivatives',
        problem: 'Find ∂z/∂x and ∂z/∂y for z = x^3 + 3x^2 y + 4y^3 + 7x - 2y + 5',
        latexProblem: 'z = x^3 + 3x^2 y + 4y^3 + 7x - 2y + 5',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Differentiate z w.r.t x, keeping y constant.',
            whyThisStep: 'y constant hai toh 4y^3 ka derivative 0 ho jayega, aur 3x^2 y me 3y aage coefficient ban jayega.',
            mathLatex: '\\frac{\\partial z}{\\partial x} = 3x^2 + 3(2x)y + 0 + 7 - 0 + 0 = 3x^2 + 6xy + 7'
          },
          {
            stepNumber: 2,
            explanation: 'Differentiate z w.r.t y, keeping x constant.',
            whyThisStep: 'x constant hai toh x^3 aur 7x ka derivative 0 ho jayega.',
            mathLatex: '\\frac{\\partial z}{\\partial y} = 0 + 3x^2(1) + 12y^2 + 0 - 2 + 0 = 3x^2 + 12y^2 - 2'
          }
        ],
        finalAnswer: '∂z/∂x = 3x^2 + 6xy + 7,  ∂z/∂y = 3x^2 + 12y^2 - 2'
      },
      {
        title: 'Verifying Mixed Derivatives Equality',
        problem: 'For u = e^{x} \\cos(y), verify that ∂²u/(∂x∂y) = ∂²u/(∂y∂x).',
        latexProblem: 'u = e^x \\cos y',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Pehle ∂u/∂x aur ∂u/∂y calculate karo.',
            whyThisStep: '∂u/∂x me cos(y) constant hai: e^x cos(y). ∂u/∂y me e^x constant hai: -e^x sin(y).',
            mathLatex: '\\frac{\\partial u}{\\partial x} = e^x \\cos y, \\quad \\frac{\\partial u}{\\partial y} = -e^x \\sin y'
          },
          {
            stepNumber: 2,
            explanation: 'Ab ∂u/∂x ko y se karo, aur ∂u/∂y ko x se karo.',
            whyThisStep: 'Dono orders check karne ke liye.',
            mathLatex: '\\frac{\\partial^2 u}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}(e^x \\cos y) = -e^x \\sin y; \\quad \\frac{\\partial^2 u}{\\partial x \\partial y} = \\frac{\\partial}{\\partial x}(-e^x \\sin y) = -e^x \\sin y'
          }
        ],
        finalAnswer: 'Both mixed derivatives are equal to -e^x sin(y). Hence verified!'
      }
    ],
    shortcuts: [
      {
        title: 'The "Cover-Up" Trick',
        rule: 'Jab x ke respect me kar rahe ho, toh imaginary hath se sabhi "y" ko chhipa do aur usko number "5" ki tarah padho. Jaise 3x^2 y ban gaya 3x^2(5) = 15x^2 -> derivative 30x!',
        whenToUse: 'Jab confuse ho jao ki y ka kya karein.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.2-p1',
        question: 'If z = x^2 y^3, find ∂²z/∂x² and ∂²z/∂y².',
        latex: 'z = x^2 y^3',
        hint: 'Do baar partial differentiation karo.',
        solution: '∂z/∂x = 2xy^3 => ∂²z/∂x² = 2y^3. ∂z/∂y = 3x^2 y^2 => ∂²z/∂y² = 6x^2 y.',
        solutionLatex: '\\frac{\\partial^2 z}{\\partial x^2} = 2y^3, \\quad \\frac{\\partial^2 z}{\\partial y^2} = 6x^2 y'
      },
      {
        id: '1.2-p2',
        question: 'If u = \\ln(x^2 + y^2), find ∂u/∂x.',
        latex: 'u = \\ln(x^2 + y^2)',
        hint: 'Chain rule: 1/(x^2 + y^2) * ∂/∂x(x^2 + y^2)',
        solution: '∂u/∂x = (1 / (x^2 + y^2)) * (2x + 0) = 2x / (x^2 + y^2).',
        solutionLatex: '\\frac{\\partial u}{\\partial x} = \\frac{2x}{x^2 + y^2}'
      },
      {
        id: '1.2-p3',
        question: 'Check if f(x, y) = x^2 - y^2 satisfies Laplace equation ∂²f/∂x² + ∂²f/∂y² = 0.',
        hint: 'Find fxx and fyy, then add them.',
        solution: 'fx = 2x => fxx = 2. fy = -2y => fyy = -2. fxx + fyy = 2 + (-2) = 0. Yes, it satisfies!',
        solutionLatex: 'f_{xx} + f_{yy} = 2 - 2 = 0'
      }
    ],
    commonMistakes: [
      'y ko zero bana dena jab wo x ke sath multiply ho! (3xy ka derivative w.r.t x sirf 3y hota hai, 0 nahi).',
      'Ordinary "d" aur partial "∂" ko mix kar dena.'
    ],
    examTip: 'Formula likhte waqt "Treating y as constant" bracket me zaroor likho. Examiner impress hota hai.'
  },
  {
    id: '1.3',
    unitId: 1,
    title: 'Homogeneous Function',
    subtitle: 'Degree of Homogeneity aur Substitution Method',
    yeKyaHai: {
      definition: 'Ek function f(x, y) tab homogeneous kehlaata hai jab uske har term ki total power (degree) bilkul SAME ho, ya phir x ki jagah tx aur y ki jagah ty rakhne par t^n bahar nikal aaye.',
      analogy: 'Imagine karo ek recipe jisme agar tum har ingredient (aloo aur pyaaz) ko double (2x) kar do, toh total khana bhi exactly 2^n times ban jaaye. Har cheez ek hi ratio me scale hoti hai!'
    },
    groundLevel: {
      intro: 'Homogeneous function Euler\'s Theorem ka base pillar hai. Agar function homogeneous nahi hai toh Euler\'s theorem nahi lag sakta.',
      points: [
        {
          heading: 'Degree "n" kya hoti hai?',
          content: 'Agar hum x ko tx aur y ko ty se replace karein, aur function ban jaaye: f(tx, ty) = t^n * f(x, y), toh n ko us function ki degree of homogeneity kehte hain.'
        },
        {
          heading: 'Fractional & Zero Degree',
          content: 'Degree positive integer (1, 2, 3), zero (0), negative (-1), ya fraction (1/2, 3/2) bhi ho sakti hai! Jaise u = (x+y)/(x-y) ki degree = 1 - 1 = 0 hoti hai.'
        },
        {
          heading: 'Trigonometric & Logarithmic Angles',
          content: 'Jab sin, cos, tan ya log ke andar (y/x) ya (x/y) ho, toh wo zero degree hoti hai kyunki t/t cancel ho jata hai.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Homogeneity Check Formulas:',
      formulas: [
        { name: 'Definition Test', latex: 'f(tx, ty) = t^n f(x, y)', note: 'n = degree of homogeneity' },
        { name: 'Alternative Form', latex: 'f(x, y) = x^n \\phi\\left(\\frac{y}{x}\\right)', note: 'x^n common nikalne par degree direct dikhti hai' },
        { name: 'Degree of Quotient', latex: '\\text{Degree of } \\frac{P(x,y)}{Q(x,y)} = \\text{Degree}(P) - \\text{Degree}(Q)', note: 'Numerator degree - Denominator degree' }
      ]
    },
    solvedExamples: [
      {
        title: 'Finding Degree of Algebraic Function',
        problem: 'Find the degree of homogeneity of f(x, y) = (x^3 + y^3) / (x + y)',
        latexProblem: 'f(x, y) = \\frac{x^3 + y^3}{x + y}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'x ki jagah tx aur y ki jagah ty substitute karo.',
            whyThisStep: 'Ye homogeneity check karne ka standard test hai.',
            mathLatex: 'f(tx, ty) = \\frac{(tx)^3 + (ty)^3}{tx + ty} = \\frac{t^3(x^3 + y^3)}{t(x + y)}'
          },
          {
            stepNumber: 2,
            explanation: 't ki powers ko simplify karo.',
            whyThisStep: 't^3 / t^1 = t^(3 - 1) = t^2.',
            mathLatex: 'f(tx, ty) = t^2 \\cdot \\left[\\frac{x^3 + y^3}{x + y}\\right] = t^2 f(x, y)'
          }
        ],
        finalAnswer: 'f(x, y) is homogeneous of degree n = 2.'
      },
      {
        title: 'Square Root Homogeneous Function',
        problem: 'Find the degree of u = (\\sqrt{x} + \\sqrt{y}) / (x^2 + y^2)',
        latexProblem: 'u = \\frac{\\sqrt{x} + \\sqrt{y}}{x^2 + y^2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Numerator aur Denominator ki individual degrees check karo.',
            whyThisStep: 'Shortcut: Degree = Numerator Degree - Denominator Degree.',
            mathLatex: '\\text{Num Degree} = 1/2, \\quad \\text{Denom Degree} = 2'
          },
          {
            stepNumber: 2,
            explanation: 'Subtract karo: 1/2 - 2 = -3/2.',
            whyThisStep: 'Algebraic rule for division.',
            mathLatex: 'n = \\frac{1}{2} - 2 = -\\frac{3}{2}'
          }
        ],
        finalAnswer: 'Degree n = -3/2.'
      }
    ],
    shortcuts: [
      {
        title: '3-Second Degree Counter Shortcut',
        rule: 'Numerator ke kisi bhi ek term ki power dekho. Denominator ke kisi ek term ki power dekho. Subtract kar do: n = Power(Num) - Power(Denom)! Bas dhyaan rahe har term ki powers balanced honi chahiye.',
        whenToUse: 'Exam me direct 1-mark ya Euler theorem solve karte waqt instant degree find karne ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.3-p1',
        question: 'Find the degree of f(x, y) = (x^2 y^2) / (x + y)^2.',
        hint: 'Numerator power: 2+2=4. Denominator power: 2.',
        solution: 'n = 4 - 2 = 2. It is homogeneous of degree 2.',
        solutionLatex: 'n = (2+2) - 2 = 2'
      },
      {
        id: '1.3-p2',
        question: 'Is f(x, y) = x^2 + \\sin(y) homogeneous?',
        hint: 'Check if sin(ty) can factor out t.',
        solution: 'No! sin(ty) se t bahar nahi nikal sakta. Isliye ye homogeneous nahi hai.',
        solutionLatex: '\\text{Not homogeneous}'
      },
      {
        id: '1.3-p3',
        question: 'What is the degree of u = \\tan^{-1}(y/x)?',
        hint: 'Angle y/x has degree 1 - 1 = 0.',
        solution: 'tan^-1( (ty)/(tx) ) = tan^-1(y/x) = t^0 * tan^-1(y/x). Degree n = 0.',
        solutionLatex: 'n = 0'
      }
    ],
    commonMistakes: [
      'x^2 + y ko homogeneous samajhna — x ki power 2 hai par y ki power 1 hai, powers unequal hain toh NOT homogeneous!',
      'sin(x/y) me soch na ki sin hai toh homogeneous nahi hoga — x/y ratio hai toh zero degree homogeneous hota hai!'
    ],
    examTip: 'Hamesha f(tx, ty) = t^n f(x, y) likh kar dikhao, step marking me full marks milte hain.'
  },
  {
    id: '1.4',
    unitId: 1,
    title: "Euler's Theorem on Homogeneous Function",
    subtitle: 'Two Variables ke liye Euler Theorem aur Modified Euler Shortcut',
    yeKyaHai: {
      definition: "Euler's Theorem ek powerful shortcut hai jo bina lambi partial derivatives calculate kiye, seedhe x(∂u/∂x) + y(∂u/∂y) ki value de deta hai: x(∂u/∂x) + y(∂u/∂y) = n * u!",
      analogy: 'Socho agar kisi complex circuit ka total output nikalne ke liye 2 page ki calculation karni pad rahi ho, par ek simple switch dabaate hi seedhe Answer = n * (Input) mil jaye — Euler\'s Theorem wahi magic switch hai!'
    },
    groundLevel: {
      intro: 'Engineering exams ka sabse favourite 5-mark ya 8-mark question yahi hota hai.',
      points: [
        {
          heading: 'Statement of Euler\'s Theorem',
          content: 'Agar u = f(x, y) do variables x aur y ka homogeneous function hai jiski degree "n" hai, toh: x(∂u/∂x) + y(∂u/∂y) = n*u.'
        },
        {
          heading: 'Second Order Extension',
          content: 'x²(∂²u/∂x²) + 2xy(∂²u/∂x∂y) + y²(∂²u/∂y²) = n(n - 1)u. Ek line me second order answer!'
        },
        {
          heading: 'Modified Euler\'s Theorem (Non-homogeneous u)',
          content: 'Agar u = sin⁻¹(z) ya log(z) ho jahan z homogeneous hai degree n ka, toh function u homogeneous nahi hota par F(u) = z homogeneous hota hai. Tab: x(∂u/∂x) + y(∂u/∂y) = n * [F(u) / F\'(u)]!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Euler Master Formulas:',
      formulas: [
        { name: "Euler's Theorem (1st Order)", latex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n \\cdot u', note: 'u must be homogeneous of degree n' },
        { name: "Euler's Theorem (2nd Order)", latex: 'x^2\\frac{\\partial^2 u}{\\partial x^2} + 2xy\\frac{\\partial^2 u}{\\partial x \\partial y} + y^2\\frac{\\partial^2 u}{\\partial y^2} = n(n-1)u', note: 'Direct 2nd order shortcut' },
        { name: 'Modified Euler Shortcut', latex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n \\cdot \\frac{F(u)}{F\'(u)} = \\psi(u)', note: 'For u = f(z) inverse forms' }
      ]
    },
    equationBreakdown: {
      title: "Euler's Theorem 1st Order Equation Breakdown",
      formulaLatex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n \\cdot u',
      kyunAisaHotaHai: 'Euler\'s theorem is based on Homogeneity: Agar function ki har term ki degree n hai, toh origin se radial direction me kisi point (x, y) ko scale karne par function t^n times scale hota hai. Is rate of scaling ka directional derivative directly n * u deta hai.',
      termExplanations: [
        { symbol: 'x, y', symbolLatex: 'x, y', meaning: 'Independent coordinates / variables' },
        { symbol: '∂u/∂x, ∂u/∂y', symbolLatex: '\\frac{\\partial u}{\\partial x}, \\frac{\\partial u}{\\partial y}', meaning: 'First order partial derivatives w.r.t x and y' },
        { symbol: 'n', symbolLatex: 'n', meaning: 'Degree of homogeneity (Numerator degree minus Denominator degree)' },
        { symbol: 'u', symbolLatex: 'u', meaning: 'The original homogeneous function itself' }
      ],
      numericExample: {
        values: 'u = x^3 + y^3 (Summer 2026 Q5(a)(ii)), Degree n = 3',
        calculationLatex: 'x(3x^2) + y(3y^2) = 3x^3 + 3y^3 = 3(x^3 + y^3) = 3u',
        result: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = 3u'
      }
    },
    examTemplate: {
      questionType: "Verify Euler's Theorem (Summer 2026 Q5(a)(ii) [3-4 Marks])",
      totalMarks: '4 Marks',
      examinerCatchphrase: 'Examiner checks if you formally tested homogeneity using t^n first, and then proved L.H.S = R.H.S.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Homogeneity & Degree Test',
          whatToWrite: 'Check f(tx, ty) = t^n f(x, y). State degree n clearly:',
          latexTemplate: 'f(tx, ty) = t^n f(x, y) \\implies \\text{Degree } n = \\dots',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Calculate L.H.S',
          whatToWrite: 'Find ∂u/∂x and ∂u/∂y and multiply by x and y respectively:',
          latexTemplate: '\\text{L.H.S} = x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = \\dots',
          marksAllotted: '2 Marks'
        },
        {
          stepNumber: 3,
          stepHeading: 'Verify with R.H.S',
          whatToWrite: 'Factor out n to show it equals n * u:',
          latexTemplate: '\\text{L.H.S} = n \\cdot u = \\text{R.H.S} \\implies \\text{Hence Euler\'s Theorem is verified.}',
          marksAllotted: '1 Mark'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Direct Euler Verification',
        problem: 'If u = (x^2 + y^2) / (x + y), verify Euler\'s theorem.',
        latexProblem: 'u = \\frac{x^2 + y^2}{x + y}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Degree n check karo.',
            whyThisStep: 'Numerator degree 2, denominator degree 1 => n = 2 - 1 = 1.',
            mathLatex: 'u(tx, ty) = \\frac{t^2(x^2 + y^2)}{t(x + y)} = t^1 u(x, y) \\implies n = 1'
          },
          {
            stepNumber: 2,
            explanation: 'Euler\'s theorem apply karo.',
            whyThisStep: 'By Euler theorem: x(∂u/∂x) + y(∂u/∂y) = n*u = 1*u = u.',
            mathLatex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = 1 \\cdot u = u'
          }
        ],
        finalAnswer: 'Verified: x(∂u/∂x) + y(∂u/∂y) = u.'
      },
      {
        title: 'Modified Euler Problem (Most Repeated Exam Question!)',
        problem: 'If u = \\sin^{-1}\\left(\\frac{x + 2y}{\\sqrt{x} + \\sqrt{y}}\\right), prove that x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = \\frac{1}{2}\\tan u.',
        latexProblem: 'u = \\sin^{-1}\\left(\\frac{x + 2y}{\\sqrt{x} + \\sqrt{y}}\\right)',
        steps: [
          {
            stepNumber: 1,
            explanation: 'sin ko left hand side le aao taaki right side homogeneous ban sake.',
            whyThisStep: 'u homogeneous nahi hai, par sin(u) homogeneous ban jayega.',
            mathLatex: 'z = \\sin u = \\frac{x + 2y}{\\sqrt{x} + \\sqrt{y}}'
          },
          {
            stepNumber: 2,
            explanation: 'z ki degree calculate karo.',
            whyThisStep: 'Numerator degree 1, denominator degree 1/2 => n = 1 - 1/2 = 1/2.',
            mathLatex: 'n = 1 - \\frac{1}{2} = \\frac{1}{2}'
          },
          {
            stepNumber: 3,
            explanation: 'Modified Euler formula lagao: n * [F(u) / F\'(u)].',
            whyThisStep: 'F(u) = sin(u), F\'(u) = cos(u). Sin/Cos = Tan!',
            mathLatex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n \\frac{\\sin u}{\\cos u} = \\frac{1}{2} \\tan u'
          }
        ],
        finalAnswer: 'Hence proved: x(∂u/∂x) + y(∂u/∂y) = (1/2) tan u.'
      }
    ],
    shortcuts: [
      {
        title: '2-Step Verification Shortcut',
        rule: 'Jab bhi u = sin⁻¹(z), cos⁻¹(z), tan⁻¹(z) ho: Step 1: n = Num degree - Denom degree nikal lo. Step 2: sin⁻¹ hai toh answer (n*tan u), cos⁻¹ hai toh answer (-n*cot u), tan⁻¹ hai toh answer (n/2 * sin 2u)!',
        whenToUse: 'MCQs ya cross-checking answer in 10 seconds.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.4-p1',
        question: 'If u = \\tan^{-1}\\left(\\frac{x^3 + y^3}{x - y}\\right), find the value of x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y}.',
        hint: 'z = tan(u). Degree n = 3 - 1 = 2. Use Modified Euler: n * F(u)/F\'(u) = 2 * tan(u)/sec^2(u) = sin(2u).',
        solution: 'n = 2. x(∂u/∂x) + y(∂u/∂y) = 2 * (sin u / cos u) * cos^2(u) = 2 sin u cos u = sin(2u).',
        solutionLatex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = \\sin(2u)'
      },
      {
        id: '1.4-p2',
        question: 'If u = x^4 + y^4, find x^2(∂²u/∂x²) + 2xy(∂²u/∂x∂y) + y^2(∂²u/∂y²).',
        hint: 'Use Euler 2nd order formula: n(n-1)u with n = 4.',
        solution: 'n = 4. Value = 4(4 - 1)u = 12u = 12(x^4 + y^4).',
        solutionLatex: 'n(n-1)u = 4(3)u = 12u'
      },
      {
        id: '1.4-p3',
        question: 'If u = \\ln\\left(\\frac{x^2 + y^2}{x + y}\\right), find x(∂u/∂x) + y(∂u/∂y).',
        hint: 'e^u = (x^2+y^2)/(x+y), degree n = 1. Modified Euler gives n * e^u / e^u = n = 1.',
        solution: 'e^u has degree 1. Answer = 1 * (e^u / e^u) = 1.',
        solutionLatex: 'x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = 1'
      }
    ],
    commonMistakes: [
      'u ko direct differentiate karne baith jaana chain rule se (3 page lagte hain aur galti pakki hoti hai). Always use Euler!',
      'sin⁻¹ wale question me F\'(u) differentiate karna bhool jaana.'
    ],
    examTip: 'Exam me standard question u = tan⁻¹((x³+y³)/(x-y)) 100% har alternate year aata hai. Iska answer hamesha sin(2u) hota hai!'
  },
  {
    id: '1.5',
    unitId: 1,
    title: 'Maxima and Minima of Function (Two Variables)',
    subtitle: 'Critical Points, rt - s² Test, aur Nature of Extreme Values',
    yeKyaHai: {
      definition: 'Kisi 2D surface z = f(x, y) ki sabse unchi choti (peak = Local Maximum) ya sabse gehra gaddha (valley = Local Minimum) dhoondhne ka mathematical tareeqa.',
      analogy: 'Imagine karo ek pahadi ilaaka. Jahan zameen bilkul flat (horizontal) ho jaye, wo critical point hai. Agar har taraf se niche dhalan ho toh peak (Maxima), agar har taraf upar chadhaai ho toh valley (Minima), aur agar ek taraf se chadhaai aur dusri taraf se dhalan ho toh Saddle Point (jaise ghode ki kaathi)!'
    },
    groundLevel: {
      intro: 'Step-by-step master algorithm jo har question pe apply hota hai:',
      points: [
        {
          heading: 'Step 1: Critical Points Nikalo',
          content: 'fx = ∂f/∂x = 0 aur fy = ∂f/∂y = 0 set karke equations solve karo. Jo (x, y) values aayengi unhe Critical Points kehte hain.'
        },
        {
          heading: 'Step 2: Second Order Derivatives (r, s, t)',
          content: 'Calculate karo: r = fxx = ∂²f/∂x², s = fxy = ∂²f/∂x∂y, t = fyy = ∂²f/∂y².'
        },
        {
          heading: 'Step 3: The rt - s² Discriminant Test',
          content: 'Har critical point par D = (rt - s²) calculate karo. Agar D > 0 and r < 0 => MAXIMA. Agar D > 0 and r > 0 => MINIMA. Agar D < 0 => SADDLE POINT. Agar D = 0 => Test Fails (further investigation needed).'
        }
      ]
    },
    formulaSheet: {
      summary: 'Maxima-Minima Decision Matrix:',
      formulas: [
        { name: 'First Order Conditions', latex: '\\frac{\\partial f}{\\partial x} = 0, \\quad \\frac{\\partial f}{\\partial y} = 0', note: 'Gives stationary/critical points (a, b)' },
        { name: 'Second Order Notations', latex: 'r = \\frac{\\partial^2 f}{\\partial x^2}, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad t = \\frac{\\partial^2 f}{\\partial y^2}', note: 'Evaluate at each critical point' },
        { name: 'Condition for Maximum', latex: 'rt - s^2 > 0 \\quad \\text{and} \\quad r < 0', note: 'Peak point' },
        { name: 'Condition for Minimum', latex: 'rt - s^2 > 0 \\quad \\text{and} \\quad r > 0', note: 'Valley point' },
        { name: 'Saddle Point (Neither Max nor Min)', latex: 'rt - s^2 < 0', note: 'Col or mountain pass shape' }
      ]
    },
    equationBreakdown: {
      title: 'rt - s² Discriminant Test Formula',
      formulaLatex: 'D = rt - s^2 = \\left( \\frac{\\partial^2 f}{\\partial x^2} \\right)\\left( \\frac{\\partial^2 f}{\\partial y^2} \\right) - \\left( \\frac{\\partial^2 f}{\\partial x \\partial y} \\right)^2',
      kyunAisaHotaHai: 'Kyun aisa hota hai? 2D surface par kisi stationary point par surface ka curvature 2x2 Hessian matrix H = [[r, s], [s, t]] se decide hota hai. Is matrix ka determinant hi det(H) = rt - s² hota hai! Agar determinant positive hai, toh surface har direction me ek jaisi curvature rakhti hai (bowl shape peak ya valley). Agar determinant negative hai, toh ek direction me upar aur dusri me niche curvature hoti hai (Saddle shape).',
      termExplanations: [
        { symbol: 'r', symbolLatex: 'r = f_{xx}', meaning: 'Pure second derivative w.r.t x (X-axis ke along curvature)' },
        { symbol: 't', symbolLatex: 't = f_{yy}', meaning: 'Pure second derivative w.r.t y (Y-axis ke along curvature)' },
        { symbol: 's', symbolLatex: 's = f_{xy}', meaning: 'Mixed partial derivative (twist curvature between x and y)' },
        { symbol: 'D', symbolLatex: 'rt - s^2', meaning: 'Hessian determinant; nature test karta hai' }
      ],
      numericExample: {
        values: 'At critical point (-2, 0) for f = 3x^2 - y^2 + x^3 (Summer 2025/2026 Q2(b)): r = -6, s = 0, t = -2',
        calculationLatex: 'rt - s^2 = (-6)(-2) - (0)^2 = +12 - 0 = +12 > 0 \\quad \\text{and} \\quad r = -6 < 0',
        result: 'rt - s^2 > 0 \\text{ and } r < 0 \\implies \\text{Local Maximum!}'
      }
    },
    examTemplate: {
      questionType: 'Discuss Maxima and Minima (Summer 2025 Q2(b), Summer 2026 Q2(c) [4 Marks])',
      totalMarks: '4 Marks',
      examinerCatchphrase: 'Examiner allocates: 1 Mark for stationary points, 1 Mark for r,s,t values, 1 Mark for rt - s² calculation, and 1 Mark for extreme value.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Find Stationary Points',
          whatToWrite: 'Equate first order partial derivatives to zero: ∂f/∂x = 0 and ∂f/∂y = 0. Solve for (x, y):',
          latexTemplate: 'f_x = 0, \\; f_y = 0 \\implies (x_1, y_1), \\, (x_2, y_2)',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Calculate r, s, t at Each Point',
          whatToWrite: 'Differentiate again to compute r = fxx, s = fxy, t = fyy:',
          latexTemplate: 'r = \\frac{\\partial^2 f}{\\partial x^2}, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad t = \\frac{\\partial^2 f}{\\partial y^2}',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 3,
          stepHeading: 'Apply rt - s² Test and State Nature',
          whatToWrite: 'Calculate rt - s²: If > 0 and r < 0 (Maxima), If > 0 and r > 0 (Minima), If < 0 (Saddle point):',
          latexTemplate: 'rt - s^2 = \\dots \\implies \\text{Nature of point}',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 4,
          stepHeading: 'Compute Extreme Value',
          whatToWrite: 'Substitute the point into original function f(x, y):',
          latexTemplate: 'f_{\\max} = f(a, b) = \\text{Answer}',
          marksAllotted: '1 Mark'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Complete Maxima / Minima Examination',
        problem: 'Examine the function f(x, y) = x^3 + y^3 - 3xy for maxima and minima.',
        latexProblem: 'f(x, y) = x^3 + y^3 - 3xy',
        steps: [
          {
            stepNumber: 1,
            explanation: 'fx = 0 aur fy = 0 karke critical points nikalo.',
            whyThisStep: 'Stationary points par tangent plane horizontal hota hai.',
            mathLatex: 'f_x = 3x^2 - 3y = 0 \\implies y = x^2; \\quad f_y = 3y^2 - 3x = 0 \\implies x = y^2'
          },
          {
            stepNumber: 2,
            explanation: 'Substitue y = x^2 into x = y^2.',
            whyThisStep: 'x = (x^2)^2 = x^4 => x^4 - x = 0 => x(x^3 - 1) = 0. x = 0 ya x = 1.',
            mathLatex: 'x = 0 \\implies y = 0 \\quad (0,0); \\quad x = 1 \\implies y = 1 \\quad (1,1)'
          },
          {
            stepNumber: 3,
            explanation: 'Calculate r, s, t.',
            whyThisStep: 'r = fxx = 6x, s = fxy = -3, t = fyy = 6y.',
            mathLatex: 'r = 6x, \\quad s = -3, \\quad t = 6y'
          },
          {
            stepNumber: 4,
            explanation: 'Check at point (0, 0) and (1, 1).',
            whyThisStep: 'At (0,0): r = 0, s = -3, t = 0 => rt - s^2 = 0 - (-3)^2 = -9 < 0 (Saddle Point). At (1,1): r = 6 > 0, s = -3, t = 6 => rt - s^2 = 36 - 9 = 27 > 0, and r = 6 > 0 (Local Minimum).',
            mathLatex: '\\text{At } (1,1): rt - s^2 = 27 > 0, r = 6 > 0 \\implies \\text{Local Minima}'
          }
        ],
        finalAnswer: '(0,0) is Saddle point. (1,1) is Local Minimum with minimum value f(1,1) = 1 + 1 - 3 = -1.'
      }
    ],
    shortcuts: [
      {
        title: 'Mnemonic for r sign in Maxima/Minima',
        rule: 'Upar (Max) jaana hai toh Negative r hona chahiye (jaise gravity niche kheechti hai). Niche (Min) jaana hai toh Positive r hona chahiye! "Opposite mentality: Max loves Negative, Min loves Positive".',
        whenToUse: 'D > 0 aane ke baad r ke sign me confuse mat hona.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.5-p1',
        question: 'Find the stationary points of f(x, y) = x^2 + y^2 - 4x - 6y + 13.',
        hint: 'fx = 2x - 4 = 0, fy = 2y - 6 = 0.',
        solution: '2x = 4 => x = 2. 2y = 6 => y = 3. Stationary point is (2, 3).',
        solutionLatex: '(x, y) = (2, 3)'
      },
      {
        id: '1.5-p2',
        question: 'Determine the nature of (2, 3) for f(x, y) = x^2 + y^2 - 4x - 6y + 13.',
        hint: 'Calculate r, s, t and rt - s^2.',
        solution: 'r = 2, s = 0, t = 2. rt - s^2 = 4 > 0. Since r = 2 > 0, it is a Local Minimum.',
        solutionLatex: 'rt - s^2 = 4 > 0, r = 2 > 0 \\implies \\text{Minimum}'
      },
      {
        id: '1.5-p3',
        question: 'If at a critical point rt - s^2 = -5, what is the nature of the point?',
        hint: 'When rt - s^2 is negative, what does it mean?',
        solution: 'Since rt - s^2 < 0, the point is a Saddle Point (neither maxima nor minima).',
        solutionLatex: '\\text{Saddle Point}'
      }
    ],
    commonMistakes: [
      'Critical points nikalte waqt x^4 - x = 0 me dono taraf x se divide kar dena aur x = 0 solution miss kar dena!',
      'rt - s^2 < 0 aane par bhi r ka sign check karne lagna — rt - s^2 < 0 aate hi seedhe Saddle Point likhna hai!'
    ],
    examTip: 'Agar minimum value ya maximum value poocha ho, toh (x, y) ko original function f(x, y) me substitute karna mat bhoolna.'
  },
  {
    id: '1.6',
    unitId: 1,
    title: "Lagrange's Method of Undetermined Multipliers",
    subtitle: 'One Constraint ke sath Maxima aur Minima (Two Variables)',
    yeKyaHai: {
      definition: 'Jab hume kisi function f(x, y) ka maximum ya minimum nikalna ho, lekin ek shart (constraint) phi(x, y) = 0 di gayi ho, tab Lagrange Multiplier method use hota hai.',
      analogy: 'Imagine karo aapko sabse bada rectangular plot khareedna hai (Area = x*y maximum karna hai), lekin aapki jeb me fence wire sirf 100 meter ki hai (Constraint: 2x + 2y = 100). Boundation ke sath optimize karne ka tool hai Lagrange!'
    },
    groundLevel: {
      intro: 'Bina substitution ke constraints handle karne ka sabse elegant mathematical tareeqa:',
      points: [
        {
          heading: 'Lagrangian Auxiliary Function L',
          content: 'Naya function banate hain: L(x, y, λ) = f(x, y) + λ * φ(x, y), jahan λ (lambda) ko Lagrange Undetermined Multiplier kehte hain.'
        },
        {
          heading: 'Working Rule (Three Equations)',
          content: '1. ∂L/∂x = fx + λ*φx = 0  =>  λ = -fx / φx\n2. ∂L/∂y = fy + λ*φy = 0  =>  λ = -fy / φy\n3. ∂L/∂λ = φ(x, y) = 0 (original constraint)'
        },
        {
          heading: 'Eliminate λ First',
          content: 'Dono λ ki values ko equate karo: fx / φx = fy / φy. Isse x aur y ke beech sidha relation mil jata hai, jise constraint me put karte hi exact values aa jaati hain!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Lagrange Standard Equations:',
      formulas: [
        { name: 'Lagrange Function', latex: 'L(x, y, \\lambda) = f(x, y) + \\lambda \\cdot \\phi(x, y)', note: 'Objective f + lambda * Constraint phi' },
        { name: 'Stationary Conditions', latex: '\\frac{\\partial L}{\\partial x} = 0, \\quad \\frac{\\partial L}{\\partial y} = 0, \\quad \\frac{\\partial L}{\\partial \\lambda} = 0', note: 'Three equations to solve for x, y, lambda' },
        { name: 'Elimination Ratio Trick', latex: '\\frac{f_x}{\\phi_x} = \\frac{f_y}{\\phi_y} = -\\lambda', note: 'Directly relates x and y' }
      ]
    },
    solvedExamples: [
      {
        title: 'Classic Rectangle Area Optimization',
        problem: 'Find the dimensions of a rectangle with perimeter 40 cm having maximum area.',
        latexProblem: 'f(x, y) = xy \\quad \\text{subject to} \\quad 2x + 2y = 40',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Objective function aur constraint identify karo.',
            whyThisStep: 'Maximize f(x, y) = xy under constraint φ(x, y) = 2x + 2y - 40 = 0 (or x + y - 20 = 0).',
            mathLatex: 'f(x, y) = xy, \\quad \\phi(x, y) = x + y - 20 = 0'
          },
          {
            stepNumber: 2,
            explanation: 'Lagrangian L formulate karo aur derivatives zero set karo.',
            whyThisStep: 'L = xy + λ(x + y - 20).',
            mathLatex: '\\frac{\\partial L}{\\partial x} = y + \\lambda(1) = 0 \\implies \\lambda = -y; \\quad \\frac{\\partial L}{\\partial y} = x + \\lambda(1) = 0 \\implies \\lambda = -x'
          },
          {
            stepNumber: 3,
            explanation: 'λ equate karo aur constraint me put karo.',
            whyThisStep: '-y = -x => x = y. Rectangle becomes a square!',
            mathLatex: 'x + x = 20 \\implies 2x = 20 \\implies x = 10, \\quad y = 10'
          }
        ],
        finalAnswer: 'Dimensions are x = 10 cm and y = 10 cm (Square gives maximum area = 100 cm²).'
      }
    ],
    shortcuts: [
      {
        title: 'Symmetry Shortcut for Lagrange',
        rule: 'Agar objective function aur constraint dono x aur y me perfectly symmetric hain (jaise x + y = c aur xy max, ya x² + y² = c aur x + y max), toh answer HAMESHA x = y par hi aayega!',
        whenToUse: 'Competitive exams ya solution cross-check karne ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '1.6-p1',
        question: 'Find the minimum value of f(x, y) = x^2 + y^2 subject to x + y = 10.',
        hint: 'By symmetry x = y. 2x = 10 => x = 5, y = 5.',
        solution: 'x = 5, y = 5. Minimum value = 5^2 + 5^2 = 25 + 25 = 50.',
        solutionLatex: 'f_{\\min} = 5^2 + 5^2 = 50'
      },
      {
        id: '1.6-p2',
        question: 'Formulate the Lagrangian for f(x, y) = 3x + 4y subject to x^2 + y^2 = 25.',
        hint: 'L = f(x, y) + lambda*(phi(x,y)).',
        solution: 'L(x, y, λ) = 3x + 4y + λ(x^2 + y^2 - 25).',
        solutionLatex: 'L = 3x + 4y + \\lambda(x^2 + y^2 - 25)'
      },
      {
        id: '1.6-p3',
        question: 'Divide the number 30 into two parts such that their product is maximum.',
        hint: 'Maximize xy subject to x + y = 30.',
        solution: 'Symmetric problem: x = y => 2x = 30 => x = 15, y = 15. Product = 225.',
        solutionLatex: 'x = 15, y = 15, \\quad \\text{Max Product} = 225'
      }
    ],
    commonMistakes: [
      'Constraint function me right side constant ko zero banana bhool jaana (φ = x + y - c).',
      'λ ki value nikalne me time waste karna jabki x aur y ka relation nikal kar direct substitute karna kaafi hota hai.'
    ],
    examTip: 'Exam me "Equating the values of λ" step ko alag line me box bana ke likho, examiner ko clear dikhta hai.'
  }
];
