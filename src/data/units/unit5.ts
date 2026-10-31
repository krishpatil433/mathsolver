import { SubTopic } from '../../types/math';

export const unit5SubTopics: SubTopic[] = [
  {
    id: '5.1',
    unitId: 5,
    title: 'Introduction, Basic Terms in LPP',
    subtitle: 'Objective Function, Constraints, Feasible Region & Non-Negativity',
    yeKyaHai: {
      definition: 'Linear Programming Problem (LPP) ek aisi mathematical optimization technique hai jisme hum limited resources ke andar rehkar PROFIT MAXIMIZE ya COST MINIMIZE karte hain.',
      analogy: 'Aapke paas 24 ghante ka time hai aur limited energy. Kuch ghante study ko dene hain, kuch sports ko, taaki exam me maximum marks (Objective) aayein bina bimaar pade (Constraints). Ye real-life LPP hai!'
    },
    groundLevel: {
      intro: 'LPP ke 5 basic building blocks jo har question me hote hain:',
      points: [
        {
          heading: '1. Decision Variables (x, y ya x1, x2)',
          content: 'Wo cheezein jinki quantity hume decide karni hai (jaise kitne Table aur kitne Chair banayein).'
        },
        {
          heading: '2. Objective Function (Z)',
          content: 'Wo main formula jise ya toh Maximize (Profit) ya Minimize (Cost) karna hai: Maximize Z = c1 x1 + c2 x2.'
        },
        {
          heading: '3. Constraints (Shartein / Limits)',
          content: 'Raw material, machine hours, labor availability ki inequalities: a1 x1 + a2 x2 <= b.'
        },
        {
          heading: '4. Non-Negativity Restriction',
          content: 'x1 >= 0, x2 >= 0. Real world me koi -5 tables nahi bana sakta! Isliye solutions hamesha First Quadrant me hi hote hain.'
        },
        {
          heading: '5. Feasible Region & Optimal Solution',
          content: 'Saari shartoon ko ek sath satisfy karne wala common shaded area = Feasible Region. Is region ke jis point par Z sabse best ho use Optimal Solution kehte hain.'
        }
      ]
    },
    formulaSheet: {
      summary: 'General LPP Mathematical Form:',
      formulas: [
        { name: 'Objective Function', latex: '\\text{Optimize (Max or Min) } Z = c_1 x_1 + c_2 x_2 + \\dots + c_n x_n', note: 'Linear combination of variables' },
        { name: 'Subject to Constraints', latex: '\\sum_{j=1}^n a_{ij} x_j \\le b_i \\quad \\text{or} \\quad \\ge b_i', note: 'Resource limitations' },
        { name: 'Non-Negativity Condition', latex: 'x_j \\ge 0 \\quad \\forall j', note: 'Restricts to positive quadrant' }
      ]
    },
    solvedExamples: [
      {
        title: 'Identifying LPP Components',
        problem: 'Identify Decision Variables, Objective Function, and Constraints for: A carpenter makes tables (x) and chairs (y). Profit on table is ₹50 and chair is ₹30. Wood available is 120 units (table needs 3, chair needs 2). Time available is 80 hours (table needs 2, chair needs 1).',
        latexProblem: '\\text{Identify components of word problem}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Decision variables define karo.',
            whyThisStep: 'x = number of tables, y = number of chairs.',
            mathLatex: 'x \\ge 0, \\; y \\ge 0'
          },
          {
            stepNumber: 2,
            explanation: 'Objective function formulate karo.',
            whyThisStep: 'Maximize total profit: 50 per table + 30 per chair.',
            mathLatex: '\\text{Maximize } Z = 50x + 30y'
          },
          {
            stepNumber: 3,
            explanation: 'Constraints formulate karo.',
            whyThisStep: 'Wood: 3x + 2y <= 120. Time: 2x + 1y <= 80.',
            mathLatex: '3x + 2y \\le 120, \\quad 2x + y \\le 80'
          }
        ],
        finalAnswer: 'Maximize Z = 50x + 30y subject to 3x + 2y <= 120, 2x + y <= 80, x >= 0, y >= 0.'
      }
    ],
    shortcuts: [
      {
        title: 'Inequality Direction Shortcut',
        rule: 'Keyword "At most / Available / Maximum limit" ho toh ALWAYS use "<=" (less than equal). Keyword "At least / Minimum requirement" ho toh ALWAYS use ">=" (greater than equal)!',
        whenToUse: 'Formulation of word problems.'
      }
    ],
    practiceQuestions: [
      {
        id: '5.1-p1',
        question: 'Why are decision variables always restricted to x >= 0, y >= 0?',
        hint: 'Can physical manufactured goods or materials be negative?',
        solution: 'Because physical quantities (units produced, time, goods) cannot be negative in the real world.',
        solutionLatex: 'x \\ge 0, \\; y \\ge 0 \\quad (\\text{Physical Non-negativity})'
      }
    ],
    commonMistakes: [
      'Non-negativity restrictions x >= 0, y >= 0 likhna bhool jana (1 mark cut ho jata hai!).'
    ],
    examTip: 'Hamesha definition me "Linear objective function and linear constraints" word emphasize karo.'
  },
  {
    id: '5.2',
    unitId: 5,
    title: 'Mathematical Formulation of LPP',
    subtitle: 'Word Problems se Mathematical Equations Banane ka Step-by-Step Rule',
    yeKyaHai: {
      definition: 'Kisi real-life business ya manufacturing problem ki descriptive kahani ko mathematical equations aur inequalities ke standard LPP format me convert karna.',
      analogy: 'Jaise Hindi ya English sentence ko coding language (Python ya C++) me translate karte hain, waise hi business text ko mathematics me translate karna Formulation kehlata hai.'
    },
    groundLevel: {
      intro: '3-Step fail-proof formulation technique:',
      points: [
        {
          heading: 'Step 1: Resource Table Banao',
          content: 'Rows me Resources (Machine, Labor, Material) likho. Columns me Products (x, y) aur Maximum Availability likho. Is table se equations seedhe saamne dikhne lagti hain!'
        },
        {
          heading: 'Step 2: Objective Decide Karo',
          content: 'Question me dhoondho: Profit, Revenue, Sales -> MAXIMIZE. Cost, Time, Pollution, Waste -> MINIMIZE.'
        },
        {
          heading: 'Step 3: Constraints & Non-negativity Likho',
          content: 'Har resource ki row se ek inequality banegi. Last me x >= 0, y >= 0 lagao.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Formulation Template:',
      formulas: [
        { name: 'Standard Formulation', latex: '\\begin{aligned} \\text{Optimize } & Z = c_1 x + c_2 y \\\\ \\text{subject to } & a_1 x + b_1 y \\le R_1 \\\\ & a_2 x + b_2 y \\le R_2 \\\\ & x \\ge 0, \\; y \\ge 0 \\end{aligned}', note: 'Complete structured presentation' }
      ]
    },
    solvedExamples: [
      {
        title: 'Diet Problem Formulation (Minimization)',
        problem: 'A patient needs at least 80 units of Vitamin A and 100 units of Vitamin B. Food F1 costs ₹4 per unit and contains 2 units of Vit A and 5 units of Vit B. Food F2 costs ₹3 per unit and contains 4 units of Vit A and 2 units of Vit B. Formulate as LPP.',
        latexProblem: '\\text{Formulate Diet Problem for minimum cost}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Let x = units of Food F1, y = units of Food F2.',
            whyThisStep: 'These are the decision variables.',
            mathLatex: 'x = \\text{units of } F_1, \\quad y = \\text{units of } F_2'
          },
          {
            stepNumber: 2,
            explanation: 'Formulate Objective function (Cost minimization).',
            whyThisStep: 'F1 costs ₹4 and F2 costs ₹3.',
            mathLatex: '\\text{Minimize } Z = 4x + 3y'
          },
          {
            stepNumber: 3,
            explanation: 'Formulate Vitamin constraints ("at least" means >=).',
            whyThisStep: 'Vit A: 2x + 4y >= 80. Vit B: 5x + 2y >= 100.',
            mathLatex: '2x + 4y \\ge 80, \\quad 5x + 2y \\ge 100, \\quad x \\ge 0, \\; y \\ge 0'
          }
        ],
        finalAnswer: 'Minimize Z = 4x + 3y subject to 2x + 4y >= 80, 5x + 2y >= 100, and x, y >= 0.'
      }
    ],
    shortcuts: [
      {
        title: 'The "Table-First" Method',
        rule: 'Kaccha table rough me bana lo: [Resource | Food 1 (x) | Food 2 (y) | Limit]. Saari inequalities bina soche horizontally read karke direct likh do!',
        whenToUse: 'Word problems in exam.'
      }
    ],
    practiceQuestions: [
      {
        id: '5.2-p1',
        question: 'If a company has a maximum of 50 machine hours, what constraint symbol will be used?',
        hint: 'Maximum means cannot exceed.',
        solution: 'Symbol is "<=" (less than or equal to 50).',
        solutionLatex: '\\le 50'
      }
    ],
    commonMistakes: [
      'Units mismatch: e.g., question me ek jagah hours diya ho aur dusri jagah minutes, convert kiye bina direct equation bana dena!'
    ],
    examTip: 'Hamesha sabse pehle "Let x be... and y be..." clear sentence me likho.'
  },
  {
    id: '5.3',
    unitId: 5,
    title: 'Graphical (Corner Point) Method',
    subtitle: 'Two Variables ke liye Step-by-Step Corner Point Checklist',
    yeKyaHai: {
      definition: 'Jab LPP mein sirf 2 variables (x aur y) hon, toh Cartesian plane (graph paper) par lines draw karke Feasible Region dhoondhna aur uske Corner Points par Z evaluate karke optimal answer nikalna.',
      analogy: 'Imagine karo ek fenced garden hai. Garden ka corner jahan fence aapas me milti hai (Corner points) — Fundamental Theorem of LPP kehti hai ki sabse meetha aam (Maximum Z) hamesha kisi na kisi KONE (Corner) par hi milega!'
    },
    groundLevel: {
      intro: 'Corner-Point Checklist (Step-by-Step Execution):',
      points: [
        {
          heading: 'Checklist Step 1: Equations Plot Karo (Intercept Form)',
          content: 'Inequalities ko equal to "=" banao (jaise x + y = 6). Intercepts nikalo: put y = 0 toh x-intercept (a, 0), put x = 0 toh y-intercept (0, b). Dono points ko join karke straight line draw karo.'
        },
        {
          heading: 'Checklist Step 2: Shading (Origin Test (0, 0))',
          content: 'Line ke inequality me (0, 0) put karo. Agar 0 <= Constant TRUE hai, toh ORIGIN KI TARAF shade karo. Agar FALSE hai, toh ORIGIN SE DOOR shade karo.'
        },
        {
          heading: 'Checklist Step 3: Feasible Region & Corner Points',
          content: 'Common shaded area ke sabhi vertices (Corner Points O, A, B, C) ke coordinates nikal lo (lines ko aapas me simultaneously solve karke).'
        },
        {
          heading: 'Checklist Step 4: Corner Point Value Table',
          content: 'Har corner point par Z = c1 x + c2 y calculate karo. Maximum Z = sabse badi value, Minimum Z = sabse chhoti value!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Corner Point Checklist & Formulas:',
      formulas: [
        { name: 'Intercept Form', latex: '\\frac{x}{a} + \\frac{y}{b} = 1 \\implies (a, 0) \\text{ and } (0, b)', note: 'Fastest way to plot lines' },
        { name: 'Origin Test', latex: '0 + 0 \\le C \\implies \\text{True } \\to \\text{Shade towards origin}', note: 'Determines half-plane direction' },
        { name: 'Corner Point Theorem', latex: 'Z_{\\max} = \\max\\{ Z(A), Z(B), Z(C), \\dots \\}', note: 'Optimal value ALWAYS lies at a vertex' }
      ]
    },
    equationBreakdown: {
      title: 'Corner Point Evaluation Formula Breakdown',
      formulaLatex: 'Z = c_1 x + c_2 y \\quad \\text{evaluated at Vertices } V_i(x_i, y_i)',
      kyunAisaHotaHai: 'Kyun aisa hota hai? Fundamental Theorem of Linear Programming kehta hai ki agar objective function Z linear hai aur feasible region convex polygon hai, toh level curves Z = k ek straight line hoti hain jo feasible region ko sabse aakhri baar kisi na kisi CORNER (Vertex) par hi touch karengi! Isliye polygon ke andar ke croro points check karne ki bajaye sirf 3-4 corner points check karna kaafi hota hai.',
      termExplanations: [
        { symbol: 'Z', symbolLatex: 'Z', meaning: 'Total profit ya cost jisko optimize karna hai' },
        { symbol: 'c1, c2', symbolLatex: 'c_1, c_2', meaning: 'Per-unit profit ya cost coefficients' },
        { symbol: 'x, y', symbolLatex: 'x, y', meaning: 'Decision variables (quantities of products)' },
        { symbol: 'Vi', symbolLatex: 'V_i(x_i, y_i)', meaning: 'Feasible region boundary lines ke intersection points (Corner points)' }
      ],
      numericExample: {
        values: 'Max Z = 12x + 16y subject to 10x + 20y <= 120, 8x + 8y <= 80 (Summer 2025 Q6(c))',
        calculationLatex: '\\text{At } E(8, 2): Z = 12(8) + 16(2) = 96 + 32 = 128',
        result: 'Z_{\\max} = 128 \\text{ at } (8, 2)'
      }
    },
    examTemplate: {
      questionType: 'Solve LPP by Graphical Method (Summer 2025 Q6(c) [6 Marks])',
      totalMarks: '6 Marks',
      examinerCatchphrase: 'Examiner awards: 2M for line equations & intercepts, 1M for feasible region sketch, 1M for intersection point E, and 2M for corner point value table.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Convert Inequalities to Equalities & Find Intercepts',
          whatToWrite: 'Replace <= by = and find x and y intercepts for each boundary line:',
          latexTemplate: 'L_1: a_1 x + b_1 y = c_1 \\implies (x_1, 0), \\, (0, y_1); \\quad L_2: a_2 x + b_2 y = c_2 \\implies (x_2, 0), \\, (0, y_2)',
          marksAllotted: '2 Marks'
        },
        {
          stepNumber: 2,
          stepHeading: 'Origin Test & Sketch Feasible Region',
          whatToWrite: 'Test (0, 0): If inequality holds true, shade towards origin. Label region in 1st quadrant:',
          latexTemplate: '0 + 0 \\le C \\; (\\text{True}) \\implies \\text{Shaded region is } OABC',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 3,
          stepHeading: 'Solve Intersection Point of Boundary Lines',
          whatToWrite: 'Solve L1 and L2 simultaneously to find coordinates of corner point E:',
          latexTemplate: 'L_1 \\text{ and } L_2 \\implies (x^*, y^*)',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 4,
          stepHeading: 'Corner Point Evaluation Table & Conclusion',
          whatToWrite: 'Construct table of Z values at each vertex and identify maximum:',
          latexTemplate: '\\begin{array}{|c|c|} \\hline \\text{Corner Point} & Z = c_1 x + c_2 y \\\\ \\hline O(0,0) & 0 \\\\ A & Z_A \\\\ E & Z_E \\; (\\text{Max}) \\\\ \\hline \\end{array}',
          marksAllotted: '2 Marks'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Complete Graphical Solution of LPP',
        problem: 'Maximize Z = 4x + 3y subject to x + y <= 50, 3x + y <= 90, x >= 0, y >= 0.',
        latexProblem: '\\text{Maximize } Z = 4x + 3y \\quad \\text{s.t. } x + y \\le 50, \\; 3x + y \\le 90',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Find intercepts of boundary lines.',
            whyThisStep: 'Line 1: x + y = 50 -> Points: (50, 0) and (0, 50). Line 2: 3x + y = 90 -> Points: (30, 0) and (0, 90).',
            mathLatex: 'L_1: (50, 0), (0, 50); \\quad L_2: (30, 0), (0, 90)'
          },
          {
            stepNumber: 2,
            explanation: 'Find intersection of Line 1 and Line 2.',
            whyThisStep: 'Subtract L1 from L2: (3x+y) - (x+y) = 90 - 50 => 2x = 40 => x = 20. Then y = 50 - 20 = 30.',
            mathLatex: 'x = 20, \\quad y = 30 \\implies B(20, 30)'
          },
          {
            stepNumber: 3,
            explanation: 'Identify corner points of feasible region.',
            whyThisStep: 'Feasible region is OABC: O(0, 0), A(30, 0), B(20, 30), C(0, 50).',
            mathLatex: 'O(0, 0), \\; A(30, 0), \\; B(20, 30), \\; C(0, 50)'
          },
          {
            stepNumber: 4,
            explanation: 'Evaluate Z = 4x + 3y at each corner point.',
            whyThisStep: 'At O: 0. At A(30,0): 4(30) + 3(0) = 120. At B(20,30): 4(20) + 3(30) = 80 + 90 = 170. At C(0,50): 4(0) + 3(50) = 150.',
            mathLatex: 'Z(O)=0, \\; Z(A)=120, \\; Z(B)=170, \\; Z(C)=150'
          }
        ],
        finalAnswer: 'Maximum Z = 170 occurs at x = 20, y = 30.'
      }
    ],
    shortcuts: [
      {
        title: 'Corner-Point Quick Checklist',
        rule: 'Checklist yaad rakho: (1) Lines ke 2-2 points nikalo (2) Test point (0,0) dalo (3) Bounded polygon ke corners nikalo (4) Z ki table banao. Maximum value pakki!',
        whenToUse: 'Graph drawing steps validation.'
      }
    ],
    practiceQuestions: [
      {
        id: '5.3-p1',
        question: 'What are the corner points of feasible region bounded by x + y <= 4, x >= 0, y >= 0?',
        hint: 'Triangle formed by axes and line x + y = 4.',
        solution: 'Corners are (0,0), (4,0), and (0,4).',
        solutionLatex: '(0,0), \\; (4,0), \\; (0,4)'
      }
    ],
    commonMistakes: [
      'Line 3x + y = 90 ka x-intercept 90/3 = 30 ki jagah 90 likh dena!',
      'Feasible region ko first quadrant ke bahar shade kar dena (x >= 0, y >= 0 hamesha first quadrant me limit karta hai).'
    ],
    examTip: 'Graph draw karte waqt scale (e.g., 1 cm = 10 units) aur shaded region ko pencil se neat cross-hatch karo.'
  },
  {
    id: '5.4',
    unitId: 5,
    title: 'Simplex Method',
    subtitle: 'Slack Variables, Tableau Template, Pivot Column, Pivot Row, Ratio Rule',
    yeKyaHai: {
      definition: 'Simplex Method ek algebraic iterative algorithm hai jo 3 ya usse zyada variables wale complex LPP ko step-by-step matrix table (Tableau) bana kar solve karta hai.',
      analogy: 'Imagine karo ek 3D pahad jisme kai kono (vertices) hain. Simplex method ek intelligent climber ki tarah hai: Wo origin se shuru karta hai, sabse tezi se unchai badhane wale raaste (Pivot Column) ko chunta hai, agli choti par chadh jata hai, aur tab tak chalta hai jab tak sabse highest peak na mil jaye!'
    },
    groundLevel: {
      intro: 'Simplex Tableau Step-by-Step Master Template:',
      points: [
        {
          heading: 'Step 1: Standard Form & Slack Variables',
          content: 'Agar constraints <= type hain, toh unhe equality "=" banane ke liye non-negative Slack Variables s1, s2, ... add karte hain. Inka cost objective function me 0 hota hai: Z = c1 x1 + c2 x2 + 0 s1 + 0 s2.'
        },
        {
          heading: 'Step 2: Initial Simplex Tableau Setup',
          content: 'Tableau Columns: [CB, Basis, XB, x1, x2, s1, s2, Min Ratio θ]. Initial basis me slack variables s1, s2 aate hain aur initial solution XB constraints ke RHS values hote hain.'
        },
        {
          heading: 'Step 3: Zj and Index Row (Cj - Zj or Zj - Cj)',
          content: 'Zj = Σ (CB * Column). Evaluate Cj - Zj (Net Evaluation). Agar saare Cj - Zj <= 0 ho jayein, toh STOP — CURRENT SOLUTION IS OPTIMAL!'
        },
        {
          heading: 'Step 4: Key Column (Entering Variable)',
          content: 'Sabse BADI POSITIVE value in Cj - Zj gives the Key Column (Pivot Column). Yeh variable solution me enter karega.'
        },
        {
          heading: 'Step 5: Key Row (Leaving Variable) via Minimum Ratio',
          content: 'Minimum Ratio θ = XB / (Key Column element) for strictly positive key elements (> 0). Sabse CHHOTI POSITIVE ratio gives Key Row (Pivot Row). Yeh variable bahar niklega.'
        },
        {
          heading: 'Step 6: Pivot Element & Gauss-Jordan Reduction',
          content: 'Key Column aur Key Row ka intersection element = PIVOT ELEMENT! New Tableau me Pivot element ko 1 banao (Row / Pivot), aur uske upar/niche ke baaki sabhi elements ko Elementary Row Operations se 0 banao.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Simplex Algorithm Formulas:',
      formulas: [
        { name: 'Standard Form with Slacks', latex: 'a_{11}x_1 + a_{12}x_2 + s_1 = b_1, \\quad a_{21}x_1 + a_{22}x_2 + s_2 = b_2', note: 's1, s2 >= 0 are slack variables' },
        { name: 'Net Evaluation', latex: 'Z_j = \\sum C_B \\cdot a_{ij}, \\quad \\Delta_j = C_j - Z_j', note: 'Max: enter most positive Delta j' },
        { name: 'Minimum Ratio Rule', latex: '\\theta = \\min\\left\\{ \\frac{X_B}{x_{ik}} : x_{ik} > 0 \\right\\}', note: 'Determines leaving variable (Key Row)' },
        { name: 'Row Transformation', latex: 'R_{\\text{new}} = R_{\\text{old}} - (\\text{element in key col}) \\times R_{\\text{pivot}}', note: 'Gauss-Jordan elimination' }
      ]
    },
    solvedExamples: [
      {
        title: 'Step-by-Step Simplex Method Solution',
        problem: 'Maximize Z = 3x1 + 2x2 subject to x1 + x2 <= 4, x1 - x2 <= 2, x1, x2 >= 0.',
        latexProblem: '\\text{Max } Z = 3x_1 + 2x_2 \\quad \\text{s.t. } x_1 + x_2 \\le 4, \\; x_1 - x_2 \\le 2',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Convert to standard form by introducing slack variables s1, s2 >= 0.',
            whyThisStep: 'To convert inequalities to linear equalities.',
            mathLatex: 'x_1 + x_2 + s_1 = 4, \\quad x_1 - x_2 + s_2 = 2, \\quad Z = 3x_1 + 2x_2 + 0s_1 + 0s_2'
          },
          {
            stepNumber: 2,
            explanation: 'Construct Initial Tableau. Basis = {s1, s2}, CB = {0, 0}, XB = [4, 2].',
            whyThisStep: 'Initial basic feasible solution: x1 = 0, x2 = 0, s1 = 4, s2 = 2. Z = 0.',
            mathLatex: 'C_j = [3, 2, 0, 0]; \\quad Z_j = [0, 0, 0, 0]; \\quad C_j - Z_j = [3, 2, 0, 0]'
          },
          {
            stepNumber: 3,
            explanation: 'Select Key Column and Key Row.',
            whyThisStep: 'Most positive Cj - Zj is 3 (Column x1). Key Column = x1. Minimum ratio θ = min{4/1, 2/1} = 2 (Row s2). Key Row = s2. Pivot Element = 1.',
            mathLatex: '\\text{Key Col } = x_1, \\quad \\text{Key Row } = s_2, \\quad \\text{Pivot } = 1'
          },
          {
            stepNumber: 4,
            explanation: 'Transform Tableau. s2 leaves, x1 enters with CB = 3.',
            whyThisStep: 'New Row 2 = Row 2 / 1 = [x1: 2, 1, -1, 0, 1]. New Row 1 = Old Row 1 - 1*(New Row 2) = [s1: 2, 0, 2, 1, -1].',
            mathLatex: '\\text{New } C_j - Z_j = [0, 5, 0, -3]'
          },
          {
            stepNumber: 5,
            explanation: 'Next iteration: Key column is x2 (value 5). Ratio: min{2/2, 2/(-1)} = 1 (Row s1). Pivot = 2.',
            whyThisStep: 'After next transformation all Cj - Zj <= 0. Optimal solution reached!',
            mathLatex: 'x_1 = 3, \\quad x_2 = 1 \\implies Z_{\\max} = 3(3) + 2(1) = 11'
          }
        ],
        finalAnswer: 'Optimal Solution: x1 = 3, x2 = 1 with Maximum Z = 11.'
      }
    ],
    shortcuts: [
      {
        title: 'Ratio Rule Trap Warning',
        rule: 'Ratio θ calculate karte waqt Key Column ke ZERO ya NEGATIVE number se kabhi divide mat karna (Ratio is only for strictly positive elements > 0). Negative ratio invalid hoti hai!',
        whenToUse: 'Finding Key Row.'
      }
    ],
    practiceQuestions: [
      {
        id: '5.4-p1',
        question: 'When is the Simplex Method iteration stopped?',
        hint: 'Look at the signs in the net evaluation row (Cj - Zj).',
        solution: 'For maximization, stop when ALL (Cj - Zj) <= 0 (all values are zero or negative).',
        solutionLatex: 'C_j - Z_j \\le 0 \\quad \\forall j'
      },
      {
        id: '5.4-p2',
        question: 'What is the cost coefficient of a Slack Variable in the objective function?',
        hint: 'Does adding idle unused resources add profit?',
        solution: 'Cost coefficient is 0 (Zero).',
        solutionLatex: 'C_{\\text{slack}} = 0'
      }
    ],
    commonMistakes: [
      'Row operations me purani row ke bajaye nayi transformed row se values subtract karne me mistake karna.',
      'Key Row dhoondhte waqt negative ratio ko minimum maan lena — negative ratio ignore ki jaati hai!'
    ],
    examTip: 'Simplex table banate waqt ruler se saaf columns banao aur Cj - Zj row ko double underline karo. Full 10/10 marks milte hain.'
  }
];
