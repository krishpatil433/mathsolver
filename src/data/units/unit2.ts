import { SubTopic } from '../../types/math';

export const unit2SubTopics: SubTopic[] = [
  {
    id: '2.1',
    unitId: 2,
    title: 'Review of Types of Matrices and Algebra',
    subtitle: 'Row, Column, Diagonal, Symmetric, Skew-Symmetric aur Operations',
    yeKyaHai: {
      definition: 'Matrix numbers ka rectangular arrangement hota hai rows (horizontal) aur columns (vertical) mein. Dimensions m x n hoti hain.',
      analogy: 'Excel spreadsheet jisme rows students ke roll number hain aur columns unke Physics, Maths, Chemistry ke marks hain. Pure batch ka record ek matrix hai!'
    },
    groundLevel: {
      intro: 'Engineering maths me Matrices 25% marks carry karta hai. Ground level basics clear karo:',
      points: [
        {
          heading: 'Order of a Matrix',
          content: 'Rows x Columns (m × n). Always Row pehle, Column baad mein (RC Cola trick yaad rakho).'
        },
        {
          heading: 'Key Types',
          content: 'Diagonal (non-diagonals 0), Identity matrix I (diagonal 1 baaki 0), Symmetric (A^T = A), Skew-Symmetric (A^T = -A, jiske diagonal elements HAMESHA ZERO hote hain).'
        },
        {
          heading: 'Matrix Multiplication Rule',
          content: 'Do matrices A(m × n) aur B(p × q) sirf tab multiply ho sakti hain jab A ke columns = B ki rows ho (n = p). Result matrix ka order (m × q) hota hai.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Essential Matrix Operations:',
      formulas: [
        { name: 'Symmetric Matrix', latex: 'A^T = A \\iff a_{ij} = a_{ji}', note: 'Mirror image across main diagonal' },
        { name: 'Skew-Symmetric Matrix', latex: 'A^T = -A \\implies a_{ii} = 0, \\; a_{ij} = -a_{ji}', note: 'Main diagonal elements always 0' },
        { name: 'Trace of Matrix', latex: '\\text{Tr}(A) = \\sum a_{ii} = a_{11} + a_{22} + \\dots + a_{nn}', note: 'Sum of principal diagonal elements' },
        { name: 'Determinant of 2x2', latex: '\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc', note: 'Cross multiply and subtract' }
      ]
    },
    solvedExamples: [
      {
        title: 'Matrix Multiplication Check',
        problem: 'Multiply A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 2]]',
        latexProblem: 'A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Row-by-column dot product lo.',
            whyThisStep: 'C11 = Row 1 * Col 1 = 1*2 + 2*1 = 4. C12 = Row 1 * Col 2 = 1*0 + 2*2 = 4.',
            mathLatex: 'c_{11} = 1(2) + 2(1) = 4, \\quad c_{12} = 1(0) + 2(2) = 4'
          },
          {
            stepNumber: 2,
            explanation: 'Row 2 ko Col 1 aur Col 2 se multiply karo.',
            whyThisStep: 'C21 = 3*2 + 4*1 = 10. C22 = 3*0 + 4*2 = 8.',
            mathLatex: 'c_{21} = 3(2) + 4(1) = 10, \\quad c_{22} = 3(0) + 4(2) = 8'
          }
        ],
        finalAnswer: 'AB = [[4, 4], [10, 8]]'
      }
    ],
    shortcuts: [
      {
        title: 'Trace Quick Formula',
        rule: 'Trace nikalte waqt baaki sab bhool jao, sirf left-top se right-bottom ki diagonal ko add kar do.',
        whenToUse: 'Eigenvalues verify karne ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.1-p1',
        question: 'If A is a skew-symmetric matrix, what are its diagonal elements?',
        hint: 'A^T = -A means a_ii = -a_ii.',
        solution: '2 a_ii = 0 => a_ii = 0. All diagonal elements are zero.',
        solutionLatex: 'a_{ii} = 0 \\quad \\forall i'
      },
      {
        id: '2.1-p2',
        question: 'Find Trace(A) for A = [[5, 2, -1], [4, -3, 8], [9, 1, 6]].',
        hint: 'Add diagonal: 5 + (-3) + 6.',
        solution: 'Trace = 5 - 3 + 6 = 8.',
        solutionLatex: '\\text{Tr}(A) = 5 + (-3) + 6 = 8'
      }
    ],
    commonMistakes: [
      'AB = BA samajhna — Matrix multiplication commutative NAHI hota (AB != BA in general)!',
      'Non-conformable matrices ko multiply karne lagna.'
    ],
    examTip: 'Transpose property yaad rakho: (AB)^T = B^T * A^T (Reversal law).'
  },
  {
    id: '2.2',
    unitId: 2,
    title: 'Elementary Row and Column Transformation',
    subtitle: 'Ri ↔ Rj, Ri → kRi, aur Ri → Ri + kRj Operations',
    yeKyaHai: {
      definition: 'Matrix par kiye jaane wale 3 basic operations jo matrix ka order aur rank badle bina use simplify kar dete hain.',
      analogy: 'Jaise linear equations ko aapas me jodna, 2 se multiply karna, ya upar-niche swap karna equation ke solution ko nahi badalta, waise hi elementary transformation matrix ki aatma (rank) ko preserve rakhta hai.'
    },
    groundLevel: {
      intro: 'Teen types ke valid elementary transformations hote hain:',
      points: [
        {
          heading: 'Type 1: Row Interchanging (Ri ↔ Rj)',
          content: 'Kisi bhi do rows ko aapas me interchange kar sakte ho (e.g., R1 ↔ R2 taaki upar 1 aa jaye).'
        },
        {
          heading: 'Type 2: Scalar Multiplication (Ri → kRi)',
          content: 'Kisi row ko kisi non-zero number k se multiply ya divide kar sakte ho (k != 0).'
        },
        {
          heading: 'Type 3: Row Addition/Subtraction (Ri → Ri + kRj)',
          content: 'Kisi row me dusri row ka multiple jod ya ghata sakte ho. Sabse zyada zeros banane me yahi kaam aata hai!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Elementary Operation Notations:',
      formulas: [
        { name: 'Swap Rows', latex: 'R_i \\longleftrightarrow R_j', note: 'Interchange row i and row j' },
        { name: 'Scale Row', latex: 'R_i \\longrightarrow k R_i \\quad (k \\neq 0)', note: 'Multiply row by scalar' },
        { name: 'Linear Combination', latex: 'R_i \\longrightarrow R_i + k R_j', note: 'Most frequently used to create zero' }
      ]
    },
    solvedExamples: [
      {
        title: 'Creating Leading Zero Using R2 → R2 - kR1',
        problem: 'Given A = [[1, 2], [3, 8]], make element a21 equal to 0.',
        latexProblem: 'A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 8 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Target element a21 = 3 ko zero banana hai. Row 1 ka pehla element 1 hai.',
            whyThisStep: 'R2 -> R2 - 3*R1 operation lagao.',
            mathLatex: 'R_2 \\longrightarrow R_2 - 3R_1'
          },
          {
            stepNumber: 2,
            explanation: 'Calculation: [3 - 3(1), 8 - 3(2)] = [0, 2].',
            whyThisStep: 'Row 1 same rahegi, Row 2 update hogi.',
            mathLatex: 'A \\sim \\begin{bmatrix} 1 & 2 \\\\ 0 & 2 \\end{bmatrix}'
          }
        ],
        finalAnswer: 'Transformed matrix = [[1, 2], [0, 2]]'
      }
    ],
    shortcuts: [
      {
        title: 'Pivot 1 Strategy',
        rule: 'Hamesha koshish karo ki top-left element a11 ko 1 bana lo (swap karke ya divide karke). Ek baar 1 ban gaya toh uske niche ke saare elements 1 step me zero bante hain!',
        whenToUse: 'Echelon aur Normal form shuru karte waqt.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.2-p1',
        question: 'Apply R2 -> R2 - 2R1 on [[1, 3], [2, 5]].',
        hint: 'Row 2 element: 2 - 2(1) = 0, 5 - 2(3) = -1.',
        solution: 'Result is [[1, 3], [0, -1]].',
        solutionLatex: '\\begin{bmatrix} 1 & 3 \\\\ 0 & -1 \\end{bmatrix}'
      }
    ],
    commonMistakes: [
      'R1 -> 3R1 - R2 likhte waqt confusing signs ka gadbad hona. Best practice: Hamesha jis row ko change kar rahe ho uska coefficient 1 rakho: R1 -> R1 - (1/3)R2.',
      'Row operations me column operations bina bataye mix kar dena.'
    ],
    examTip: 'Transformation ke beech me "=" sign mat lagao, hamesha equivalence symbol "~" (tilde) lagao.'
  },
  {
    id: '2.3',
    unitId: 2,
    title: 'Conversion to Echelon and Normal Form',
    subtitle: 'Staircase Pattern (Echelon) aur Canonical [Ir, 0] (Normal) Form',
    yeKyaHai: {
      definition: 'Echelon form ek staircase (seedhi) jaisa pattern hota hai jisme har agli row me leading zeros ki sankhya pichhli row se zyada hoti hai. Normal form use aur aage le jaakar [Ir, 0] identity matrix me badal deta hai.',
      analogy: 'Echelon form jaise staircase: Pehle step pe 0 zero, doosre step pe 1 zero, teesre step pe 2 zero. Normal form jaise room ko bilkul minimalist bana dena — sirf diagonal me 1, baaki sab kuch 0!'
    },
    groundLevel: {
      intro: 'Rank nikalne ka sabse safe aur fail-proof tareeqa Echelon form hota hai:',
      points: [
        {
          heading: 'Row Echelon Form ke 3 Rules',
          content: '1. Saari zero rows matrix ke bilkul bottom (niche) honi chahiye.\n2. Har non-zero row ka pehla non-zero element (pivot) 1 hona chahiye (or simply non-zero).\n3. Niche wali row me leading zero upar wali row se ZYADA hone chahiye (diagonal ke niche sab 0).'
        },
        {
          heading: 'Normal Form [Ir, 0]',
          content: 'Normal form me Row aur Column DONO operations allowed hote hain! Isko reduce karke [I_r 0; 0 0] banaya jata hai jahan r rank hoti hai.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Forms Structure:',
      formulas: [
        { name: 'Row Echelon Form', latex: '\\begin{bmatrix} 1 & * & * \\\\ 0 & 1 & * \\\\ 0 & 0 & 1 \\end{bmatrix}', note: 'Upper triangular staircase shape' },
        { name: 'Normal Form', latex: '\\begin{bmatrix} I_r & 0 \\\\ 0 & 0 \\end{bmatrix} \\quad \\text{or} \\quad [I_r]', note: 'r is the rank of matrix' }
      ]
    },
    solvedExamples: [
      {
        title: 'Reduce to Echelon Form',
        problem: 'Reduce matrix A to Echelon form: [[1, 2, 3], [2, 4, 7], [3, 6, 10]]',
        latexProblem: 'A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 7 \\\\ 3 & 6 & 10 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'R2 -> R2 - 2R1 aur R3 -> R3 - 3R1 lagao.',
            whyThisStep: 'Pehle column ke a21 aur a31 ko zero banana hai.',
            mathLatex: 'R_2 \\to R_2 - 2R_1, \\quad R_3 \\to R_3 - 3R_1'
          },
          {
            stepNumber: 2,
            explanation: 'Values calculate karo.',
            whyThisStep: 'R2: [2-2, 4-4, 7-6] = [0, 0, 1]. R3: [3-3, 6-6, 10-9] = [0, 0, 1].',
            mathLatex: 'A \\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}'
          },
          {
            stepNumber: 3,
            explanation: 'R3 -> R3 - R2 lagao.',
            whyThisStep: 'Teesri row ko zero banane ke liye.',
            mathLatex: 'A \\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}'
          }
        ],
        finalAnswer: 'Echelon form achieved. Non-zero rows = 2, so Rank = 2.'
      }
    ],
    shortcuts: [
      {
        title: 'Echelon Rank Quick Count',
        rule: 'Echelon form aane ke baad rank = Non-zero rows ki count! Koi determinant nikalne ki zarurat nahi.',
        whenToUse: 'Rank calculation in 1 step.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.3-p1',
        question: 'How many non-zero rows are in [[1, 2], [0, 0]]?',
        hint: 'First row has non-zero elements, second row is completely 0.',
        solution: 'There is only 1 non-zero row. Rank = 1.',
        solutionLatex: '\\text{Rank} = 1'
      }
    ],
    commonMistakes: [
      'Echelon form me column operations laga dena — Echelon form ke liye ONLY ROW operations use karne hote hain!',
      'Zero row ko beech me chhod dena instead of moving it to the bottom.'
    ],
    examTip: 'Golden Rule: Echelon form = Only Row transformations. Normal form = Both Row and Column transformations allowed!'
  },
  {
    id: '2.4',
    unitId: 2,
    title: 'Inverse of Matrix using Elementary Transformation',
    subtitle: 'Gauss-Jordan Method [A | I] → [I | A⁻¹]',
    yeKyaHai: {
      definition: 'Elementary row operations ki madad se matrix A ko Identity matrix I mein badalna, aur wahi same operations I par lagakar sidhe A⁻¹ nikalna.',
      analogy: 'Imagine karo do twin brothers ek sath dance steps kar rahe hain. Pehla brother (A) normal pose se khada hokar standard statue (I) ban raha hai, toh doosra brother (I) jo pehle statue tha, wo automatically inverse pose (A⁻¹) ban jata hai!'
    },
    groundLevel: {
      intro: 'Gauss-Jordan method bina Adjoint ya Co-factors nikale inverse nikalta hai:',
      points: [
        {
          heading: 'Augmented Setup',
          content: 'Matrix equation likho: A = I * A. Ya augmented matrix banao [A | I].'
        },
        {
          heading: 'Target Transformation',
          content: 'Sirf ROW operations use karke left side ke A ko I (Identity matrix) banao. Jo-jo operations A pe karoge, exactly wahi parallel me I pe bhi karte raho.'
        },
        {
          heading: 'Result',
          content: 'Jab left side I ban jayega: [I | A⁻¹], right side wali matrix hi tumhari required Inverse A⁻¹ hogi!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Gauss-Jordan Architecture:',
      formulas: [
        { name: 'Transformation Principle', latex: 'A = I \\cdot A \\xrightarrow{\\text{Row Ops}} I = A^{-1} \\cdot A', note: 'Only row operations permitted' },
        { name: 'Augmented Form', latex: '[A \\mid I] \\sim [I \\mid A^{-1}]', note: 'Standard exam presentation' }
      ]
    },
    solvedExamples: [
      {
        title: 'Find Inverse of 2x2 Matrix by Elementary Row Operations',
        problem: 'Find inverse of A = [[1, 2], [3, 4]] using elementary row transformations.',
        latexProblem: 'A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Write [A | I].',
            whyThisStep: 'Setup augmented matrix.',
            mathLatex: '[A \\mid I] = \\left[\\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\\\ 3 & 4 & 0 & 1 \\end{array}\\right]'
          },
          {
            stepNumber: 2,
            explanation: 'R2 -> R2 - 3R1.',
            whyThisStep: 'To make a21 = 0.',
            mathLatex: '\\sim \\left[\\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\\\ 0 & -2 & -3 & 1 \\end{array}\\right]'
          },
          {
            stepNumber: 3,
            explanation: 'R2 -> R2 / (-2).',
            whyThisStep: 'Make pivot a22 = 1.',
            mathLatex: '\\sim \\left[\\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\\\ 0 & 1 & 3/2 & -1/2 \\end{array}\\right]'
          },
          {
            stepNumber: 4,
            explanation: 'R1 -> R1 - 2R2.',
            whyThisStep: 'Make a12 = 0 to get Identity on left.',
            mathLatex: '\\sim \\left[\\begin{array}{cc|cc} 1 & 0 & -2 & 1 \\\\ 0 & 1 & 3/2 & -1/2 \\end{array}\\right]'
          }
        ],
        finalAnswer: 'A⁻¹ = [[-2, 1], [3/2, -1/2]]'
      }
    ],
    shortcuts: [
      {
        title: '2x2 Inverse Verification Trick',
        rule: '2x2 matrix [[a, b], [c, d]] ka inverse verify karne ke liye: Diagonal elements a aur d ko swap karo, off-diagonal b aur c ka sign change karo (-b, -c), aur 1/(ad - bc) se divide karo!',
        whenToUse: 'Final answer re-check karne ke liye 5 seconds me.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.4-p1',
        question: 'Find the inverse of [[2, 0], [0, 4]].',
        hint: 'For diagonal matrix, inverse is simply the reciprocals of diagonal elements.',
        solution: 'Inverse = [[1/2, 0], [0, 1/4]].',
        solutionLatex: 'A^{-1} = \\begin{bmatrix} 1/2 & 0 \\\\ 0 & 1/4 \\end{bmatrix}'
      }
    ],
    commonMistakes: [
      'Column operations use kar lena jab Row method specified ho. Gauss-Jordan me ONLY row operations use hote hain!',
      'Calculation me fractions (jaise 3/2) ke minus sign ka drop ho jaana.'
    ],
    examTip: 'Hamesha answer aane ke baad rough me A * A⁻¹ = I multiply karke check kar lo, 100% guarantee ho jayegi.'
  },
  {
    id: '2.5',
    unitId: 2,
    title: 'Rank of Matrix',
    subtitle: 'Determinant Method, Echelon Form, aur Normal Form Comparison',
    yeKyaHai: {
      definition: 'Rank of a matrix matrix ki "real dimensions" ya non-zero rows ki count hoti hai. Iska symbol ρ(A) hota hai.',
      analogy: 'Agar 3 log interview de rahe hain par teesra banda pehle do ke answers ka copy-paste bol raha hai, toh effective log kitne hue? Sirf 2! Rank wahi batati hai ki kitni rows aapas me independent hain aur kitni faltu (dependent) hain.'
    },
    groundLevel: {
      intro: 'Rank nikalne ke 3 standard methods hote hain:',
      points: [
        {
          heading: 'Method 1: Determinant (Minor) Method',
          content: 'Order 3x3 matrix ka determinant |A| nikalo. Agar |A| != 0, toh Rank = 3! Agar |A| = 0, toh 2x2 minors check karo. Agar koi ek bhi 2x2 minor non-zero hai toh Rank = 2. Agar sab zero hain toh Rank = 1.'
        },
        {
          heading: 'Method 2: Echelon Form (Most Preferred)',
          content: 'Row operations se upper triangular staircase banao. Rank = Number of non-zero rows.'
        },
        {
          heading: 'Method 3: Normal Form',
          content: 'Matrix ko [Ir, 0] me convert karo. Identity matrix ka order r hi Rank ρ(A) hota hai.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Rank Rules and Properties:',
      formulas: [
        { name: 'Rank Definition', latex: '\\rho(A) = r \\iff \\text{at least one minor of order } r \\neq 0 \\text{ and all minors of order } > r = 0', note: 'Formal definition' },
        { name: 'Rank Upper Bound', latex: '\\rho(A_{m \\times n}) \\le \\min(m, n)', note: 'Rank can never exceed rows or cols' },
        { name: 'Non-Singular Square Matrix', latex: '|A_{n \\times n}| \\neq 0 \\iff \\rho(A) = n', note: 'Full rank matrix' }
      ]
    },
    solvedExamples: [
      {
        title: 'Rank by Determinant Method (Order 3)',
        problem: 'Find the rank of A = [[1, 2, 3], [2, 4, 6], [1, 1, 1]]',
        latexProblem: 'A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Check determinant of 3x3 matrix.',
            whyThisStep: 'Notice Row 2 is 2 * Row 1, so determinant must be 0.',
            mathLatex: '|A| = 0 \\implies \\rho(A) < 3'
          },
          {
            stepNumber: 2,
            explanation: 'Check any 2x2 minor.',
            whyThisStep: 'Let us take bottom-left 2x2 minor: [[2, 4], [1, 1]].',
            mathLatex: '\\begin{vmatrix} 2 & 4 \\\\ 1 & 1 \\end{vmatrix} = 2(1) - 4(1) = 2 - 4 = -2 \\neq 0'
          }
        ],
        finalAnswer: 'Since 3x3 minor is 0 and at least one 2x2 minor is non-zero, Rank ρ(A) = 2.'
      }
    ],
    shortcuts: [
      {
        title: 'Proportional Row Shortcut',
        rule: 'Agar do rows identical ya proportional hain (jaise [1, 2, 3] aur [2, 4, 6]), toh unme se ek row direct zero ban jayegi, yani rank pakka < 3 hogi!',
        whenToUse: 'Questions me dekhte hi predict karne ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.5-p1',
        question: 'Find the rank of Identity matrix I_3.',
        hint: 'All 3 rows are linearly independent and det(I) = 1 != 0.',
        solution: 'Rank of I_3 is 3.',
        solutionLatex: '\\rho(I_3) = 3'
      },
      {
        id: '2.5-p2',
        question: 'Find the maximum possible rank of a 3x5 matrix.',
        hint: 'Rank <= min(m, n).',
        solution: 'min(3, 5) = 3. Maximum rank is 3.',
        solutionLatex: '\\rho(A) \\le \\min(3, 5) = 3'
      }
    ],
    commonMistakes: [
      'Ek 2x2 minor zero dekh kar rank = 1 bol dena. Rank 1 tabhi hoti hai jab SAARI 2x2 minors zero hon!',
      'Negative determinant aane par rank ko negative samajhna — rank hamesha non-negative integer hoti hai.'
    ],
    examTip: 'Agar 4x4 matrix ho toh kabhi determinant method mat lagao, hamesha Echelon form lagao.'
  },
  {
    id: '2.6',
    unitId: 2,
    title: 'Non-Homogeneous and Homogeneous Linear Equations',
    subtitle: 'AX = B vs AX = 0 System Representation',
    yeKyaHai: {
      definition: 'Linear equations ke group ko matrix form AX = B (Non-homogeneous) ya AX = 0 (Homogeneous) me likhna.',
      analogy: 'Agar ek company ka target budget B kuch paisa hai (AX = B), toh solutions dhoondhne padenge. Par agar budget zero hai (AX = 0), toh agar sab kuch band kar do (x=0, y=0, z=0), tab bhi budget zero hi rahega (Trivial solution hamesha exist karta hai)!'
    },
    groundLevel: {
      intro: 'Dono systems me farq samjho ground level se:',
      points: [
        {
          heading: 'Non-Homogeneous System: AX = B',
          content: 'Right hand side constant vector B zero nahi hota [b1, b2, b3]^T != 0. Iske teen possibilities hote hain: Unique solution, Infinite solutions, ya No solution (Inconsistent).'
        },
        {
          heading: 'Homogeneous System: AX = 0',
          content: 'Right hand side B = 0 hota hai. Iska matlab ye system HAMESHA CONSISTENT hota hai! Kabhi No Solution nahi hota.'
        },
        {
          heading: 'Augmented Matrix [A | B]',
          content: 'Non-homogeneous system me A ke sath B ko chipka kar [A | B] banate hain aur dono ka rank ek sath calculate karte hain.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Matrix Representation Formulas:',
      formulas: [
        { name: 'Matrix Equation', latex: 'AX = B \\iff \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix}', note: 'Coefficient A, Variables X, Constants B' },
        { name: 'Augmented Matrix', latex: '[A \\mid B] = \\begin{bmatrix} a_{11} & a_{12} & a_{13} & \\mid & b_1 \\\\ a_{21} & a_{22} & a_{23} & \\mid & b_2 \\\\ a_{31} & a_{32} & a_{33} & \\mid & b_3 \\end{bmatrix}', note: 'Key to Rouche-Capelli theorem' }
      ]
    },
    solvedExamples: [
      {
        title: 'Formulating AX = B and Augmented Matrix',
        problem: 'Write the system in matrix form: 2x + y + z = 5, x - y + 2z = 3, 3x + 2y - z = 4',
        latexProblem: '2x + y + z = 5, \\quad x - y + 2z = 3, \\quad 3x + 2y - z = 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Extract coefficients of x, y, z into matrix A.',
            whyThisStep: 'Row 1: [2, 1, 1], Row 2: [1, -1, 2], Row 3: [3, 2, -1].',
            mathLatex: 'A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 2 \\\\ 3 & 2 & -1 \\end{bmatrix}, \\quad X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}, \\quad B = \\begin{bmatrix} 5 \\\\ 3 \\\\ 4 \\end{bmatrix}'
          },
          {
            stepNumber: 2,
            explanation: 'Construct [A | B].',
            whyThisStep: 'Attach B vector to the right of A.',
            mathLatex: '[A \\mid B] = \\left[\\begin{array}{ccc|c} 2 & 1 & 1 & 5 \\\\ 1 & -1 & 2 & 3 \\\\ 3 & 2 & -1 & 4 \\end{array}\\right]'
          }
        ],
        finalAnswer: 'Augmented matrix [A|B] successfully formulated.'
      }
    ],
    shortcuts: [
      {
        title: 'Homogeneous Zero Test',
        rule: 'AX = 0 me x = 0, y = 0, z = 0 hamesha satisfy karega. Isko Trivial / Zero solution kehte hain.',
        whenToUse: 'MCQs me.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.6-p1',
        question: 'Is 3x + 4y = 0, 2x - y = 0 homogeneous or non-homogeneous?',
        hint: 'Check RHS constants.',
        solution: 'Since RHS is [0, 0], it is a Homogeneous system.',
        solutionLatex: '\\text{Homogeneous}'
      }
    ],
    commonMistakes: [
      'Missing variable ko skip karna (jaise agar 2x + 3z = 4 ho toh y ka coefficient 0 hota hai, 1 nahi!).'
    ],
    examTip: 'Missing variables ke coefficient 0 likhna mat bhoolna, matrix structure bigad sakta hai.'
  },
  {
    id: '2.7',
    unitId: 2,
    title: 'Consistency of System Using Rank of Matrices',
    subtitle: 'Rouche-Capelli Theorem Decision Table Shortcut',
    yeKyaHai: {
      definition: 'Rouche-Capelli Theorem batata hai ki equations solve karne se pehle hi kaise pata lagayein ki unka answer aayega ya nahi, aur kitne answers aayenge.',
      analogy: 'Jaise doctor blood test dekh kar pehle hi bata deta hai ki bimari ka ilaaj संभव hai ya nahi — Rouche-Capelli theorem augmented matrix ki rank dekh kar consistency bata deta hai!'
    },
    groundLevel: {
      intro: 'Exam me consistency ka decision table sabse crucial shortcut hai:',
      points: [
        {
          heading: 'The Master Condition: ρ(A) vs ρ(A|B)',
          content: 'Agar ρ(A) != ρ(A|B) => System is INCONSISTENT (No solution! Equations aapas me lad rahi hain).'
        },
        {
          heading: 'Consistent Case: ρ(A) = ρ(A|B) = r',
          content: 'System is CONSISTENT! Ab do baatein ho sakti hain: (1) Agar r = n (number of unknowns), toh UNIQUE SOLUTION. (2) Agar r < n, toh INFINITE SOLUTIONS (n - r free parameters).'
        }
      ]
    },
    formulaSheet: {
      summary: 'Decision Table for Consistency (Rouche-Capelli):',
      formulas: [
        { name: 'Inconsistent (No Solution)', latex: '\\rho(A) \\neq \\rho(A \\mid B)', note: 'Equations are contradictory' },
        { name: 'Unique Solution', latex: '\\rho(A) = \\rho(A \\mid B) = n \\quad (n = \\text{unknowns})', note: 'Exactly one point of intersection' },
        { name: 'Infinite Solutions', latex: '\\rho(A) = \\rho(A \\mid B) = r < n', note: 'Line/plane of intersection, n - r parameters' }
      ]
    },
    solvedExamples: [
      {
        title: 'Testing Consistency and Finding Solution Type',
        problem: 'Test the consistency of: x + y + z = 6, x + 2y + 3z = 10, x + 2y + 4z = 11',
        latexProblem: '[A \\mid B] = \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 1 & 2 & 3 & 10 \\\\ 1 & 2 & 4 & 11 \\end{array}\\right]',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Apply R2 -> R2 - R1 and R3 -> R3 - R1.',
            whyThisStep: 'To reduce into echelon form.',
            mathLatex: '[A \\mid B] \\sim \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 1 & 3 & 5 \\end{array}\\right]'
          },
          {
            stepNumber: 2,
            explanation: 'Apply R3 -> R3 - R2.',
            whyThisStep: 'Eliminate y from row 3.',
            mathLatex: '[A \\mid B] \\sim \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 0 & 1 & 1 \\end{array}\\right]'
          },
          {
            stepNumber: 3,
            explanation: 'Compare ranks ρ(A) and ρ(A|B).',
            whyThisStep: 'A has 3 non-zero rows => ρ(A) = 3. [A|B] also has 3 non-zero rows => ρ(A|B) = 3. Total unknowns n = 3.',
            mathLatex: '\\rho(A) = \\rho(A \\mid B) = 3 = n'
          }
        ],
        finalAnswer: 'The system is Consistent and has a UNIQUE SOLUTION (x = 1, y = 2, z = 1).'
      }
    ],
    shortcuts: [
      {
        title: 'Consistency Decision Table Shortcut',
        rule: 'ρ(A) ≠ ρ(A|B) → No Solution (Cross!). ρ(A) = ρ(A|B) = n → Unique. ρ(A) = ρ(A|B) < n → Infinite (Parameter k required).',
        mnemonic: 'Unequal: Khatam! Equal = n: Unique! Equal < n: Infinite!',
        whenToUse: 'Rank nikalne ke baad immediate conclusion likhne ke liye.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.7-p1',
        question: 'If ρ(A) = 2, ρ(A|B) = 3, what can you say about the system?',
        hint: 'Are the ranks equal?',
        solution: 'Since ρ(A) != ρ(A|B), the system is Inconsistent and has NO SOLUTION.',
        solutionLatex: '\\text{Inconsistent (No solution)}'
      },
      {
        id: '2.7-p2',
        question: 'If ρ(A) = ρ(A|B) = 2 and number of variables is 3, how many arbitrary constants are needed?',
        hint: 'Number of parameters = n - r.',
        solution: 'Parameters = 3 - 2 = 1 arbitrary constant (e.g., let z = k).',
        solutionLatex: 'n - r = 3 - 2 = 1'
      }
    ],
    commonMistakes: [
      'ρ(A) dekhte waqt pura [A|B] dekh lena — yaad rakho ρ(A) me vertical line ke LEFT side wali rows gini jaati hain!'
    ],
    examTip: 'Consistency conclusion ko step 4 mein capital bold letters mein box karke likho.'
  },
  {
    id: '2.8',
    unitId: 2,
    title: 'Non-Homogeneous System: Unique vs Infinite Solutions',
    subtitle: 'Parameter k Substitution aur Back-Substitution Method',
    yeKyaHai: {
      definition: 'Jab AX = B consistent ho, toh back-substitution se ya toh exact ek x, y, z milta hai (Unique), ya variable ko k (parameter) maankar anant solutions milte hain (Infinite).',
      analogy: 'Unique solution jaise do seedhi sadkon ka crossroad (sirf ek intersection point). Infinite solution jaise ek sadak ke upar dusri sadak ban jaana — har point pe overlap!'
    },
    groundLevel: {
      intro: 'Step-by-step solving mechanism:',
      points: [
        {
          heading: 'Back-Substitution for Unique Solution',
          content: 'Echelon form se sabse aakhri row se shuru karo (jaise z = 1), fir usse upar wali row me put karke y nikalo, fir pehli row se x nikalo.'
        },
        {
          heading: 'Parameter k for Infinite Solutions',
          content: 'Agar r = 2 aur unknowns n = 3 hain, toh (3 - 2 = 1) variable ko parameter "k" maan lo (let z = k). Ab y aur x ko k ke terms me express karo.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Back-Substitution Flow:',
      formulas: [
        { name: 'Unique Solution', latex: 'z = c, \\quad y = g(z), \\quad x = h(y, z)', note: 'Straightforward numeric values' },
        { name: 'Infinite Solution Form', latex: 'z = k, \\quad y = a + bk, \\quad x = c + dk \\quad (k \\in \\mathbb{R})', note: 'One parameter family of solutions' }
      ]
    },
    solvedExamples: [
      {
        title: 'Infinite Solutions with Parameter k',
        problem: 'Solve: x + y + z = 4, 2x + 2y + 2z = 8, 3x + 3y + 3z = 12',
        latexProblem: 'x + y + z = 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Augmented matrix [A|B] reduce karo.',
            whyThisStep: 'Row 2 and Row 3 become all zeros.',
            mathLatex: '[A \\mid B] = \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\\\ 2 & 2 & 2 & 8 \\\\ 3 & 3 & 3 & 12 \\end{array}\\right] \\sim \\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]'
          },
          {
            stepNumber: 2,
            explanation: 'Rank check karo: ρ(A) = 1, ρ(A|B) = 1, n = 3.',
            whyThisStep: 'r < n => Infinite solutions with n - r = 3 - 1 = 2 parameters.',
            mathLatex: 'n - r = 3 - 1 = 2 \\quad \\text{parameters: let } z = k_1, y = k_2'
          },
          {
            stepNumber: 3,
            explanation: 'Substitute into first row: x + k2 + k1 = 4.',
            whyThisStep: 'x = 4 - k2 - k1.',
            mathLatex: 'x = 4 - k_1 - k_2'
          }
        ],
        finalAnswer: 'Infinite solutions: x = 4 - k1 - k2, y = k2, z = k1 where k1, k2 are real numbers.'
      }
    ],
    shortcuts: [
      {
        title: 'Zero Row Indicator',
        rule: 'Agar [A|B] me left aur right dono 0 0 0 | 0 ban jayein, toh infinite solutions ki taraf ishara hai. Lekin agar 0 0 0 | non-zero (jaise 5) ban jaye, toh 0 = 5 impossible => No Solution!',
        whenToUse: 'Quick identification during row reduction.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.8-p1',
        question: 'What does a row [0 0 0 | 7] indicate in an augmented matrix?',
        hint: '0*x + 0*y + 0*z = 7.',
        solution: 'It means 0 = 7 which is mathematically false! The system is inconsistent (No solution).',
        solutionLatex: '0 \\neq 7 \\implies \\text{No Solution}'
      }
    ],
    commonMistakes: [
      'Infinite solutions wale question me z = k maanna bhool jana aur "Cannot be solved" likh aana.'
    ],
    examTip: 'Exam me parameter k likhte waqt "where k is any arbitrary constant / real number" zaroor likho.'
  },
  {
    id: '2.9',
    unitId: 2,
    title: 'Homogeneous System: Trivial vs Non-Trivial Solutions',
    subtitle: '|A| ≠ 0 (Trivial x=y=z=0) vs |A| = 0 (Non-Trivial Infinite)',
    yeKyaHai: {
      definition: 'Homogeneous system AX = 0 mein: agar |A| != 0 toh sirf ek boring zero-answer hota hai (Trivial solution: x=0, y=0, z=0). Agar |A| = 0 ho toh non-zero infinite answers hote hain (Non-Trivial solution).',
      analogy: 'Imagine karo ek court case jisme sabhi parties chup hain (0 charges). Trivial case: Sabhi chup raho (0, 0, 0). Non-trivial case: Koi naya loop-hole mil gaya jisse non-zero bayan dekar bhi balance bana rahe!'
    },
    groundLevel: {
      intro: 'Homogeneous linear equations ka ground level logic:',
      points: [
        {
          heading: 'Why Trivial Solution Always Exists',
          content: 'Kyunki agar tum x = 0, y = 0, z = 0 put karoge, toh left side 0 ho jayegi aur right side bhi 0 hai (0 = 0). Isliye Homogeneous system KABHI INCONSISTENT NAHI HOTA!'
        },
        {
          heading: 'Case 1: ρ(A) = n (or |A| ≠ 0)',
          content: 'Only TRIVIAL SOLUTION (Zero solution): x = 0, y = 0, z = 0.'
        },
        {
          heading: 'Case 2: ρ(A) < n (or |A| = 0)',
          content: 'NON-TRIVIAL SOLUTION (Infinite non-zero solutions exist). Engineering me vibrations aur buckling isi condition se nikalte hain!'
        }
      ]
    },
    formulaSheet: {
      summary: 'Homogeneous System Rules:',
      formulas: [
        { name: 'Trivial Solution Condition', latex: '|A| \\neq 0 \\iff \\rho(A) = n \\implies x = 0, y = 0, z = 0', note: 'Only zero solution' },
        { name: 'Non-Trivial Solution Condition', latex: '|A| = 0 \\iff \\rho(A) < n \\implies \\text{Infinite non-zero solutions}', note: 'Crucial for Eigenvalues!' }
      ]
    },
    solvedExamples: [
      {
        title: 'Finding Condition for Non-Trivial Solution',
        problem: 'For what value of λ does the system have a non-trivial solution: x + y + z = 0, 2x + 3y - z = 0, 3x + 4y + λz = 0',
        latexProblem: '\\det(A) = 0 \\quad \\text{for non-trivial solution}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Condition lagao: |A| = 0.',
            whyThisStep: 'Non-trivial solution ke liye determinant zero hona mandatory hai.',
            mathLatex: '\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & -1 \\\\ 3 & 4 & \\lambda \\end{vmatrix} = 0'
          },
          {
            stepNumber: 2,
            explanation: 'Expand the determinant along Row 1.',
            whyThisStep: '1*(3λ - (-4)) - 1*(2λ - (-3)) + 1*(8 - 9) = 0.',
            mathLatex: '1(3\\lambda + 4) - 1(2\\lambda + 3) + 1(-1) = 0'
          },
          {
            stepNumber: 3,
            explanation: 'Simplify for λ.',
            whyThisStep: '3λ + 4 - 2λ - 3 - 1 = 0 => λ = 0.',
            mathLatex: '\\lambda + 0 = 0 \\implies \\lambda = 0'
          }
        ],
        finalAnswer: 'For λ = 0, the system has non-trivial solutions.'
      }
    ],
    shortcuts: [
      {
        title: 'Non-Trivial = Determinant ZERO',
        rule: 'Jab bhi exam question me word "NON-TRIVIAL" dikhe, aankh band karke |A| = 0 rakh do! 100% yahi step hota hai.',
        whenToUse: 'Direct questions with unknown parameter λ or k.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.9-p1',
        question: 'If |A| = 5 for a 3x3 homogeneous system AX = 0, what is the solution?',
        hint: 'Is determinant zero or non-zero?',
        solution: 'Since |A| != 0, it has only the Trivial Solution: x = 0, y = 0, z = 0.',
        solutionLatex: 'x = y = z = 0 \\quad (\\text{Trivial})'
      }
    ],
    commonMistakes: [
      'Homogeneous system ko inconsistent bol dena — Homogeneous system hamesha consistent hota hai!'
    ],
    examTip: 'Characteristic equation of matrix nikalte waqt bhi yahi logic use hota hai: |A - λI| = 0!'
  },
  {
    id: '2.10',
    unitId: 2,
    title: 'Eigenvalues and Eigenvectors (Order 2 Matrix)',
    subtitle: 'Characteristic Polynomial, Equation, Trace & Det Shortcut',
    yeKyaHai: {
      definition: 'Eigenvalue λ wo scaling factor hai jisse kisi vector X ko matrix A se multiply karne par uski direction nahi badalti, sirf lambai (scale) badalti hai: AX = λX!',
      analogy: 'Imagine karo ek rubber sheet ko stretch kiya ja raha hai. Zyadaatar directions tedhi ho jati hain, par kuch special lines aisi hoti hain jo bilkul seedhi rehti hain, sirf lambi ya chhoti hoti hain. Wahi special directions Eigenvectors hain, aur unka stretch factor Eigenvalue hai!'
    },
    groundLevel: {
      intro: 'Order 2 matrix ka Eigenvalue calculate karne ka 10-second shortcut formula:',
      points: [
        {
          heading: 'Characteristic Equation Shortcut (Order 2)',
          content: 'λ² - (Trace of A)λ + (Determinant of A) = 0! Jahan Trace = a11 + a22, aur Determinant = ad - bc.'
        },
        {
          heading: 'Two Golden Properties',
          content: '1. Sum of Eigenvalues = Trace of A (λ1 + λ2 = a11 + a22)\n2. Product of Eigenvalues = Determinant of A (λ1 * λ2 = |A|)'
        },
        {
          heading: 'Eigenvector Calculation (AX = λX)',
          content: '(A - λI)X = 0 ko solve karo har eigenvalue λ ke liye. Non-zero vector [x1, x2]^T nikalo.'
        }
      ]
    },
    formulaSheet: {
      summary: 'Eigenvalue Master Equations:',
      formulas: [
        { name: 'Characteristic Equation (2x2 Quick)', latex: '\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0', note: 'Fastest formula for order 2' },
        { name: 'Sum Property', latex: '\\lambda_1 + \\lambda_2 = \\text{Tr}(A) = a_{11} + a_{22}', note: 'Instant answer verification' },
        { name: 'Product Property', latex: '\\lambda_1 \\cdot \\lambda_2 = \\det(A)', note: 'Determinant equals product' },
        { name: 'Eigenvector Equation', latex: '(A - \\lambda I) X = 0', note: 'Homogeneous system for vector X' }
      ]
    },
    equationBreakdown: {
      title: '2×2 Eigenvalue Characteristic Equation Breakdown',
      formulaLatex: '\\det(A - \\lambda I) = 0 \\iff \\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0',
      kyunAisaHotaHai: 'Kyun aisa hota hai? Jab matrix vector ko sirf stretch karti hai: AX = λX => (A - λI)X = 0. Kyunki eigenvector X non-zero hona zaroori hai, is homogeneous system ka non-trivial solution hona padega. Aur non-trivial solution tabhi hota hai jab coefficient matrix ka determinant |A - λI| = 0 ho!',
      termExplanations: [
        { symbol: 'A', symbolLatex: 'A', meaning: 'The given square matrix of order 2' },
        { symbol: 'λ', symbolLatex: '\\lambda', meaning: 'Eigenvalue (the scalar scaling factor)' },
        { symbol: 'Tr(A)', symbolLatex: '\\text{Tr}(A) = a_{11} + a_{22}', meaning: 'Trace of matrix (sum of main diagonal elements)' },
        { symbol: '|A|', symbolLatex: '\\det(A) = ad - bc', meaning: 'Determinant of matrix A' },
        { symbol: 'X', symbolLatex: 'X = [x_1, x_2]^T', meaning: 'Eigenvector corresponding to eigenvalue λ' }
      ],
      numericExample: {
        values: 'Matrix A = [[10, -9], [6, -5]] (Summer 2025 Q6(a) & Winter 2025 Q5(a))',
        calculationLatex: '\\text{Tr}(A) = 10 + (-5) = 5, \\quad \\det(A) = 10(-5) - (-9)(6) = -50 + 54 = 4 \\implies \\lambda^2 - 5\\lambda + 4 = 0',
        result: '(\\lambda - 4)(\\lambda - 1) = 0 \\implies \\lambda_1 = 4, \\; \\lambda_2 = 1'
      }
    },
    examTemplate: {
      questionType: 'Find Eigen Values and Eigen Vectors of 2x2 Matrix (Summer 2025 Q6(a) [6 Marks])',
      totalMarks: '6 Marks',
      examinerCatchphrase: 'Examiner awards: 1M for Char Eqn, 1M for Eigenvalues, 2M for Eigenvector 1, and 2M for Eigenvector 2.',
      steps: [
        {
          stepNumber: 1,
          stepHeading: 'Write the Characteristic Equation',
          whatToWrite: 'The characteristic equation of matrix A is |A - λI| = 0:',
          latexTemplate: '\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 2,
          stepHeading: 'Solve Quadratic to get Eigenvalues',
          whatToWrite: 'Factor the quadratic equation to find roots λ1 and λ2:',
          latexTemplate: '(\\lambda - \\lambda_1)(\\lambda - \\lambda_2) = 0 \\implies \\text{Eigenvalues are } \\lambda_1, \\lambda_2',
          marksAllotted: '1 Mark'
        },
        {
          stepNumber: 3,
          stepHeading: 'Eigenvector for λ = λ1',
          whatToWrite: 'Solve (A - λ1 I)X = 0. Set up matrix equation and express x1 in terms of x2:',
          latexTemplate: '\\begin{bmatrix} a_{11}-\\lambda_1 & a_{12} \\\\ a_{21} & a_{22}-\\lambda_1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies X_1 = \\dots',
          marksAllotted: '2 Marks'
        },
        {
          stepNumber: 4,
          stepHeading: 'Eigenvector for λ = λ2',
          whatToWrite: 'Solve (A - λ2 I)X = 0. Set up matrix equation and express x1 in terms of x2:',
          latexTemplate: '\\begin{bmatrix} a_{11}-\\lambda_2 & a_{12} \\\\ a_{21} & a_{22}-\\lambda_2 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies X_2 = \\dots',
          marksAllotted: '2 Marks'
        }
      ]
    },
    solvedExamples: [
      {
        title: 'Quick Eigenvalues and Eigenvectors of 2x2 Matrix',
        problem: 'Find eigenvalues and eigenvectors of A = [[4, 1], [2, 3]]',
        latexProblem: 'A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Trace aur Determinant nikalo.',
            whyThisStep: 'Trace(A) = 4 + 3 = 7. Det(A) = 4(3) - 1(2) = 12 - 2 = 10.',
            mathLatex: '\\text{Tr}(A) = 4 + 3 = 7, \\quad \\det(A) = 12 - 2 = 10'
          },
          {
            stepNumber: 2,
            explanation: 'Characteristic equation me substitute karo: λ² - 7λ + 10 = 0.',
            whyThisStep: 'Factorise: (λ - 5)(λ - 2) = 0 => λ = 5, 2.',
            mathLatex: '\\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda - 5)(\\lambda - 2) = 0 \\implies \\lambda_1 = 5, \\; \\lambda_2 = 2'
          },
          {
            stepNumber: 3,
            explanation: 'Eigenvector for λ = 5: Solve (A - 5I)X = 0.',
            whyThisStep: '[[4-5, 1], [2, 3-5]] [x1, x2]^T = 0 => [[-1, 1], [2, -2]] [x1, x2]^T = 0. -x1 + x2 = 0 => x1 = x2.',
            mathLatex: '-x_1 + x_2 = 0 \\implies x_1 = x_2 \\implies X_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}'
          },
          {
            stepNumber: 4,
            explanation: 'Eigenvector for λ = 2: Solve (A - 2I)X = 0.',
            whyThisStep: '[[4-2, 1], [2, 3-2]] [x1, x2]^T = 0 => [[2, 1], [2, 1]] [x1, x2]^T = 0. 2x1 + x2 = 0 => x2 = -2x1.',
            mathLatex: '2x_1 + x_2 = 0 \\implies x_2 = -2x_1 \\implies X_2 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}'
          }
        ],
        finalAnswer: 'Eigenvalues: λ = 5, 2. Eigenvectors: X1 = [1, 1]^T, X2 = [1, -2]^T.'
      }
    ],
    shortcuts: [
      {
        title: '2x2 Quick Eigenvalue Formula',
        rule: 'Seedhe likho: λ² - (Tr)λ + |A| = 0. Roots ka sum check karo: 5 + 2 = 7 (matches Trace 7). Roots ka product check karo: 5 * 2 = 10 (matches Det 10). Answer 100% sahi hai!',
        whenToUse: 'Har 2x2 matrix eigenvalue question mein.'
      }
    ],
    practiceQuestions: [
      {
        id: '2.10-p1',
        question: 'Find the eigenvalues of A = [[1, 2], [0, 3]].',
        hint: 'For triangular matrix, eigenvalues are simply diagonal elements.',
        solution: 'Since it is upper triangular, eigenvalues are λ = 1, 3.',
        solutionLatex: '\\lambda = 1, 3'
      },
      {
        id: '2.10-p2',
        question: 'If eigenvalues of a matrix are 2 and 6, what is its determinant?',
        hint: 'Determinant = Product of eigenvalues.',
        solution: 'Det = λ1 * λ2 = 2 * 6 = 12.',
        solutionLatex: '\\det(A) = 2 \\times 6 = 12'
      }
    ],
    commonMistakes: [
      'Eigenvector nikalte waqt zero vector [0, 0]^T likh dena — Eigenvector HAMESHA non-zero vector hota hai!',
      'Trace ka sign flip kar dena (formula me minus sign hai: λ² - Tr*λ + Det = 0).'
    ],
    examTip: 'Exam paper me properties zaroor mention karo: "Sum of eigenvalues = Trace(A) and Product = |A|".'
  }
];
