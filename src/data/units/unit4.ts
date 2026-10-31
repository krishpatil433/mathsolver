import { SubTopic } from '../../types/math';

export const unit4SubTopics: SubTopic[] = [
  {
    id: '4.1',
    unitId: 4,
    title: 'Intro to Numerical Differentiation & Integration',
    subtitle: 'Discrete Data Tables, Step Size h, Finite Differences ka Funda',
    yeKyaHai: {
      definition: 'Jab humare paas continuous function f(x) ka koi direct formula na ho, balki experiment se mila tabular data (x0, y0), (x1, y1), ... ho, tab derivatives aur integrals calculate karne ke tareeqon ko Numerical Methods kehte hain.',
      analogy: 'Imagine karo ek car test-drive ho rahi hai. Har 5 second baad car ki position note ki gayi hai. Tumhe exact acceleration ya total distance calculate karna hai bina kisi math formula ke — sirf table ke numbers dekh kar! Wahi numerical maths karta hai.'
    },
    groundLevel: {
      intro: 'Analytical calculus vs Numerical calculus:',
      points: [
        {
          heading: 'Equal Interval Step Size (h)',
          content: 'x values ke beech ka fixed gap: h = x1 - x0 = x2 - x1 = (b - a)/n. Hamesha dhyaan rakho ki h equidistant hona chahiye standard formulas ke liye.'
        },
        {
          heading: 'Forward vs Backward Difference',
          content: 'Forward difference: Δy0 = y1 - y0. Backward difference: ∇y1 = y1 - y0. Shuruat ke points ke liye Forward, aakhri points ke liye Backward interpolation use karte hain.'
        },
        {
          heading: 'Numerical Integration ka Principle',
          content: 'Integration area under the curve hota hai. Numerical integration curve ke niche ke pure area ko chhote-chhote strips (trapeziums ya parabolas) me divide karke sabko jod deta hai!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Basic Setup & Operators:',
      formulas: [
        { name: 'Step Size (h)', latex: 'h = \\frac{b - a}{n} = x_{i+1} - x_i', note: 'Uniform spacing between grid points' },
        { name: 'Forward Difference Δ', latex: '\\Delta y_0 = y_1 - y_0, \\quad \\Delta^2 y_0 = \\Delta y_1 - \\Delta y_0', note: 'Moving forward from table top' },
        { name: 'Backward Difference ∇', latex: '\\nabla y_n = y_n - y_{n-1}, \\quad \\nabla^2 y_n = \\nabla y_n - \\nabla y_{n-1}', note: 'Moving backward from table bottom' }
      ]
    },
    solvedExamples: [
      {
        title: 'Constructing Finite Difference Table',
        problem: 'Construct the forward difference table for: x = [0, 1, 2, 3], y = [1, 3, 9, 21].',
        latexProblem: 'x = [0, 1, 2, 3], \\quad y = [1, 3, 9, 21]',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Compute first forward differences Δy.',
            whyThisStep: 'y1 - y0 = 3 - 1 = 2; y2 - y1 = 9 - 3 = 6; y3 - y2 = 21 - 9 = 12.',
            mathLatex: '\\Delta y_0 = 2, \\quad \\Delta y_1 = 6, \\quad \\Delta y_2 = 12'
          },
          {
            stepNumber: 2,
            explanation: 'Compute second forward differences Δ²y.',
            whyThisStep: '6 - 2 = 4; 12 - 6 = 6.',
            mathLatex: '\\Delta^2 y_0 = 4, \\quad \\Delta^2 y_1 = 6'
          },
          {
            stepNumber: 3,
            explanation: 'Compute third forward difference Δ³y.',
            whyThisStep: '6 - 4 = 2.',
            mathLatex: '\\Delta^3 y_0 = 2'
          }
        ],
        finalAnswer: 'Difference table created with h = 1, Δy0 = 2, Δ²y0 = 4, Δ³y0 = 2.'
      }
    ],
    shortcuts: [
      {
        title: 'Constant Higher Difference Rule',
        rule: 'Agar y ek polynomial of degree n hai, toh uska nth difference Δⁿy HAMESHA CONSTANT hota hai aur usse aage ke saare differences 0 hote hain! (Jaise quadratic degree 2 ke liye Δ²y constant).',
        whenToUse: 'Check calculation accuracy in difference tables.'
      }
    ],
    practiceQuestions: [
      {
        id: '4.1-p1',
        question: 'If x goes from 0 to 6 with 6 equal subintervals, what is h?',
        hint: 'h = (b - a)/n.',
        solution: 'h = (6 - 0)/6 = 1.',
        solutionLatex: 'h = \\frac{6 - 0}{6} = 1'
      }
    ],
    commonMistakes: [
      'h nikalte waqt number of points aur number of intervals me confuse hona: Agar 7 points diye hain, toh intervals n = 7 - 1 = 6 hote hain!'
    ],
    examTip: 'Hamesha difference table me neat columns banao: x, y, Δy, Δ²y, Δ³y.'
  },
  {
    id: '4.2',
    unitId: 4,
    title: 'Derivative Using Forward and Backward Interpolation',
    subtitle: 'dy/dx at x = x0 (Forward) aur x = xn (Backward) Formulas',
    yeKyaHai: {
      definition: 'Newton-Gregory Forward aur Backward interpolation formulas ko differentiate karke table ke starting ya ending points par derivative (dy/dx aur d²y/dx²) nikalna.',
      analogy: 'Agar aapko kisi stock price ki subah 9 baje ki initial speed (dy/dx at start) nikalni hai toh Forward use karo, aur agar market close hone ke waqt sham 3:30 ki final speed nikalni hai toh Backward use karo!'
    },
    groundLevel: {
      intro: 'Derivatives at nodal points (p = 0):',
      points: [
        {
          heading: 'Derivative at Initial Point x = x0 (Forward)',
          content: 'At x = x0 (jahan u = (x - x0)/h = 0): dy/dx = (1/h) * [ Δy0 - (1/2)Δ²y0 + (1/3)Δ³y0 - (1/4)Δ⁴y0 + ... ]. Signs alternate (+, -, +, -).'
        },
        {
          heading: 'Second Derivative at x = x0',
          content: 'd²y/dx² = (1/h²) * [ Δ²y0 - Δ³y0 + (11/12)Δ⁴y0 - ... ].'
        },
        {
          heading: 'Derivative at End Point x = xn (Backward)',
          content: 'At x = xn: dy/dx = (1/h) * [ ∇yn + (1/2)∇²yn + (1/3)∇³yn + (1/4)∇⁴yn + ... ]. ALL SIGNS ARE POSITIVE (+, +, +, +)!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Numerical Derivative Formulas:',
      formulas: [
        { name: 'Forward dy/dx (at x = x0)', latex: '\\left(\\frac{dy}{dx}\\right)_{x=x_0} = \\frac{1}{h}\\left[\\Delta y_0 - \\frac{1}{2}\\Delta^2 y_0 + \\frac{1}{3}\\Delta^3 y_0 - \\frac{1}{4}\\Delta^4 y_0 + \\dots\\right]', note: 'Alternating signs (+, -, +, -)' },
        { name: 'Forward d²y/dx² (at x = x0)', latex: '\\left(\\frac{d^2y}{dx^2}\\right)_{x=x_0} = \\frac{1}{h^2}\\left[\\Delta^2 y_0 - \\Delta^3 y_0 + \\frac{11}{12}\\Delta^4 y_0 - \\dots\\right]', note: 'Factor 1/h² outside' },
        { name: 'Backward dy/dx (at x = xn)', latex: '\\left(\\frac{dy}{dx}\\right)_{x=x_n} = \\frac{1}{h}\\left[\\nabla y_n + \\frac{1}{2}\\nabla^2 y_n + \\frac{1}{3}\\nabla^3 y_n + \\frac{1}{4}\\nabla^4 y_n + \\dots\\right]', note: 'All positive signs!' }
      ]
    },
    equationBreakdown: {
      title: 'Newton Forward Derivative Formula Breakdown',
      formulaLatex: 'y\'(x_0) = \\frac{1}{h}\\left[ \\Delta y_0 - \\frac{1}{2}\\Delta^2 y_0 + \\frac{1}{3}\\Delta^3 y_0 - \\frac{1}{4}\\Delta^4 y_0 + \\dots \\right]',
      kyunAisaHotaHai: 'Kyun aisa hota hai? Newton Forward formula y(x) = y0 + u Δy0 + u(u-1)/2! Δ²y0 + ... hota hai jahan u = (x - x0)/h. Jab hum chain rule dy/dx = (dy/du) * (du/dx) lagate hain, du/dx = 1/h bahar aa jata hai! Initial point x = x0 par u = 0 put karne par polynomials ke derivative coefficients 1, -1/2, 1/3, -1/4 ban jaate hain.',
      termExplanations: [
        { symbol: 'h', symbolLatex: 'h = x_{i+1} - x_i', meaning: 'Uniform spacing / step-size between consecutive x data values' },
        { symbol: 'Δy0', symbolLatex: '\\Delta y_0', meaning: 'First forward difference: y1 - y0' },
        { symbol: 'Δ²y0, Δ³y0', symbolLatex: '\\Delta^2 y_0, \\Delta^3 y_0', meaning: 'Higher order forward differences from the top row of the table' },
        { symbol: '1/h', symbolLatex: '\\frac{1}{h}', meaning: 'Scaling factor converting step changes into actual rate of change' }
      ],
      numericExample: {
        values: 'Data: x = [0, 1, 2, 3, 4, 5], y = [4, 8, 15, 7, 6, 2] (Summer 2025 Q5(a), Winter 2025 Q5(b), Summer 2026 Q6(b))',
        calculationLatex: 'h = 1, \\; \\Delta y_0 = 4, \\; \\Delta^2 y_0 = 3, \\; \\Delta^3 y_0 = -18, \\; \\Delta^4 y_0 = 40, \\; \\Delta^5 y_0 = -72',
        result: 'y\'(0) = \\frac{1}{1}\\left[ 4 - \\frac{3}{2} + \\frac{-18}{3} - \\frac{40}{4} + \\frac{-72}{5} \\right] = -27.9'
      }
    },
    examTemplate: {
      questionType: 'Find y\'(0) and y\'\'(0) from Table (Repeated in S25, W25, S26 [6 Marks])',
      totalMarks: '6 Marks',
      examinerCatchphrase: 'Examiner awards: 2M for complete difference table, 2M for y\'(0) formula & evaluation, and 2M for y\'\'(0) formula & evaluation.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Construct Complete Forward Difference Table',
          whatToWrite: 'Identify h = 1. Create table columns: x, y, Δy, Δ²y, Δ³y, Δ⁴y, Δ⁵y:',
          latexTemplate: '\\begin{array}{c|c|c|c|c} x & y & \\Delta y & \\Delta^2 y & \\dots \\end{array}',
          marksAllotted: '2 Marks'
        },
        {
          stepNumber: 2,
          stepHeading: 'Write y\'(x0) Formula and Substitute Values',
          whatToWrite: 'State Newton\'s forward derivative formula at x = x0:',
          latexTemplate: 'y\'(x_0) = \\frac{1}{h}\\left[\\Delta y_0 - \\frac{1}{2}\\Delta^2 y_0 + \\frac{1}{3}\\Delta^3 y_0 - \\frac{1}{4}\\Delta^4 y_0 + \\frac{1}{5}\\Delta^5 y_0\\right] = \\dots',
          marksAllotted: '2 Marks'
        },
        {
          stepNumber: 3,
          stepHeading: 'Write y\'\'(x0) Formula and Substitute Values',
          whatToWrite: 'State Newton\'s second derivative formula at x = x0:',
          latexTemplate: 'y\'\'(x_0) = \\frac{1}{h^2}\\left[\\Delta^2 y_0 - \\Delta^3 y_0 + \\frac{11}{12}\\Delta^4 y_0 - \\frac{5}{6}\\Delta^5 y_0\\right] = \\dots',
          marksAllotted: '2 Marks'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Calculate dy/dx at Beginning of Table',
        problem: 'Given data: x = [1, 2, 3, 4], y = [1, 8, 27, 64]. Find dy/dx at x = 1.',
        latexProblem: 'x = [1, 2, 3, 4], \\quad y = [1, 8, 27, 64] \\quad (y = x^3)',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Find h and forward differences at x0 = 1.',
            whyThisStep: 'h = 2 - 1 = 1. Δy0 = 8 - 1 = 7. Δy1 = 27 - 8 = 19. Δy2 = 64 - 27 = 37.',
            mathLatex: '\\Delta y_0 = 7, \\quad \\Delta y_1 = 19, \\quad \\Delta y_2 = 37'
          },
          {
            stepNumber: 2,
            explanation: 'Find higher differences.',
            whyThisStep: 'Δ²y0 = 19 - 7 = 12. Δ²y1 = 37 - 19 = 18. Δ³y0 = 18 - 12 = 6.',
            mathLatex: '\\Delta^2 y_0 = 12, \\quad \\Delta^3 y_0 = 6'
          },
          {
            stepNumber: 3,
            explanation: 'Substitute into Forward Derivative Formula.',
            whyThisStep: '(1/1) * [7 - (1/2)(12) + (1/3)(6)].',
            mathLatex: '\\frac{dy}{dx} = \\frac{1}{1}\\left[7 - \\frac{1}{2}(12) + \\frac{1}{3}(6)\\right] = 7 - 6 + 2 = 3'
          }
        ],
        finalAnswer: 'dy/dx at x = 1 is 3 (Matches exact derivative 3x² at x = 1: 3(1)² = 3!).'
      }
    ],
    shortcuts: [
      {
        title: 'Signs Mnemonic for Forward vs Backward',
        rule: 'Forward me signs jhul rahe hain (+, -, +, -). Backward me saare signs DIL KHOL KE POSITIVE (+, +, +, +) hain!',
        whenToUse: 'Formulas memorize karte waqt.'
      }
    ],
    practiceQuestions: [
      {
        id: '4.2-p1',
        question: 'Which formula should you use if asked to find dy/dx near the last value of x in the table?',
        hint: 'Beginning -> Forward; End -> Backward.',
        solution: 'Newton\'s Backward Difference Interpolation formula.',
        solutionLatex: '\\text{Newton\'s Backward Difference Formula}'
      }
    ],
    commonMistakes: [
      'Formula ke aage 1/h lagana bhool jaana — derivative me rate of change per unit interval ke liye 1/h mandatory hai!',
      'Second derivative formula me 1/h lagana jabki wahan 1/h² hota hai.'
    ],
    examTip: 'Formula likh kar boxed formula ke har value ko neat substitute karke step-wise calculate karo.'
  },
  {
    id: '4.3',
    unitId: 4,
    title: 'Numerical Integration Using Trapezoidal Rule',
    subtitle: 'Area Under Curve by Straight Lines (Linear Strips)',
    yeKyaHai: {
      definition: 'Trapezoidal rule curve ke niche ke pure area ko chhote-chhote trapezia (trapezoids) me baant kar approximate area nikalta hai: (h/2) * [ (y0 + yn) + 2 * (baaki saare y) ].',
      analogy: 'Imagine karo ek curved roof hai. Tum use curve banane ke bajaye seedhe-seedhe flat sheets (trapezium) se cover kar rahe ho. Har strip ka area = (h/2) * (left height + right height) hota hai.'
    },
    groundLevel: {
      intro: 'Sabse aasan aur universal numerical integration rule:',
      points: [
        {
          heading: 'Subintervals Shart',
          content: 'Trapezoidal rule me n par KOI PAABANDI NAHI HAI! n odd ho ya even (1, 2, 3, 4, 5, 6...) sab chalega. Yeh iska sabse bada fayda hai.'
        },
        {
          heading: 'Polynomial Degree',
          content: 'Yeh curve ko degree 1 (straight line) maanta hai. Iska truncation error proportional to h² hota hai.'
        },
        {
          heading: 'Golden Formula Structure',
          content: 'Integral = (h/2) * [ (Pehla + Aakhri) + 2 * (Baaki Sabka Sum) ]! Bas do cheezein yaad rakho: First + Last ko akele rakho, aur beech wale sabhi ko 2 se multiply karo.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Trapezoidal Rule Formula:',
      formulas: [
        { name: 'Trapezoidal Master Formula', latex: '\\int_{a}^{b} f(x) dx \\approx \\frac{h}{2} \\Big[ (y_0 + y_n) + 2(y_1 + y_2 + \\dots + y_{n-1}) \\Big]', note: 'Valid for ANY number of subintervals n' },
        { name: 'Single Strip Area', latex: 'A_i = \\frac{h}{2}(y_i + y_{i+1})', note: 'Standard trapezium area' }
      ]
    },
    solvedExamples: [
      {
        title: 'Evaluate ∫(1 to 5) (1/x) dx using Trapezoidal Rule (n = 4)',
        problem: 'Evaluate ∫ 1/x dx from 1 to 5 using Trapezoidal rule with n = 4.',
        latexProblem: 'I = \\int_{1}^{5} \\frac{1}{x} dx, \\quad n = 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Find step size h = (b - a)/n.',
            whyThisStep: 'h = (5 - 1)/4 = 4/4 = 1.',
            mathLatex: 'h = \\frac{5 - 1}{4} = 1'
          },
          {
            stepNumber: 2,
            explanation: 'Create table of x and y = 1/x values.',
            whyThisStep: 'x0=1 => y0=1. x1=2 => y1=0.5. x2=3 => y2=0.3333. x3=4 => y3=0.25. x4=5 => y4=0.2.',
            mathLatex: 'y_0 = 1, \\; y_1 = 0.5, \\; y_2 = 0.3333, \\; y_3 = 0.25, \\; y_4 = 0.2'
          },
          {
            stepNumber: 3,
            explanation: 'Apply Trapezoidal Formula.',
            whyThisStep: '(h/2) * [ (y0 + y4) + 2(y1 + y2 + y3) ].',
            mathLatex: 'I \\approx \\frac{1}{2} \\Big[ (1 + 0.2) + 2(0.5 + 0.3333 + 0.25) \\Big] = \\frac{1}{2} [ 1.2 + 2(1.0833) ] = \\frac{1}{2}[3.3666] = 1.6833'
          }
        ],
        finalAnswer: 'Approximate Integral = 1.6833 (Exact ln(5) ≈ 1.6094).'
      }
    ],
    shortcuts: [
      {
        title: 'Trapezoidal "H/2" Mnemonic',
        rule: 'Trapezoid me 2 parallel sides hoti hain, isliye bahar h/2 aata hai! Formula: (h/2) * [ (Ends) + 2*(Middles) ].',
        whenToUse: 'Quick recall in exam hall.'
      }
    ],
    practiceQuestions: [
      {
        id: '4.3-p1',
        question: 'Can Trapezoidal rule be used when n = 5 (odd number of intervals)?',
        hint: 'Does Trapezoidal have any restriction on n?',
        solution: 'Yes! Trapezoidal rule works for ANY positive integer n (odd or even).',
        solutionLatex: '\\text{Yes, valid for any } n'
      }
    ],
    commonMistakes: [
      'Last ordinate yn ko galti se 2 se multiply karne wale bracket me daal dena. (y0 aur yn sirf EK baar aate hain!).'
    ],
    examTip: 'Examiner points table ke 4 decimal places tak accurate values expect karta hai, rounding me galti mat karo.'
  },
  {
    id: '4.4',
    unitId: 4,
    title: "Simpson's One-Third (1/3) Rule",
    subtitle: 'Parabolic Curves (Degree 2) aur Even Intervals (n must be Multiple of 2)',
    yeKyaHai: {
      definition: "Simpson's 1/3 Rule curve ke har do adjacent strips ko ek PARABOLA (2nd degree polynomial) se approximate karta hai: (h/3) * [ (y0 + yn) + 4*(Odd y) + 2*(Even y) ].",
      analogy: 'Straight line (trapezoid) se curve ka kona chhoot jata hai. Par jab tum use flexible curved wire (parabola) se cover karte ho, toh accuracy 10 guna badh jaati hai!'
    },
    groundLevel: {
      intro: 'Engineering me sabse zyada pucha jaane wala integration rule:',
      points: [
        {
          heading: 'MANDATORY CONDITION: n must be EVEN',
          content: 'Simpson\'s 1/3 rule sirf aur sirf tab lag sakta hai jab subintervals n EVEN number ho (n = 2, 4, 6, 8, ...). Number of points (ordinates) odd honge (n + 1).'
        },
        {
          heading: 'The 1 - 4 - 2 Pattern',
          content: 'Pehla aur aakhri (y0 + yn) -> factor 1.\nODD subscripts wale (y1, y3, y5, ...) -> MULTIPLY BY 4.\nEVEN subscripts wale (y2, y4, y6, ...) -> MULTIPLY BY 2.'
        },
        {
          heading: 'Bahar h/3 Factor',
          content: 'Formula ke bahar h/3 hota hai (isliye iska naam 1/3 rule hai!).'
        }
      ]
    },
    formulaSheet: {
      summary: "Simpson's 1/3 Master Formula:",
      formulas: [
        { name: "Simpson's 1/3 Rule", latex: '\\int_{a}^{b} f(x) dx \\approx \\frac{h}{3} \\Big[ (y_0 + y_n) + 4(y_1 + y_3 + y_5 + \\dots) + 2(y_2 + y_4 + y_6 + \\dots) \\Big]', note: 'CONDITION: n MUST BE EVEN (MULTIPLE OF 2)' },
        { name: 'Shorthand', latex: 'I = \\frac{h}{3}\\left[ X + 4 O + 2 E \\right]', note: 'X = Extremes, O = Odds, E = Evens' }
      ]
    },
    solvedExamples: [
      {
        title: 'Evaluate ∫(0 to 1) 1/(1+x²) dx by Simpson\'s 1/3 Rule (n = 6)',
        problem: 'Evaluate ∫ 1/(1+x²) dx from 0 to 1 with 6 intervals (h = 1/6).',
        latexProblem: 'I = \\int_{0}^{1} \\frac{1}{1 + x^2} dx, \\quad n = 6, \\; h = 1/6',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Verify condition on n.',
            whyThisStep: 'n = 6 is EVEN, so Simpson\'s 1/3 rule is applicable.',
            mathLatex: 'n = 6 \\implies \\text{Even (Applicable)}'
          },
          {
            stepNumber: 2,
            explanation: 'Calculate ordinates y = 1 / (1 + x²).',
            whyThisStep: 'y0=1.0, y1=0.9729, y2=0.9000, y3=0.8000, y4=0.6923, y5=0.5902, y6=0.5000.',
            mathLatex: 'X = y_0 + y_6 = 1.5; \\quad O = y_1+y_3+y_5 = 2.3631; \\quad E = y_2+y_4 = 1.5923'
          },
          {
            stepNumber: 3,
            explanation: 'Apply formula: (h/3) * [ X + 4*O + 2*E ].',
            whyThisStep: '(1/18) * [ 1.5 + 4(2.3631) + 2(1.5923) ].',
            mathLatex: 'I \\approx \\frac{1/6}{3} [ 1.5 + 4(2.3631) + 2(1.5923) ] = \\frac{1}{18}[1.5 + 9.4524 + 3.1846] = \\frac{14.137}{18} \\approx 0.78539'
          }
        ],
        finalAnswer: 'I ≈ 0.78539 (Exact value is π/4 ≈ 0.785398 — accurate up to 4 decimal places!).'
      }
    ],
    shortcuts: [
      {
        title: 'The "X + 4*O + 2*E" Mnemonic',
        rule: 'Formula yaad rakhne ka cheat code: "Extreme + 4 Odds + 2 Evens", pure ko h/3 se multiply karo. Odds pehle aate hain toh unhe bada number (4) milta hai!',
        whenToUse: 'Instant formula recall.'
      }
    ],
    practiceQuestions: [
      {
        id: '4.4-p1',
        question: 'Can Simpson\'s 1/3 rule be applied if n = 5?',
        hint: 'Is 5 an even number?',
        solution: 'NO! n must be an even number (multiple of 2) for Simpson\'s 1/3 rule.',
        solutionLatex: '\\text{No, } n \\text{ must be even}'
      }
    ],
    commonMistakes: [
      'Odd subscripts ko 2 se aur even ko 4 se multiply kar dena — yaad rakho ODD KO 4, EVEN KO 2!',
      'n = 5 ya n = 7 par Simpson 1/3 lagane ki koshish karna.'
    ],
    examTip: 'Pi ki approximate value nikalne ke liye yahi question ∫ 1/(1+x²) dx exam me 8 marks ka standard question hota hai.'
  },
  {
    id: '4.5',
    unitId: 4,
    title: "Simpson's Three-Eighth (3/8) Rule",
    subtitle: 'Cubic Curves (Degree 3) aur Multiples of 3 (n = 3, 6, 9...) Guide',
    yeKyaHai: {
      definition: "Simpson's 3/8 Rule curve ko CUBIC POLYNOMIAL (3rd degree) se approximate karta hai: (3h/8) * [ (y0 + yn) + 3*(Non-multiples of 3) + 2*(Multiples of 3) ].",
      analogy: 'Yeh 1/3 rule ka elder brother hai. Har 3 strips ko ek sath group karta hai, isliye n ka 3 ka multiple (3, 6, 9, 12...) hona mandatory hai!'
    },
    groundLevel: {
      intro: 'Trapezoidal vs Simpson 1/3 vs Simpson 3/8 Master Comparison:',
      points: [
        {
          heading: 'MANDATORY CONDITION: n must be Multiple of 3',
          content: 'Simpson\'s 3/8 rule tabhi lag sakta hai jab subintervals n = 3, 6, 9, 12, ... ho.'
        },
        {
          heading: 'Multiplication Weights',
          content: 'Pehla aur aakhri (y0 + yn) -> Factor 1.\nJo 3 ke multiples hain (y3, y6, y9, ...) -> MULTIPLY BY 2.\nJo 3 ke multiples NAHI hain (y1, y2, y4, y5, ...) -> MULTIPLY BY 3.'
        },
        {
          heading: '"Kab Kaunsa Rule Use Karein" Comprehensive Guide',
          content: '1. Agar n = koi bhi number (odd/even): USE TRAPEZOIDAL.\n2. Agar n = 2, 4, 8, 10 (Even but not multiple of 3): USE SIMPSON 1/3 ONLY.\n3. Agar n = 3, 9, 15 (Odd multiple of 3): USE SIMPSON 3/8 ONLY.\n4. Agar n = 6, 12, 18 (Both even and multiple of 3): BOTH SIMPSON 1/3 AND 3/8 ARE VALID!'
        }
      ]
    },
    formulaSheet: {
      summary: "Simpson's 3/8 Formula and Guide Table:",
      formulas: [
        { name: "Simpson's 3/8 Rule", latex: '\\int_{a}^{b} f(x) dx \\approx \\frac{3h}{8} \\Big[ (y_0 + y_n) + 3(y_1 + y_2 + y_4 + y_5 + \\dots) + 2(y_3 + y_6 + y_9 + \\dots) \\Big]', note: 'CONDITION: n MUST BE MULTIPLE OF 3' },
        { name: 'Comparison Cheat Code', latex: '\\begin{array}{|c|c|c|} \\hline \\text{Rule} & \\text{Condition on } n & \\text{Polynomial Degree} \\\\ \\hline \\text{Trapezoidal} & \\text{Any } n & \\text{Degree 1 (Linear)} \\\\ \\text{Simpson 1/3} & n = 2k \\; (\\text{Even}) & \\text{Degree 2 (Parabola)} \\\\ \\text{Simpson 3/8} & n = 3k & \\text{Degree 3 (Cubic)} \\\\ \\hline \\end{array}', note: 'Master decision table' }
      ]
    },
    solvedExamples: [
      {
        title: 'Evaluate ∫(0 to 6) 1/(1+x) dx using Simpson\'s 3/8 Rule',
        problem: 'Evaluate ∫ 1/(1+x) dx from 0 to 6 with 6 intervals (h = 1).',
        latexProblem: 'I = \\int_{0}^{6} \\frac{1}{1+x} dx, \\quad n = 6, \\; h = 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Check condition on n.',
            whyThisStep: 'n = 6 is a multiple of 3 (6 = 3 * 2), so 3/8 rule is fully valid.',
            mathLatex: 'n = 6 \\implies \\text{Multiple of 3 (Valid)}'
          },
          {
            stepNumber: 2,
            explanation: 'Calculate table values y = 1/(1+x).',
            whyThisStep: 'y0=1, y1=1/2=0.5, y2=1/3=0.3333, y3=1/4=0.25, y4=1/5=0.2, y5=1/6=0.1667, y6=1/7=0.1429.',
            mathLatex: 'y_0=1, y_1=0.5, y_2=0.3333, y_3=0.25, y_4=0.2, y_5=0.1667, y_6=0.1429'
          },
          {
            stepNumber: 3,
            explanation: 'Apply Simpson 3/8 formula.',
            whyThisStep: '(3*1/8) * [ (y0+y6) + 3(y1+y2+y4+y5) + 2(y3) ].',
            mathLatex: 'I \\approx \\frac{3}{8}\\Big[ (1 + 0.1429) + 3(0.5 + 0.3333 + 0.2 + 0.1667) + 2(0.25) \\Big] = \\frac{3}{8}[ 1.1429 + 3(1.2) + 0.5 ] = \\frac{3}{8}[5.2429] = 1.966'
          }
        ],
        finalAnswer: 'I ≈ 1.966 (Exact ln(7) ≈ 1.9459).'
      }
    ],
    shortcuts: [
      {
        title: 'Multiples of 3 get Factor 2',
        rule: 'Simpson 3/8 me jo bhi subscript 3 ki table me aata hai (3, 6, 9...), use 2 se multiply karo. Baaki sabko 3 se multiply karo. Bahar (3h/8) factor rehta hai!',
        whenToUse: 'Quick formula writing.'
      }
    ],
    practiceQuestions: [
      {
        id: '4.5-p1',
        question: 'If n = 6, can you apply BOTH Simpson 1/3 and Simpson 3/8?',
        hint: 'Is 6 both an even number and a multiple of 3?',
        solution: 'Yes! 6 is even (valid for 1/3) and 6 is a multiple of 3 (valid for 3/8). Both can be applied.',
        solutionLatex: '\\text{Yes, both are valid for } n = 6'
      }
    ],
    commonMistakes: [
      'Bahar 3h/8 ki jagah galti se h/8 ya 3h/3 likh dena.',
      'y3 ko 3 se multiply kar dena (y3 multiple of 3 hai toh use 2 se multiply karna hota hai!).'
    ],
    examTip: 'Exam question me agar sirf "Evaluate using Simpson\'s rule" likha ho aur n = 6 ho, toh hamesha Simpson\'s 1/3 rule use karo kyunki uski calculation simpler hoti hai.'
  }
];
