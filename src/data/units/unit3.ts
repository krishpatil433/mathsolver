import { SubTopic } from '../../types/math';

export const unit3SubTopics: SubTopic[] = [
  {
    id: '3.1',
    unitId: 3,
    title: 'Scalars & Vectors, Representation, Magnitude, DRs & DCs',
    subtitle: 'Magnitude, Components, Direction Ratios (a,b,c) aur Direction Cosines (l,m,n)',
    yeKyaHai: {
      definition: 'Scalar sirf magnitude (value) hota hai jaise Mass (50 kg) ya Temperature (30°C). Vector magnitude ke sath-sath DIRECTION bhi rakhta hai jaise Velocity (50 km/h Eastward).',
      analogy: 'Agar koi kahe "Khazana 100 meter door hai" toh wo Scalar hai (dhoondh nahi paoge). Par agar kahe "Khazana 100 meter North-East me hai" toh wo Vector hai!'
    },
    groundLevel: {
      intro: '3D Space me vector ka ground level representation:',
      points: [
        {
          heading: 'Component Form',
          content: 'Vector r = x î + y ĵ + z k̂, jahan x, y, z uske components hain X, Y, Z axes ke along.'
        },
        {
          heading: 'Magnitude (Lambai)',
          content: '|r| = √(x² + y² + z²). 3D Pythagoras theorem hai bas!'
        },
        {
          heading: 'Direction Ratios (a, b, c) aur Direction Cosines (l, m, n)',
          content: 'DRs a, b, c vector ke seedhe components (x, y, z) hote hain. DCs l, m, n wo cosines hote hain jo vector X, Y, Z axes ke sath angles (α, β, γ) banata hai: l = cos α, m = cos β, n = cos γ.'
        },
        {
          heading: 'The Golden Identity of DCs',
          content: 'l² + m² + n² = 1 hamesha hota hai! Aur unit vector r̂ = l î + m ĵ + n k̂.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Vector Geometry Formulas:',
      formulas: [
        { name: 'Magnitude', latex: '|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}', note: 'Length of vector' },
        { name: 'Unit Vector', latex: '\\hat{r} = \\frac{\\vec{r}}{|\\vec{r}|} = \\frac{x\\hat{i} + y\\hat{j} + z\\hat{k}}{\\sqrt{x^2 + y^2 + z^2}}', note: 'Magnitude is exactly 1' },
        { name: 'Direction Cosines (DCs)', latex: 'l = \\frac{a}{\\sqrt{a^2 + b^2 + c^2}}, \\; m = \\frac{b}{\\sqrt{a^2 + b^2 + c^2}}, \\; n = \\frac{c}{\\sqrt{a^2 + b^2 + c^2}}', note: 'l = cos α, m = cos β, n = cos γ' },
        { name: 'Master Identity', latex: 'l^2 + m^2 + n^2 = 1 \\iff \\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1', note: 'Sum of squares of DCs is always 1' }
      ]
    },
    solvedExamples: [
      {
        title: 'Magnitude, Unit Vector and DCs',
        problem: 'For vector a = 2 î - 3 ĵ + 6 k̂, find magnitude, unit vector, DRs, and DCs.',
        latexProblem: '\\vec{a} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculate magnitude |a|.',
            whyThisStep: 'Pythagoras in 3D: √(2² + (-3)² + 6²).',
            mathLatex: '|\\vec{a}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7'
          },
          {
            stepNumber: 2,
            explanation: 'Find unit vector â = a / |a|.',
            whyThisStep: 'Divide each component by 7.',
            mathLatex: '\\hat{a} = \\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}'
          },
          {
            stepNumber: 3,
            explanation: 'Identify DRs and DCs.',
            whyThisStep: 'DRs are the original numbers (2, -3, 6). DCs are the coefficients of unit vector.',
            mathLatex: '\\text{DRs} = (2, -3, 6), \\quad \\text{DCs: } (l, m, n) = \\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right)'
          }
        ],
        finalAnswer: 'Magnitude = 7, Unit Vector = (2/7)î - (3/7)ĵ + (6/7)k̂, DCs = (2/7, -3/7, 6/7).'
      }
    ],
    shortcuts: [
      {
        title: 'Sin² Identity Shortcut',
        rule: 'Agar exam me sin² α + sin² β + sin² γ pucha ho: Since cos² + sin² = 1, toh sin² α + sin² β + sin² γ = 3 - (l² + m² + n²) = 3 - 1 = 2! Always equal to 2.',
        whenToUse: 'Direct 1-mark question in diploma/degree exams.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.1-p1',
        question: 'What is the value of cos² α + cos² β + cos² γ for any line in space?',
        hint: 'Use the master identity of DCs: l² + m² + n².',
        solution: 'Always equal to 1.',
        solutionLatex: 'l^2 + m^2 + n^2 = 1'
      },
      {
        id: '3.1-p2',
        question: 'Find the magnitude of vector 3 î + 4 ĵ.',
        hint: '√(3² + 4²).',
        solution: '√(9 + 16) = √25 = 5.',
        solutionLatex: '|\\vec{r}| = \\sqrt{9 + 16} = 5'
      }
    ],
    commonMistakes: [
      'DRs aur DCs ko confuse karna: DRs koi bhi proportional numbers ho sakte hain, par DCs ka sum of squares HAMESHA 1 hota hai.',
      'Minus sign ka square karte waqt galti se minus likh dena ((-3)² = +9, not -9).'
    ],
    examTip: 'Check your DCs: (l)² + (m)² + (n)² hamesha 1 aana chahiye, agar nahi aa raha toh calculation me mistake hai.'
  },
  {
    id: '3.2',
    unitId: 3,
    title: 'Types of Vectors',
    subtitle: 'Zero, Unit, Position, Equal, Negative, Parallel, Co-initial, Collinear',
    yeKyaHai: {
      definition: 'Vectors ke characteristics ke basis par unka classification (classification of vectors).',
      analogy: 'Jaise vehicles me car, bike, truck alag types hote hain par sab transport hain, waise hi vectors ke origin, magnitude aur direction ke basis par alag-alag types hote hain.'
    },
    groundLevel: {
      intro: 'Sabhi types ko quick points me samjho:',
      points: [
        {
          heading: 'Zero Vector (Null Vector 0)',
          content: 'Jiska magnitude bilkul 0 ho aur direction indeterminate (kuch bhi) ho sakti hai. Initial aur terminal point same hote hain.'
        },
        {
          heading: 'Unit Vector (r̂)',
          content: 'Jiska magnitude exactly 1 ho. Iska kaam sirf DIRECTION dikhana hota hai: r̂ = r / |r|.'
        },
        {
          heading: 'Position Vector (OP)',
          content: 'Origin O(0,0,0) se kisi point P(x, y, z) ko connect karne wala vector: OP = x î + y ĵ + z k̂.'
        },
        {
          heading: 'Collinear / Parallel Vectors',
          content: 'Jo same line ya parallel lines ke along act karte hain. Mathematical condition: a = λ b (components proportional hote hain: a1/b1 = a2/b2 = a3/b3)!'
        },
        {
          heading: 'Co-initial Vectors',
          content: 'Jinka starting point (initial point) ek hi common point ho.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Classification Formulas:',
      formulas: [
        { name: 'Unit Vector', latex: '|\\hat{a}| = 1, \\quad \\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}', note: 'Magnitude = 1' },
        { name: 'Collinear / Parallel Condition', latex: '\\vec{a} = \\lambda \\vec{b} \\iff \\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\frac{a_3}{b_3} = \\lambda', note: 'Proportional components' },
        { name: 'Displacement Vector AB', latex: '\\vec{AB} = \\vec{OB} - \\vec{OA} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}', note: 'Final position minus Initial position' }
      ]
    },
    solvedExamples: [
      {
        title: 'Check for Collinear Vectors',
        problem: 'Check if a = 2 î - 3 ĵ + 4 k̂ and b = -4 î + 6 ĵ - 8 k̂ are collinear.',
        latexProblem: '\\vec{a} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}, \\quad \\vec{b} = -4\\hat{i} + 6\\hat{j} - 8\\hat{k}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Check the ratio of corresponding components.',
            whyThisStep: 'Collinear vectors must have equal ratios: a1/b1 = a2/b2 = a3/b3.',
            mathLatex: '\\frac{a_1}{b_1} = \\frac{2}{-4} = -\\frac{1}{2}, \\quad \\frac{a_2}{b_2} = \\frac{-3}{6} = -\\frac{1}{2}, \\quad \\frac{a_3}{b_3} = \\frac{4}{-8} = -\\frac{1}{2}'
          },
          {
            stepNumber: 2,
            explanation: 'Conclude collinearity.',
            whyThisStep: 'Since all ratios are equal to -1/2, b = -2 a.',
            mathLatex: '\\vec{b} = -2\\vec{a} \\implies \\text{Collinear and antiparallel}'
          }
        ],
        finalAnswer: 'Vectors are collinear (parallel in opposite direction).'
      }
    ],
    shortcuts: [
      {
        title: 'Displacement Vector Trick',
        rule: 'Vector AB hamesha B - A hota hai (BA nahi!). Mnemonic: "Destination minus Source".',
        whenToUse: 'Points P1(x1, y1, z1) aur P2(x2, y2, z2) ke beech vector banate waqt.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.2-p1',
        question: 'Find the vector AB if A(1, 2, -1) and B(3, 1, 4).',
        hint: 'B - A: (3-1)î + (1-2)ĵ + (4 - (-1))k̂.',
        solution: 'AB = 2 î - ĵ + 5 k̂.',
        solutionLatex: '\\vec{AB} = 2\\hat{i} - \\hat{j} + 5\\hat{k}'
      }
    ],
    commonMistakes: [
      'Displacement vector me A - B kar dena instead of B - A.'
    ],
    examTip: 'Collinear prove karne ke liye cross product zero dikhane se accha hai ratio compare kar do, time bachta hai.'
  },
  {
    id: '3.3',
    unitId: 3,
    title: 'Algebra of Vectors',
    subtitle: 'Addition, Triangle Law, Parallelogram Law, Subtraction & Scalar Multiplications',
    yeKyaHai: {
      definition: 'Vectors ko aapas me jodna (Triangle Law / Parallelogram Law), ghatana, aur scalar se multiply karna.',
      analogy: 'Agar ek boat ko nadi ke paar seedhe bhejte ho par nadi ka bahaav use aage le jata hai, toh boat ka actual raasta dono vectors ka resultant (Triangle Law) ban jata hai!'
    },
    groundLevel: {
      intro: 'Geometric vs Analytical laws of addition:',
      points: [
        {
          heading: 'Triangle Law of Addition',
          content: 'Agar do vectors a aur b ko kisi triangle ki do adjacent sides se represent karein (head-to-tail order me), toh teesri side jo opposite order me band hoti hai, wahi unka sum R = a + b hoti hai.'
        },
        {
          heading: 'Parallelogram Law of Addition',
          content: 'Agar do vectors a aur b ek hi point se nikle hon (co-initial), toh unka resultant R us parallelogram ka diagonal hota hai jo un do sides se banta hai: |R| = √(a² + b² + 2ab cos θ).'
        },
        {
          heading: 'Angle of Resultant',
          content: 'tan α = (b sin θ) / (a + b cos θ), jahan α resultant ka vector a se angle hai.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Vector Algebra Formulas:',
      formulas: [
        { name: 'Component Addition', latex: '\\vec{a} + \\vec{b} = (a_1 + b_1)\\hat{i} + (a_2 + b_2)\\hat{j} + (a_3 + b_3)\\hat{k}', note: 'Add corresponding components' },
        { name: 'Parallelogram Law Magnitude', latex: '|\\vec{R}| = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}', note: 'θ is angle between vectors' },
        { name: 'Resultant Direction', latex: '\\tan\\alpha = \\frac{b\\sin\\theta}{a + b\\cos\\theta}', note: 'Angle made with vector a' }
      ]
    },
    solvedExamples: [
      {
        title: 'Resultant of Two Perpendicular Vectors',
        problem: 'Two vectors of magnitude 3 and 4 act at 90° to each other. Find the magnitude and direction of the resultant.',
        latexProblem: 'a = 3, \\; b = 4, \\; \\theta = 90^\\circ',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Apply parallelogram law magnitude formula with θ = 90° (cos 90° = 0).',
            whyThisStep: 'cos 90° is 0, so formula simplifies to Pythagoras: √(a² + b²).',
            mathLatex: '|\\vec{R}| = \\sqrt{3^2 + 4^2 + 2(3)(4)\\cos(90^\\circ)} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5'
          },
          {
            stepNumber: 2,
            explanation: 'Find direction angle α.',
            whyThisStep: 'tan α = (4 sin 90°) / (3 + 4 cos 90°) = 4/3.',
            mathLatex: '\\tan\\alpha = \\frac{4(1)}{3 + 4(0)} = \\frac{4}{3} \\implies \\alpha = \\tan^{-1}(4/3) \\approx 53.13^\\circ'
          }
        ],
        finalAnswer: 'Resultant magnitude = 5, angle α = tan⁻¹(4/3) with vector a.'
      }
    ],
    shortcuts: [
      {
        title: 'Special Angles Quick Table',
        rule: 'θ = 0° (Same direction) => R = a + b (Max). θ = 180° (Opposite) => R = |a - b| (Min). θ = 90° (Perpendicular) => R = √(a² + b²)!',
        whenToUse: 'Direct calculation without writing full cosine formula.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.3-p1',
        question: 'What is the angle between two equal vectors of magnitude P such that their resultant is also P?',
        hint: 'P² = P² + P² + 2P² cos θ => cos θ = -1/2.',
        solution: 'cos θ = -1/2 => θ = 120°.',
        solutionLatex: '\\theta = 120^\\circ'
      }
    ],
    commonMistakes: [
      'Resultant formula me 2ab cos θ ka sign bhool jana ya cos θ ko sin θ likhna.'
    ],
    examTip: 'Jab do vectors barabar hon (a = b), toh resultant unke beech ke angle ko exactly bisect (aadha) karta hai: α = θ/2.'
  },
  {
    id: '3.4',
    unitId: 3,
    title: 'Scalar (Dot) Product',
    subtitle: 'Projection, Angle Between Vectors, Perpendicularity Condition (a · b = 0)',
    yeKyaHai: {
      definition: 'Do vectors ka dot product ek SCALAR (simple number) hota hai: a · b = |a| |b| cos θ.',
      analogy: 'Physics me Work Done = Force · Displacement (W = F · d cos θ). Agar tum box ko aage dhakel rahe ho par displacement sideways ho raha hai, toh sirf wahi hissa kaam karta hai jo direction me ho!'
    },
    groundLevel: {
      intro: 'Dot product engineering maths ka sabse frequently used tool hai:',
      points: [
        {
          heading: 'Component Formula',
          content: 'Agar a = a1 î + a2 ĵ + a3 k̂ aur b = b1 î + b2 ĵ + b3 k̂, toh a · b = a1 b1 + a2 b2 + a3 b3. (i.i = 1, j.j = 1, k.k = 1, aur aapas me sabhi 0).'
        },
        {
          heading: 'Golden Perpendicularity Test',
          content: 'Do non-zero vectors a aur b PERPENDICULAR (orthogonal, θ = 90°) tab aur sirf tab hote hain jab a · b = 0!'
        },
        {
          heading: 'Projection of a on b',
          content: 'Projection of vector a on vector b = (a · b) / |b| = a · b̂. (Jiske upar projection nikalna ho, uske magnitude se divide karo).'
        }
      ]
    },
    formulaSheet: {
      summary: 'Dot Product Master Formulas:',
      formulas: [
        { name: 'Definition', latex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\theta', note: 'Scalar result' },
        { name: 'Cartesian Form', latex: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3', note: 'Direct multiplication of components' },
        { name: 'Cosine of Angle', latex: '\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|} = \\frac{a_1 b_1 + a_2 b_2 + a_3 b_3}{\\sqrt{a_1^2+a_2^2+a_3^2}\\sqrt{b_1^2+b_2^2+b_3^2}}', note: 'Angle between two lines/vectors' },
        { name: 'Projection of a on b', latex: '\\text{Proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}', note: 'Shadow length on b' }
      ]
    },
    equationBreakdown: {
      title: 'Scalar (Dot) Product Equation Breakdown',
      formulaLatex: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\\vec{a}| |\\vec{b}| \\cos\\theta',
      kyunAisaHotaHai: 'Kyun aisa hota hai? Coordinate axes mutually perpendicular hote hain: î · î = 1, ĵ · ĵ = 1, k̂ · k̂ = 1, jabki cross axes î · ĵ = 0, ĵ · k̂ = 0, k̂ · î = 0 hote hain. Isliye sirf matching components a1 b1, a2 b2, a3 b3 multiply hoke judte hain! Jab do vectors perpendicular (θ = 90°) hote hain, cos 90° = 0 hone ki wajah se dot product HAMESHA ZERO hota hai.',
      termExplanations: [
        { symbol: 'a1, a2, a3', symbolLatex: 'a_1, a_2, a_3', meaning: 'Vector a ke X, Y, Z components along unit vectors î, ĵ, k̂' },
        { symbol: 'b1, b2, b3', symbolLatex: 'b_1, b_2, b_3', meaning: 'Vector b ke X, Y, Z components along unit vectors î, ĵ, k̂' },
        { symbol: 'θ', symbolLatex: '\\theta', meaning: 'Dono vectors ke beech ka angle (0° to 180°)' },
        { symbol: '|a|, |b|', symbolLatex: '|\\vec{a}|, |\\vec{b}|', meaning: 'Vectors ke magnitudes (lengths)' }
      ],
      numericExample: {
        values: 'a = 2î - 3ĵ + k̂ and b = 3î - 4ĵ + 2Pk̂ are perpendicular (Summer 2026 Q1(e))',
        calculationLatex: '\\vec{a} \\cdot \\vec{b} = 2(3) + (-3)(-4) + 1(2P) = 6 + 12 + 2P = 18 + 2P = 0',
        result: '2P = -18 \\implies P = -9'
      }
    },
    examTemplate: {
      questionType: 'Show Vectors Perpendicular or Find Unknown P (Summer 2026 Q1(e) [2 Marks])',
      totalMarks: '2 Marks',
      examinerCatchphrase: 'Examiner checks if you stated the formal condition a · b = 0 before doing arithmetic.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'State Perpendicularity Condition',
          whatToWrite: 'Two vectors a and b are perpendicular if their scalar product is zero:',
          latexTemplate: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = 0',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Substitute Components and Solve',
          whatToWrite: 'Substitute values of components and solve linear equation for unknown:',
          latexTemplate: 'a_1 b_1 + a_2 b_2 + a_3 b_3 = 0 \\implies P = \\dots',
          marksAllotted: '1 Mark'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Angle Between Vectors and Projection',
        problem: 'Find the angle between a = î + 2 ĵ - k̂ and b = 2 î - ĵ + k̂, and find projection of a on b.',
        latexProblem: '\\vec{a} = \\hat{i} + 2\\hat{j} - \\hat{k}, \\quad \\vec{b} = 2\\hat{i} - \\hat{j} + \\hat{k}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Compute dot product a · b.',
            whyThisStep: 'Multiply matching components: 1(2) + 2(-1) + (-1)(1).',
            mathLatex: '\\vec{a} \\cdot \\vec{b} = 1(2) + 2(-1) + (-1)(1) = 2 - 2 - 1 = -1'
          },
          {
            stepNumber: 2,
            explanation: 'Compute magnitudes |a| and |b|.',
            whyThisStep: '|a| = √(1 + 4 + 1) = √6. |b| = √(4 + 1 + 1) = √6.',
            mathLatex: '|\\vec{a}| = \\sqrt{6}, \\quad |\\vec{b}| = \\sqrt{6}'
          },
          {
            stepNumber: 3,
            explanation: 'Find cos θ and projection.',
            whyThisStep: 'cos θ = -1 / (√6 * √6) = -1/6. Projection = (a · b)/|b| = -1/√6.',
            mathLatex: '\\cos\\theta = \\frac{-1}{6} \\implies \\theta = \\cos^{-1}(-1/6); \\quad \\text{Projection} = \\frac{-1}{\\sqrt{6}}'
          }
        ],
        finalAnswer: 'Angle θ = cos⁻¹(-1/6), Projection = -1/√6.'
      }
    ],
    shortcuts: [
      {
        title: 'Perpendicularity Check in 5 Seconds',
        rule: 'Agar question me diya hai ki vectors perpendicular hain, toh seedhe a1 b1 + a2 b2 + a3 b3 = 0 equate karke missing constant (jaise λ) nikal lo!',
        whenToUse: 'Unknown parameter questions.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.4-p1',
        question: 'Find λ such that a = 2 î + λ ĵ + k̂ and b = 4 î - 2 ĵ - 2 k̂ are perpendicular.',
        hint: 'Set a · b = 0.',
        solution: '2(4) + λ(-2) + 1(-2) = 0 => 8 - 2λ - 2 = 0 => 6 = 2λ => λ = 3.',
        solutionLatex: '\\lambda = 3'
      }
    ],
    commonMistakes: [
      'Projection of a on b nikalte waqt |a| se divide kar dena — rule: "Jispe gira, uska magnitude niche!" (on b => divide by |b|).'
    ],
    examTip: 'Dot product commutative hota hai: a · b = b · a.'
  },
  {
    id: '3.5',
    unitId: 3,
    title: 'Vector (Cross) Product',
    subtitle: 'Cross Product Determinant Trick, Area of Triangle & Parallelogram',
    yeKyaHai: {
      definition: 'Do vectors ka cross product ek naya VECTOR deta hai jo dono original vectors ke plane ke perpendicular (normal) hota hai: a × b = |a| |b| sin θ n̂.',
      analogy: 'Screw ya darwaze ka handle ghumana (Torque = r × F). Jab tum wrench ko ghumaate ho (in-plane), toh screw upar ya niche chalta hai (perpendicular axis)!'
    },
    groundLevel: {
      intro: 'Cross product calculation aur geometric applications:',
      points: [
        {
          heading: 'Determinant Method (The Master Way)',
          content: 'a × b nikalne ke liye 3x3 determinant use karo: First row [î, ĵ, k̂], Second row [a1, a2, a3], Third row [b1, b2, b3].'
        },
        {
          heading: 'Area of Parallelogram & Triangle',
          content: 'Area of Parallelogram = |a × b|. Area of Triangle = (1/2) * |a × b|. Agar diagonals d1 aur d2 diye hon, toh Area = (1/2) * |d1 × d2|.'
        },
        {
          heading: 'Parallel Vectors Condition',
          content: 'Do vectors parallel (collinear) tab hote hain jab a × b = 0 (zero vector) ho!'
        },
        {
          heading: 'Anti-Commutative Property',
          content: 'Order badalne par sign ulta ho jata hai: a × b = -(b × a)!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Cross Product Formula Kit:',
      formulas: [
        { name: 'Determinant Formula', latex: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}', note: 'Gives vector perpendicular to both' },
        { name: 'Unit Normal Vector', latex: '\\hat{n} = \\frac{\\vec{a} \\times \\vec{b}}{|\\vec{a} \\times \\vec{b}|}', note: 'Unit vector perpendicular to plane of a and b' },
        { name: 'Moment of Force', latex: '\\vec{M} = \\vec{r} \\times \\vec{F} = (\\vec{r}_{\\text{action}} - \\vec{r}_{\\text{about}}) \\times \\vec{F}', note: 'Moment about a point' },
        { name: 'Area of Parallelogram', latex: '\\text{Area} = |\\vec{a} \\times \\vec{b}|', note: 'With adjacent sides a and b' },
        { name: 'Area of Triangle', latex: '\\text{Area} = \\frac{1}{2} |\\vec{a} \\times \\vec{b}|', note: 'Half of parallelogram area' }
      ]
    },
    equationBreakdown: {
      title: 'Moment of a Force Formula Breakdown',
      formulaLatex: '\\vec{M} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}',
      kyunAisaHotaHai: 'Kyun aisa hota hai? Physics me moment (torque) rotatational effect hota hai. Force vector F pivot point se kitna door (lever arm r) lag raha hai, aur kitne angle par act kar raha hai, us rotational tendency ko 3D me calculate karne ke liye vector cross product r × F use kiya jata hai. Moment vector perpendicular direction me ghoomne ka axis batata hai.',
      termExplanations: [
        { symbol: 'M', symbolLatex: '\\vec{M}', meaning: 'Moment of force (Torque vector)' },
        { symbol: 'r', symbolLatex: '\\vec{r} = \\vec{r}_{\\text{act}} - \\vec{r}_{\\text{about}}', meaning: 'Position vector from pivot point to the point of force action' },
        { symbol: 'F', symbolLatex: '\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}', meaning: 'Applied force vector' }
      ],
      numericExample: {
        values: 'Force F = 2î + ĵ - k̂ at (3, -1, -2) about point (4, -1, 1) (Summer 2025 Q4(c) & Winter 2025 Q2(d))',
        calculationLatex: '\\vec{r} = (3-4)\\hat{i} + (-1-(-1))\\hat{j} + (-2-1)\\hat{k} = -\\hat{i} - 3\\hat{k} \\implies \\vec{M} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & 0 & -3 \\\\ 2 & 1 & -1 \\end{vmatrix}',
        result: '\\vec{M} = 3\\hat{i} - 7\\hat{j} - \\hat{k}, \\quad |\\vec{M}| = \\sqrt{59} \\text{ units}'
      }
    },
    examTemplate: {
      questionType: 'Moment of Force About a Point (Summer 2025 Q4(c), Winter 2025 Q2(d) [4 Marks])',
      totalMarks: '4 Marks',
      examinerCatchphrase: 'Examiner checks: 1M for correct position vector r, 1M for determinant setup, 1M for determinant expansion, and 1M for magnitude |M|.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Calculate Position Vector r',
          whatToWrite: 'Position vector r is (Point of application of force) - (Point about which moment is required):',
          latexTemplate: '\\vec{r} = \\vec{r}_{\\text{action}} - \\vec{r}_{\\text{about}} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Set up Moment Vector Cross Product',
          whatToWrite: 'Moment of force M = r × F. Express as 3x3 determinant:',
          latexTemplate: '\\vec{M} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 3,
          stepHeading: 'Expand the Determinant',
          whatToWrite: 'Carefully expand along Row 1 with signs (+î, -ĵ, +k̂):',
          latexTemplate: '\\vec{M} = \\hat{i}(r_y F_z - r_z F_y) - \\hat{j}(r_x F_z - r_z F_x) + \\hat{k}(r_x F_y - r_y F_x)',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 4,
          stepHeading: 'Magnitude of Moment',
          whatToWrite: 'Calculate |M| = √(M_x² + M_y² + M_z²):',
          latexTemplate: '|\\vec{M}| = \\sqrt{M_x^2 + M_y^2 + M_z^2} \\text{ units}',
          marksAllotted: '1 Mark'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Cross Product and Unit Normal Vector',
        problem: 'Find a × b and a unit vector perpendicular to both a = 2 î - ĵ + k̂ and b = 3 î + 4 ĵ - k̂.',
        latexProblem: '\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}, \\quad \\vec{b} = 3\\hat{i} + 4\\hat{j} - \\hat{k}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Set up the 3x3 determinant.',
            whyThisStep: 'Standard calculation method.',
            mathLatex: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -1 & 1 \\\\ 3 & 4 & -1 \\end{vmatrix}'
          },
          {
            stepNumber: 2,
            explanation: 'Expand determinant along row 1.',
            whyThisStep: 'î((-1)(-1) - (1)(4)) - ĵ((2)(-1) - (1)(3)) + k̂((2)(4) - (-1)(3)).',
            mathLatex: '\\hat{i}(1 - 4) - \\hat{j}(-2 - 3) + \\hat{k}(8 - (-3)) = -3\\hat{i} + 5\\hat{j} + 11\\hat{k}'
          },
          {
            stepNumber: 3,
            explanation: 'Find magnitude and unit normal n̂.',
            whyThisStep: '|a × b| = √((-3)² + 5² + 11²) = √(9 + 25 + 121) = √155.',
            mathLatex: '\\hat{n} = \\frac{-3\\hat{i} + 5\\hat{j} + 11\\hat{k}}{\\sqrt{155}}'
          }
        ],
        finalAnswer: 'a × b = -3 î + 5 ĵ + 11 k̂, Unit Normal n̂ = (-3 î + 5 ĵ + 11 k̂) / √155.'
      }
    ],
    shortcuts: [
      {
        title: 'Right-Hand Rule Mnemonic for Unit Vectors',
        rule: 'Circle banao: î -> ĵ -> k̂ -> î. Clockwise jaoge toh positive (î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ). Ulta jaoge toh negative (ĵ × î = -k̂)!',
        whenToUse: 'Direct multiplication of coordinate axes.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.5-p1',
        question: 'What is the value of î × î?',
        hint: 'Angle between identical vectors is 0, sin 0° = 0.',
        solution: 'î × î = 0 (Null vector). Any vector crossed with itself is 0.',
        solutionLatex: '\\hat{i} \\times \\hat{i} = \\vec{0}'
      },
      {
        id: '3.5-p2',
        question: 'Find the area of a triangle having adjacent sides a = 2 î and b = 3 ĵ.',
        hint: 'Area = (1/2) |a × b|.',
        solution: 'a × b = 6 (î × ĵ) = 6 k̂. Magnitude = 6. Area = 6/2 = 3 sq units.',
        solutionLatex: '\\text{Area} = \\frac{1}{2} \\times 6 = 3'
      }
    ],
    commonMistakes: [
      'Determinant expand karte waqt ĵ ke aage MINUS lagana bhool jaana (î(...) - ĵ(...) + k̂(...))!',
      'a × b = b × a likh dena — a × b = - (b × a) hota hai.'
    ],
    examTip: 'Unit vector perpendicular to two vectors poochhe toh hamesha ± (a × b) / |a × b| likho (dono upar aur niche perpendicular hote hain).'
  },
  {
    id: '3.6',
    unitId: 3,
    title: 'Scalar Triple Product (Box Product)',
    subtitle: '[a b c] Volume of Parallelepiped aur Coplanar Vectors Test',
    yeKyaHai: {
      definition: 'Teen vectors a, b, c ka combination: a · (b × c). Isko [a b c] se represent karte hain aur iska answer ek simple SCALAR number hota hai.',
      analogy: 'Imagine karo ek 3D cardboard box (parallelepiped). Base area b × c hota hai, aur height a cos θ hoti hai. Area × Height = Box ka total Volume! Wahi hai Scalar Triple Product.'
    },
    groundLevel: {
      intro: 'Scalar triple product ka practical power:',
      points: [
        {
          heading: 'Single Determinant Calculation',
          content: '[a b c] nikalne ke liye alag se cross aur dot karne ki zarurat nahi! Seedhe ek 3x3 determinant banao jisme teen rows vectors a, b, c ke components hon.'
        },
        {
          heading: 'Volume of Parallelepiped',
          content: 'Volume V = | [a b c] |. (Agar answer negative aaye toh absolute positive value lo).'
        },
        {
          heading: 'Condition for Coplanar Vectors',
          content: 'Agar teen vectors ek hi plane me hon (Coplanar), toh box ki height 0 ho jayegi, yani Volume = 0! So [a b c] = 0 is the exact condition for coplanarity.'
        },
        {
          heading: 'Cyclic Permutation',
          content: '[a b c] = [b c a] = [c a b]. Cyclic order change na ho toh value same rehti hai. Do vectors repeat ho jayein jaise [a a b], toh value hamesha ZERO hoti hai!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Box Product Formula:',
      formulas: [
        { name: 'Box Product Definition', latex: '[\\vec{a} \\; \\vec{b} \\; \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}', note: 'Evaluated as single 3x3 determinant' },
        { name: 'Coplanar Vectors Test', latex: '[\\vec{a} \\; \\vec{b} \\; \\vec{c}] = 0 \\iff \\text{Vectors are coplanar}', note: 'Most asked exam problem' },
        { name: 'Volume of Tetrahedron', latex: 'V_{\\text{tetrahedron}} = \\frac{1}{6} |[\\vec{a} \\; \\vec{b} \\; \\vec{c}]|', note: '1/6th of parallelepiped volume' }
      ]
    },
    solvedExamples: [
      {
        title: 'Check Coplanarity and Find Unknown',
        problem: 'Show that vectors a = î - 2 ĵ + 3 k̂, b = -2 î + 3 ĵ - 4 k̂, and c = î - 3 ĵ + 5 k̂ are coplanar.',
        latexProblem: '\\vec{a} = \\hat{i} - 2\\hat{j} + 3\\hat{k}, \\quad \\vec{b} = -2\\hat{i} + 3\\hat{j} - 4\\hat{k}, \\quad \\vec{c} = \\hat{i} - 3\\hat{j} + 5\\hat{k}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Form the 3x3 determinant [a b c].',
            whyThisStep: 'Coplanar vectors must have [a b c] = 0.',
            mathLatex: '[\\vec{a} \\; \\vec{b} \\; \\vec{c}] = \\begin{vmatrix} 1 & -2 & 3 \\\\ -2 & 3 & -4 \\\\ 1 & -3 & 5 \\end{vmatrix}'
          },
          {
            stepNumber: 2,
            explanation: 'Expand determinant.',
            whyThisStep: '1(15 - 12) - (-2)(-10 - (-4)) + 3(6 - 3).',
            mathLatex: '= 1(3) + 2(-6) + 3(3) = 3 - 12 + 9 = 0'
          }
        ],
        finalAnswer: 'Since [a b c] = 0, the given vectors are coplanar!'
      }
    ],
    shortcuts: [
      {
        title: 'Repeated Vector = Zero',
        rule: 'Agar box product me koi bhi do vector same ho jayein (jaise [a b a] ya [b b c]), toh bina calculate kiye answer ZERO likh do (kyunki determinant ki do rows identical ho jaati hain).',
        whenToUse: 'Vector simplification identity proofs.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.6-p1',
        question: 'Find the volume of parallelepiped whose coterminous edges are î, ĵ, k̂.',
        hint: 'Determinant of 3x3 identity matrix.',
        solution: '[î ĵ k̂] = 1. Volume = 1 cubic unit.',
        solutionLatex: 'V = 1'
      }
    ],
    commonMistakes: [
      'Cyclic order tod dena: [a b c] = -[b a c] hota hai, sign flip ho jata hai jab order anti-cyclic ho.'
    ],
    examTip: 'Coplanar question har saal 4 marks me aata hai. Bas determinant = 0 solve karke dikhana hota hai.'
  },
  {
    id: '3.7',
    unitId: 3,
    title: 'Tensor: Definition, Types, Rank, Algebra',
    subtitle: 'Ground Level Se Tensors, Contravariant, Covariant, Mixed, Operations',
    yeKyaHai: {
      definition: 'Tensor ek generalized mathematical entity hai jo coordinate system change hone par bhi physical reality ko preserve rakhti hai. Scalar Rank-0 tensor hai, Vector Rank-1 tensor hai, aur Matrix Rank-2 tensor hai!',
      analogy: 'Imagine karo Stress in a beam. Ek single number (scalar) ya single arrow (vector) se beam ke andar ka stress describe nahi ho sakta, kyunki alag-alag faces par alag-alag directions me force lagti hai (9 components chahiye). Wahi 3x3 Stress Tensor hai — Rank 2 Tensor!'
    },
    groundLevel: {
      intro: 'Engineering students aksar Tensor se darte hain. Yahan bilkul zero se samjho:',
      points: [
        {
          heading: 'Rank of Tensor kya hota hai?',
          content: 'Rank ka matlab kitne indices (subscripts ya superscripts) lage hain. Rank 0: T (No index, scalar, 3^0 = 1 component). Rank 1: T^i or T_i (1 index, vector, 3^1 = 3 components). Rank 2: T^{ij}, T_{ij}, T^i_j (2 indices, matrix, 3^2 = 9 components in 3D).'
        },
        {
          heading: 'Types of Tensors (Index Position)',
          content: '1. Contravariant Tensor: Superscript (upar index): A^i, A^{ij}. Coordinates jaise transform hota hai.\n2. Covariant Tensor: Subscript (niche index): A_i, A_{ij}. Gradient jaise transform hota hai.\n3. Mixed Tensor: Dono indices: A^i_j (Rank 2, 1 contravariant aur 1 covariant).'
        },
        {
          heading: 'Einstein Summation Convention',
          content: 'Agar kisi term me ek index upar aur wahi index niche repeat ho raha ho (jaise A^i B_i), toh summation sign (Σ) lagane ki zarurat nahi hoti, summation automatically implied hota hai: A^i B_i = A¹B₁ + A²B₂ + A³B₃ (Dot product)!'
        },
        {
          heading: 'Algebra of Tensors',
          content: '1. Addition: Same rank aur same type ke tensors judte hain: C^{ij} = A^{ij} + B^{ij}.\n2. Outer Product: Ranks add hoti hain: A^i * B_j = C^i_j (Rank 1 + Rank 1 = Rank 2).\n3. Contraction: Ek upper aur ek lower index ko barabar rakhne par rank 2 se kam ho jati hai (T^i_i -> scalar trace).\n4. Inner Product: Outer product ke baad contraction lagana (jaise A^i B_i).'
        }
      ]
    },
    formulaSheet: {
      summary: 'Tensor Equations & Transformation Laws:',
      formulas: [
        { name: 'Rank Components Formula', latex: 'N = D^R \\quad (D = \\text{Dimensions}, R = \\text{Rank})', note: 'In 3D: Rank 2 has 3^2 = 9 components' },
        { name: 'Contravariant Transformation', latex: '\\bar{A}^i = A^j \\frac{\\partial \\bar{x}^i}{\\partial x^j}', note: 'Upper index transformation' },
        { name: 'Covariant Transformation', latex: '\\bar{A}_i = A_j \\frac{\\partial x^j}{\\partial \\bar{x}^i}', note: 'Lower index transformation' },
        { name: 'Kronecker Delta (Mixed Rank 2)', latex: '\\delta^i_j = \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\neq j \\end{cases}', note: 'Identity tensor, contraction property: \\delta^i_j A^j = A^i' }
      ]
    },
    solvedExamples: [
      {
        title: 'Number of Components and Contraction',
        problem: 'In 4-dimensional space-time, how many components does a rank 3 tensor have? Also explain contraction of T^i_j.',
        latexProblem: 'D = 4, \\quad R = 3',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Apply components formula N = D^R.',
            whyThisStep: 'In 4 dimensions with 3 indices: 4^3.',
            mathLatex: 'N = 4^3 = 64 \\text{ components}'
          },
          {
            stepNumber: 2,
            explanation: 'Explain contraction of T^i_j.',
            whyThisStep: 'Set j = i to sum over index i.',
            mathLatex: 'T^i_i = T^1_1 + T^2_2 + T^3_3 + T^4_4'
          },
          {
            stepNumber: 3,
            explanation: 'Rank reduction observation.',
            whyThisStep: 'Original rank was 2 (one up, one down). After contraction, no free indices remain, so Rank = 0 (Scalar).',
            mathLatex: '\\text{Original Rank} = 2 \\xrightarrow{\\text{Contraction}} \\text{Rank} = 0 \\; (\\text{Scalar})'
          }
        ],
        finalAnswer: 'Total components = 64. Contraction reduces Rank 2 mixed tensor to a Rank 0 scalar (Trace).'
      }
    ],
    shortcuts: [
      {
        title: 'The Index Balance Shortcut',
        rule: 'Tensor equation me jo indices LEFT side me free hain, wahi EXACT same indices RIGHT side me bhi free hone chahiye! Agar left me upar i hai toh right me bhi upar i hona chahiye. Isse transformation law kabhi galat nahi hoga.',
        whenToUse: 'Writing transformation equations in exams.'
      }
    ],
    practiceQuestions: [
      {
        id: '3.7-p1',
        question: 'What is the rank of Kronecker delta δ^i_j?',
        hint: 'Count total indices (one superscript, one subscript).',
        solution: 'Total indices = 2 (one upper, one lower). It is a mixed tensor of Rank 2.',
        solutionLatex: '\\text{Rank} = 2'
      },
      {
        id: '3.7-p2',
        question: 'What is the value of δ^i_i in 3-dimensional space?',
        hint: 'Sum δ^1_1 + δ^2_2 + δ^3_3 = 1 + 1 + 1.',
        solution: 'In 3D: δ^i_i = 1 + 1 + 1 = 3. (In n dimensions, δ^i_i = n).',
        solutionLatex: '\\delta^i_i = 3'
      }
    ],
    commonMistakes: [
      'Contravariant ko power samajhna — A² tensor me dusra component hai, A ka square nahi!',
      'Contraction me do upper indices ko contract karne ki koshish karna — Contraction ALWAYS ek upper aur ek lower index ke beech hota hai!'
    ],
    examTip: 'Exam definition: "A tensor of rank r is a mathematical quantity whose components transform according to specific tensor transformation laws under coordinate change."'
  }
];
