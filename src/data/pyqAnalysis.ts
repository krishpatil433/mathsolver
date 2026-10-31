import { UnitPYQAnalysis } from '../types/math';

export const unitPYQData: Record<number, UnitPYQAnalysis> = {
  // =========================================================================
  // UNIT 1: PARTIAL DIFFERENTIATION (MSBTE Summer 2025, Winter 2025, Summer 2026)
  // =========================================================================
  1: {
    unitId: 1,
    unitName: 'PARTIAL DIFFERENTIATION',
    marksWeightage: '14 - 18 Marks (out of 70)',
    frequentlyRepeatedPatterns: [
      'Maxima and Minima of 2 variables using discriminant test (rt - s² condition)',
      'Lagrange Multipliers method with one linear constraint φ(x, y) = 0',
      'First, second, and mixed order partial derivatives (fx, fy, fxx, fyy, fxy)',
      'Euler\'s theorem verification for homogeneous functions of degree n'
    ],
    paperQuestions: [
      {
        paper: 'Summer 2025 Q2(b) & Summer 2026 Q2(c) [4 Marks]',
        marks: 4,
        questionText: 'Discuss the maxima and minima of the function f(x, y) = 3x^2 - y^2 + x^3.',
        latexQuestion: 'f(x, y) = 3x^2 - y^2 + x^3',
        given: 'Given multivariable function of two independent variables x and y: f(x, y) = 3x^2 - y^2 + x^3.',
        toFind: 'Stationary points (critical points), values of second derivatives (r, s, t), and determination of Maximum, Minimum, or Saddle point with extreme values.',
        formula: 'r = \\frac{\\partial^2 f}{\\partial x^2}, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad t = \\frac{\\partial^2 f}{\\partial y^2}, \\quad \\Delta = rt - s^2',
        formulaExplanation: 'Yahan r matlab x ke respect mein double partial derivative (fxx), s matlab mixed derivative (fxy), aur t matlab y ke respect mein double derivative (fyy) hota hai. Agar rt - s² > 0 aur r < 0 toh Maximum; agar rt - s² > 0 aur r > 0 toh Minimum; agar rt - s² < 0 toh Saddle point (neither max nor min).',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: First Partial Derivatives & Stationary Points',
            explanation: 'Partial differentiation ka golden rule: Jab x ke respect me differentiate karte hain toh y ko constant (number) maante hain, aur jab y ke respect me karte hain toh x ko constant maante hain.',
            mathLatex: 'f_x = \\frac{\\partial f}{\\partial x} = \\frac{\\partial}{\\partial x}(3x^2 - y^2 + x^3) = 6x - 0 + 3x^2 = 3x(2 + x)',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Differentiate w.r.t y and Equate Both to Zero',
            explanation: 'Stationary points par curve flat hoti hai (tangent plane horizontal), isliye fx = 0 aur fy = 0 equate karte hain.',
            mathLatex: 'f_y = \\frac{\\partial f}{\\partial y} = \\frac{\\partial}{\\partial y}(3x^2 - y^2 + x^3) = 0 - 2y + 0 = -2y',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Finding Points (x, y)',
            explanation: 'f_x = 0 \\implies 3x(2 + x) = 0 \\implies x = 0 \\text{ ya } x = -2.\\newline f_y = 0 \\implies -2y = 0 \\implies y = 0.\\newline \\text{Toh humare paas 2 stationary points mile: } P_1(0, 0) \\text{ aur } P_2(-2, 0).',
            marksTag: '[0.5 Mark]'
          },
          {
            stepTitle: 'Step 4: Second Order Partial Derivatives (r, s, t nikalna)',
            explanation: 'Dekho: r kya hai? r = ∂²f/∂x² = ∂/∂x(fx). fx = 6x + 3x² ko x se differentiate karo: r = 6 + 6x.\ns kya hai? s = ∂²f/∂x∂y = ∂/∂x(fy). fy = -2y ko x se differentiate karo: x hai hi nahi, toh s = 0.\nt kya hai? t = ∂²f/∂y² = ∂/∂y(fy). fy = -2y ko y se differentiate karo: t = -2.',
            mathLatex: 'r = \\frac{\\partial^2 f}{\\partial x^2} = 6 + 6x, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y} = 0, \\quad t = \\frac{\\partial^2 f}{\\partial y^2} = -2',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 5: Testing Point P₁(0, 0) for Maxima/Minima',
            explanation: 'Point (0, 0) par values calculate karte hain:\nr = 6 + 6(0) = 6 + 0 = 6.\ns = 0.\nt = -2.\nAb rt - s² calculate karo:\nrt - s² = (6)(-2) - (0)² = -12 - 0 = -12 < 0.\nChunki rt - s² < 0 (negative), isliye (0, 0) ek SADDLE POINT hai (na maxima, na minima).',
            mathLatex: 'rt - s^2 = (6)(-2) - 0^2 = -12 < 0 \\implies (0, 0) \\text{ is a Saddle Point.}',
            marksTag: '[0.5 Mark]'
          },
          {
            stepTitle: 'Step 6: Testing Point P₂(-2, 0) for Maxima/Minima',
            explanation: 'Point (-2, 0) par values calculate karte hain:\nr = 6 + 6(-2) = 6 - 12 = -6.\ns = 0.\nt = -2.\nAb rt - s² calculate karo:\nrt - s² = (-6)(-2) - (0)² = +12 - 0 = +12 > 0.\nChunki rt - s² > 0 aur r = -6 < 0 (negative), isliye (-2, 0) par function ka MAXIMUM aayega!',
            mathLatex: 'rt - s^2 = (-6)(-2) - 0 = +12 > 0 \\quad \\text{and} \\quad r = -6 < 0 \\implies \\text{Maximum at } (-2, 0)',
            marksTag: '[0.5 Mark]'
          },
          {
            stepTitle: 'Step 7: Maximum Value Calculate Karna',
            explanation: 'Original function f(x, y) = 3x² - y² + x³ me x = -2 aur y = 0 put karo:',
            mathLatex: 'f_{\\max} = 3(-2)^2 - (0)^2 + (-2)^3 = 3(4) - 0 + (-8) = 12 - 8 = 4',
            marksTag: '[0.5 Mark]'
          }
        ],
        finalAnswer: '(0, 0) is a Saddle Point. Maximum value of function is 4, which occurs at (-2, 0).',
        examTip: 'Examiner checks if you explicitly wrote "Since rt - s² < 0 at (0, 0), it is a Saddle Point" and calculated f_max = 4. Har calculation dikhana compulsory hai.'
      },
      {
        paper: 'Winter 2025 Q2(a) [4 Marks]',
        marks: 4,
        questionText: 'Examine the function f(x, y) = x^2 - xy + 2y^2 - 5x + 6y - 9 for maxima or minima.',
        latexQuestion: 'f(x, y) = x^2 - xy + 2y^2 - 5x + 6y - 9',
        given: 'f(x, y) = x^2 - xy + 2y^2 - 5x + 6y - 9',
        toFind: 'Stationary points, values of r, s, t, and extreme values.',
        formula: 'f_x = 0, \\; f_y = 0 \\implies (a, b); \\quad r = f_{xx}, \\; s = f_{xy}, \\; t = f_{yy}; \\quad \\Delta = rt - s^2',
        formulaExplanation: 'First derivative zero karke critical point (a, b) nikaalo. Phir second derivative r = ∂²f/∂x², s = ∂²f/∂x∂y, t = ∂²f/∂y² se condition rt - s² check karo.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: First Partial Derivatives fx and fy',
            explanation: 'fx nikalte waqt y constant, fy nikalte waqt x constant:\n∂/∂x(x² - xy + 2y² - 5x + 6y - 9) = 2x - y + 0 - 5 + 0 - 0 = 2x - y - 5.\n∂/∂y(x² - xy + 2y² - 5x + 6y - 9) = 0 - x + 4y - 0 + 6 - 0 = -x + 4y + 6.',
            mathLatex: 'f_x = 2x - y - 5 = 0, \\qquad f_y = -x + 4y + 6 = 0',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Solving Simultaneous Equations for Stationary Point',
            explanation: 'Equation (1): 2x - y = 5 => y = 2x - 5.\nEquation (2) me put karo: -x + 4(2x - 5) + 6 = 0 => -x + 8x - 20 + 6 = 0 => 7x - 14 = 0 => 7x = 14 => x = 2.\nAb y = 2(2) - 5 = 4 - 5 = -1.\nToh stationary point mila: (2, -1).',
            mathLatex: 'x = 2, \\quad y = -1 \\implies \\text{Stationary point is } (2, -1)',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Calculating Second Order Derivatives (r, s, t)',
            explanation: 'r = ∂/∂x(fx) = ∂/∂x(2x - y - 5) = 2.\ns = ∂/∂y(fx) = ∂/∂y(2x - y - 5) = -1.\nt = ∂/∂y(fy) = ∂/∂y(-x + 4y + 6) = 4.\nNotice karo: Yahan r, s, t constant numbers hain, point put karne ki bhi zarurat nahi!',
            mathLatex: 'r = 2, \\quad s = -1, \\quad t = 4',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 4: Discriminant Test (rt - s²) and Minimum Value',
            explanation: 'rt - s² = (2)(4) - (-1)² = 8 - 1 = 7 > 0.\nChunki rt - s² > 0 aur r = 2 > 0 (positive), isliye function ka MINIMUM point (2, -1) par hoga!\nMinimum value:\nf(2, -1) = 2² - (2)(-1) + 2(-1)² - 5(2) + 6(-1) - 9 = 4 + 2 + 2(1) - 10 - 6 - 9 = 8 - 25 = -17.',
            mathLatex: 'rt - s^2 = 7 > 0 \\text{ and } r = 2 > 0 \\implies f_{\\min} = -17',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'Function has a Minimum at point (2, -1) with Minimum Value = -17.',
        examTip: 'Negative numbers ka square hamesha positive hota hai: (-1)² = +1, isliye rt - s² = 8 - 1 = 7. Sign mistake mat karna!'
      },
      {
        paper: 'Summer 2025 Q2(d) & Winter 2025 Q3(d) [4 Marks]',
        marks: 4,
        questionText: 'Use Lagrange\'s undetermined multiplier method to find the extreme values of f(x, y) = x^2 + 2y^2 subject to constraint x + y = 6.',
        latexQuestion: 'f(x, y) = x^2 + 2y^2 \\quad \\text{subject to} \\quad x + y - 6 = 0',
        given: 'Objective function f(x, y) = x^2 + 2y^2, Constraint equation φ(x, y) = x + y - 6 = 0.',
        toFind: 'Extreme value (minimum material / minimum value) using Lagrange\'s Multiplier λ.',
        formula: 'L(x, y, \\lambda) = f(x, y) + \\lambda \\cdot \\phi(x, y); \\quad \\frac{\\partial L}{\\partial x} = 0, \\; \\frac{\\partial L}{\\partial y} = 0, \\; \\frac{\\partial L}{\\partial \\lambda} = 0',
        formulaExplanation: 'Lagrange method me hum objective function f aur constraint φ ko ek naye parameter λ (Lagrange Multiplier) ke sath jodkar ek auxiliary function L banate hain. Jab L ka gradient 0 hota hai, tab extreme point milta hai.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Construct the Auxiliary Lagrange Function L',
            explanation: 'L(x, y, λ) = f(x, y) + λ * φ(x, y) likho:',
            mathLatex: 'L(x, y, \\lambda) = (x^2 + 2y^2) + \\lambda(x + y - 6)',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Differentiate Partially w.r.t x, y, and λ',
            explanation: '∂L/∂x = 2x + λ(1) = 2x + λ = 0 => λ = -2x.\n∂L/∂y = 4y + λ(1) = 4y + λ = 0 => λ = -4y.\n∂L/∂λ = x + y - 6 = 0.',
            mathLatex: '\\frac{\\partial L}{\\partial x} = 2x + \\lambda = 0 \\implies \\lambda = -2x, \\qquad \\frac{\\partial L}{\\partial y} = 4y + \\lambda = 0 \\implies \\lambda = -4y',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Eliminate λ and Find Relation between x and y',
            explanation: 'Dono equations me λ barabar hai, isliye:\n-2x = -4y => 2x = 4y => x = 2y.',
            mathLatex: '-2x = -4y \\implies x = 2y',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 4: Substitute in Constraint & Find Extreme Value',
            explanation: 'Constraint tha: x + y = 6. x ki jagah 2y put karo:\n2y + y = 6 => 3y = 6 => y = 2.\nToh x = 2(2) = 4.\nPoint mila: (4, 2).\nAb f(4, 2) nikalte hain:\nf(4, 2) = 4² + 2(2)² = 16 + 2(4) = 16 + 8 = 24.',
            mathLatex: 'x = 4, \\; y = 2 \\implies f_{\\text{extreme}} = 4^2 + 2(2)^2 = 16 + 8 = 24',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'Extreme value is 24 at point (4, 2).',
        examTip: 'Winter 2025 me bilkul same question x² + y² subject to x + y = 4 pucha tha, jisme x = y = 2 aur f_extreme = 8 aata hai!'
      },
      {
        paper: 'Summer 2026 Q3(a) [4 Marks]',
        marks: 4,
        questionText: 'Using the method of Lagrange\'s multiplier, find the maximum value of the function f(x, y) = xy subject to constraint x + y - 500 = 0.',
        latexQuestion: 'f(x, y) = xy \\quad \\text{subject to} \\quad x + y - 500 = 0',
        given: 'Objective function f(x, y) = xy, Constraint x + y - 500 = 0.',
        toFind: 'Maximum value of product xy when sum is 500.',
        formula: 'L(x, y, \\lambda) = xy + \\lambda(x + y - 500)',
        formulaExplanation: 'L ko x aur y ke respect me differentiate karke λ ki do values nikalo, unhe equate karke x aur y ka relation find karo.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Set up Lagrange Auxiliary Equation',
            explanation: 'L(x, y, λ) = xy + λ(x + y - 500).',
            mathLatex: 'L = xy + \\lambda(x + y - 500)',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Partial Derivatives Equated to Zero',
            explanation: '∂L/∂x = y + λ(1) = 0 => λ = -y.\n∂L/∂y = x + λ(1) = 0 => λ = -x.',
            mathLatex: '\\frac{\\partial L}{\\partial x} = y + \\lambda = 0 \\implies \\lambda = -y, \\qquad \\frac{\\partial L}{\\partial y} = x + \\lambda = 0 \\implies \\lambda = -x',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Equating λ expressions',
            explanation: '-y = -x => x = y.',
            mathLatex: 'x = y',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 4: Putting in constraint and computing Max Value',
            explanation: 'x + y = 500 => x + x = 500 => 2x = 500 => x = 250, y = 250.\nMaximum value = f(250, 250) = 250 * 250 = 62,500.',
            mathLatex: 'x = 250, \\; y = 250 \\implies f_{\\max} = 250 \\times 250 = 62500',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'Maximum value is 62,500 when x = 250 and y = 250.',
        examTip: 'Jab sum constant ho, product tabhi maximum hota hai jab dono parts equal hon (x = y = 250).'
      },
      {
        paper: 'Summer 2025 Q1(a) [2 Marks]',
        marks: 2,
        questionText: 'If f(x, y) = x^2 - 2xy, find ∂²f / (∂y ∂x).',
        latexQuestion: 'f(x, y) = x^2 - 2xy, \\quad \\text{find } \\frac{\\partial^2 f}{\\partial y \\partial x}',
        given: 'f(x, y) = x^2 - 2xy',
        toFind: 'Second order mixed partial derivative ∂²f / (∂y ∂x).',
        formula: '\\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left( \\frac{\\partial f}{\\partial x} \\right)',
        formulaExplanation: 'Symbol ∂²f/(∂y ∂x) ka matlab: Pehle f ko x ke respect me differentiate karo (y ko constant maankar), fir jo answer aaye use y ke respect me differentiate karo (x ko constant maankar).',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: First Partial Derivative w.r.t x',
            explanation: 'Differentiating f partially w.r.t x (treating y as constant):\n∂/∂x(x²) = 2x, aur ∂/∂x(-2xy) = -2y(1) = -2y.',
            mathLatex: '\\frac{\\partial f}{\\partial x} = 2x - 2y',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Differentiating Result w.r.t y',
            explanation: 'Differentiating (2x - 2y) partially w.r.t y (treating x as constant):\n∂/∂y(2x) = 0 (kyunki 2x constant hai), aur ∂/∂y(-2y) = -2(1) = -2.',
            mathLatex: '\\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}(2x - 2y) = 0 - 2 = -2',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: '\\frac{\\partial^2 f}{\\partial y \\partial x} = -2',
        examTip: 'Bracket me "(Treating y as constant)" aur "(Treating x as constant)" likhna examiner ko impress karta hai aur full 2 marks dilata hai.'
      }
    ]
  },

  // =========================================================================
  // UNIT 2: MATRICES (MSBTE Summer 2025, Winter 2025, Summer 2026)
  // =========================================================================
  2: {
    unitId: 2,
    unitName: 'MATRICES',
    marksWeightage: '16 - 20 Marks (out of 70)',
    frequentlyRepeatedPatterns: [
      'Eigenvalues of 2x2 matrix using characteristic equation |A - λI| = 0',
      'Eigenvectors corresponding to each eigenvalue (A - λI)X = 0',
      'Rank of matrix using determinant method and Echelon form',
      'Normal Form [Ir 0; 0 0] using elementary row and column operations',
      'Consistency of system of non-homogeneous equations AX = B'
    ],
    paperQuestions: [
      {
        paper: 'Summer 2025 Q1(c) & Summer 2026 Q1(c) [2 Marks / 4 Marks]',
        marks: 2,
        questionText: 'Find the eigenvalues of matrix A = [[2, 1], [4, 5]].',
        latexQuestion: 'A = \\begin{bmatrix} 2 & 1 \\\\ 4 & 5 \\end{bmatrix}',
        given: 'Square matrix of order 2x2: A = [[2, 1], [4, 5]].',
        toFind: 'Eigen values λ₁ and λ₂ of matrix A.',
        formula: '|A - \\lambda I| = 0 \\implies \\lambda^2 - S_1 \\lambda + S_2 = 0',
        formulaExplanation: 'S₁ matlab Trace of A (diagonal elements ka sum: a₁₁ + a₂₂), aur S₂ matlab Determinant of A (|A| = a₁₁ a₂₂ - a₁₂ a₂₁). Is quadratic equation ke roots hi eigenvalues hote hain.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Write Characteristic Equation',
            explanation: 'Formula likho: |A - λI| = 0:',
            mathLatex: '|A - \\lambda I| = \\begin{vmatrix} 2 - \\lambda & 1 \\\\ 4 & 5 - \\lambda \\end{vmatrix} = 0',
            marksTag: '[0.5 Mark]'
          },
          {
            stepTitle: 'Step 2: Expand the Determinant',
            explanation: 'Cross multiply karo:\n(2 - λ)(5 - λ) - (1)(4) = 0\n=> 10 - 2λ - 5λ + λ² - 4 = 0\n=> λ² - 7λ + 6 = 0.',
            mathLatex: '\\lambda^2 - 7\\lambda + 6 = 0',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Factorize Quadratic Equation and Find Roots',
            explanation: 'Aise do numbers dhoondo jinka product +6 ho aur sum -7 ho:\nWo numbers hain -6 aur -1!\n(λ - 6)(λ - 1) = 0\n=> λ = 6 ya λ = 1.',
            mathLatex: '(\\lambda - 6)(\\lambda - 1) = 0 \\implies \\lambda_1 = 1, \\quad \\lambda_2 = 6',
            marksTag: '[0.5 Mark]'
          }
        ],
        finalAnswer: 'Eigen values are \\lambda = 1 \\text{ and } \\lambda = 6.',
        examTip: 'Verification Shortcut: Trace = 2 + 5 = 7. Sum of eigenvalues = 1 + 6 = 7. Dono match kar rahe hain, answer 100% correct hai!'
      },
      {
        paper: 'Winter 2025 Q1(d) & Q5(a) [6 Marks]',
        marks: 6,
        questionText: 'Find the eigenvalues and eigenvectors for matrix A = [[-10, 6], [-9, 5]].',
        latexQuestion: 'A = \\begin{bmatrix} -10 & 6 \\\\ -9 & 5 \\end{bmatrix}',
        given: 'Matrix A = [[-10, 6], [-9, 5]].',
        toFind: 'Eigen values λ, and corresponding Eigen vectors X = [x₁, x₂]ᵀ for each eigenvalue.',
        formula: '|A - \\lambda I| = 0 \\quad \\text{and} \\quad (A - \\lambda I)X = 0',
        formulaExplanation: 'Pehle characteristic equation se eigenvalues λ nikaalo. Fir har λ ke liye matrix equation (A - λI)X = 0 solve karke non-zero vector X nikalo.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Characteristic Equation & Eigenvalues',
            explanation: '|A - λI| = 0:\n(-10 - λ)(5 - λ) - (6)(-9) = 0\n=> -50 + 10λ - 5λ + λ² + 54 = 0\n=> λ² + 5λ + 4 = 0\n=> (λ + 1)(λ + 4) = 0\n=> λ₁ = -1, λ₂ = -4.',
            mathLatex: '\\lambda^2 + 5\\lambda + 4 = 0 \\implies \\lambda = -1, \\; -4',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 2: Eigenvector for λ₁ = -1',
            explanation: '(A - λI)X = 0 me λ = -1 put karo:\n[-10 - (-1)] x₁ + 6 x₂ = 0 => -9x₁ + 6x₂ = 0 => 3(-3x₁ + 2x₂) = 0 => 3x₁ = 2x₂.\nRatio: x₁ / 2 = x₂ / 3 = k₁.\nIsliye Eigenvector X₁ = [2, 3]ᵀ (jab k₁ = 1).',
            mathLatex: '\\begin{bmatrix} -9 & 6 \\\\ -9 & 6 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -3x_1 + 2x_2 = 0 \\implies X_1 = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 3: Eigenvector for λ₂ = -4',
            explanation: '(A - λI)X = 0 me λ = -4 put karo:\n[-10 - (-4)] x₁ + 6 x₂ = 0 => -6x₁ + 6x₂ = 0 => x₁ - x₂ = 0 => x₁ = x₂.\nRatio: x₁ / 1 = x₂ / 1 = k₂.\nIsliye Eigenvector X₂ = [1, 1]ᵀ (jab k₂ = 1).',
            mathLatex: '\\begin{bmatrix} -6 & 6 \\\\ -9 & 9 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies x_1 = x_2 \\implies X_2 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}',
            marksTag: '[2 Marks]'
          }
        ],
        finalAnswer: 'Eigenvalues: \\lambda_1 = -1, \\lambda_2 = -4. Corresponding Eigenvectors: X_1 = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}, \\; X_2 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}.',
        examTip: 'Eigenvector me k common multiplier hota hai. Answer sheet me hamesha simplest integers [2, 3]ᵀ likho.'
      },
      {
        paper: 'Winter 2025 Q1(c) & Summer 2026 Q1(d) [2 Marks / 4 Marks]',
        marks: 4,
        questionText: 'Find the rank of matrix A = [[1, 2, 3], [2, 4, 6], [3, 7, 10]].',
        latexQuestion: 'A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 7 & 10 \\end{bmatrix}',
        given: '3x3 Matrix A.',
        toFind: 'Rank of matrix A denoted by ρ(A).',
        formula: '\\rho(A) = \\text{Number of non-zero rows in Echelon form}',
        formulaExplanation: 'Rank matlab matrix mein kitni independent rows hain. Echelon form me convert karne par jitni rows zero nahi hoti, wahi rank hoti hai.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Elementary Row Transformation to make below first element zero',
            explanation: 'R₂ -> R₂ - 2R₁:\nR₂ row: [2 - 2(1), 4 - 2(2), 6 - 2(3)] = [0, 0, 0].\nR₃ -> R₃ - 3R₁:\nR₃ row: [3 - 3(1), 7 - 3(2), 10 - 3(3)] = [0, 7 - 6, 10 - 9] = [0, 1, 1].',
            mathLatex: 'A \\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 1 & 1 \\end{bmatrix}',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 2: Swap R₂ and R₃ for standard Echelon Form',
            explanation: 'Zero row hamesha bottom me honi chahiye. R₂ <-> R₃ swap karo:',
            mathLatex: 'A \\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Count Non-Zero Rows',
            explanation: 'Row 1 non-zero hai [1, 2, 3].\nRow 2 non-zero hai [0, 1, 1].\nRow 3 completely zero hai [0, 0, 0].\nTotal non-zero rows = 2. Isliye Rank = 2.',
            mathLatex: '\\text{Number of non-zero rows} = 2 \\implies \\rho(A) = 2',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: '\\rho(A) = 2',
        examTip: 'Determinant check shortcut: |A| = 1(40 - 42) - 2(20 - 18) + 3(14 - 12) = -2 - 4 + 6 = 0. Chunki 3x3 determinant 0 hai, rank 3 nahi ho sakti, isliye rank = 2!'
      },
      {
        paper: 'Winter 2025 Q3(c) & Summer 2025 Q4(a) [4 Marks]',
        marks: 4,
        questionText: 'Determine the value of λ for which the system of equations 3x + 2y + 4z = 3, x + y + z = λ, 5x + 4y + 6z = 15 is consistent, and find its solution.',
        latexQuestion: '\\begin{cases} 3x + 2y + 4z = 3 \\\\ x + y + z = \\lambda \\\\ 5x + 4y + 6z = 15 \\end{cases}',
        given: 'Linear non-homogeneous system in 3 variables.',
        toFind: 'Condition on λ for consistency (ρ(A) = ρ[A|B]) and the values of x, y, z.',
        formula: '\\text{Consistent if } \\rho(A) = \\rho[A|B]',
        formulaExplanation: 'Rouché-Capelli theorem ke anusaar, system tabhi consistent hota hai jab coefficient matrix A aur augmented matrix [A|B] ki rank bilkul barabar ho.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Write Augmented Matrix [A|B]',
            explanation: 'Equations ko rearrange karke Row 1 me x + y + z = λ rakho (leading 1 ke liye):',
            mathLatex: '[A|B] = \\begin{bmatrix} 1 & 1 & 1 & | & \\lambda \\\\ 3 & 2 & 4 & | & 3 \\\\ 5 & 4 & 6 & | & 15 \\end{bmatrix}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Elementary Row Operations',
            explanation: 'R₂ -> R₂ - 3R₁:\n[3 - 3, 2 - 3, 4 - 3 | 3 - 3λ] = [0, -1, 1 | 3 - 3λ].\nR₃ -> R₃ - 5R₁:\n[5 - 5, 4 - 5, 6 - 5 | 15 - 5λ] = [0, -1, 1 | 15 - 5λ].',
            mathLatex: '[A|B] \\sim \\begin{bmatrix} 1 & 1 & 1 & | & \\lambda \\\\ 0 & -1 & 1 & | & 3 - 3\\lambda \\\\ 0 & -1 & 1 & | & 15 - 5\\lambda \\end{bmatrix}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Eliminate Row 3 (R₃ -> R₃ - R₂)',
            explanation: 'R₃ row ban gayi:\n[0 - 0, -1 - (-1), 1 - 1 | (15 - 5λ) - (3 - 3λ)]\n= [0, 0, 0 | 12 - 2λ].',
            mathLatex: '[A|B] \\sim \\begin{bmatrix} 1 & 1 & 1 & | & \\lambda \\\\ 0 & -1 & 1 & | & 3 - 3\\lambda \\\\ 0 & 0 & 0 & | & 12 - 2\\lambda \\end{bmatrix}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 4: Consistency Condition (ρ(A) = ρ[A|B])',
            explanation: 'Notice karo: Matrix A ki last row [0, 0, 0] hai, toh ρ(A) = 2 hai.\nSystem consistent hone ke liye [A|B] ki bhi last row zero honi chahiye!\n12 - 2λ = 0 => 2λ = 12 => λ = 6.\nJab λ = 6 hoga, tab ρ(A) = ρ[A|B] = 2 < 3 (number of variables), jisse infinite solutions milenge.',
            mathLatex: '12 - 2\\lambda = 0 \\implies \\lambda = 6',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: '\\lambda = 6 for the system to be consistent. (Infinite solutions exist).',
        examTip: 'Hamesha Rouché-Capelli theorem ka naam quote karo: "System is consistent iff rank(A) = rank(A|B)".'
      }
    ]
  },

  // =========================================================================
  // UNIT 3: VECTORS AND TENSORS (MSBTE Summer 2025, Winter 2025, Summer 2026)
  // =========================================================================
  3: {
    unitId: 3,
    unitName: 'VECTORS AND TENSORS',
    marksWeightage: '14 - 16 Marks (out of 70)',
    frequentlyRepeatedPatterns: [
      'Moment of force about a point: M = r × F',
      'Work done by resultant of forces: W = F_total · d',
      'Perpendicular vectors condition: a · b = 0',
      'Angle between two vectors: cos θ = (a · b) / (|a| |b|)',
      'Area of parallelogram: |a × b|'
    ],
    paperQuestions: [
      {
        paper: 'Summer 2025 Q4(c) & Winter 2025 Q2(d) [4 Marks]',
        marks: 4,
        questionText: 'A force F = 2i + j - k acts at the point 3i - j - 2k. Find the moment of the force about the point 4i - j + k.',
        latexQuestion: '\\vec{F} = 2\\hat{i} + \\hat{j} - \\hat{k}, \\quad A(3, -1, -2), \\quad B(4, -1, 1)',
        given: 'Force vector F = 2i + j - k, acting at point A whose position vector is OA = 3i - j - 2k. Target point B about which moment is required is OB = 4i - j + k.',
        toFind: 'Moment vector M = r × F.',
        formula: '\\vec{M} = \\vec{r} \\times \\vec{F}, \\quad \\text{where } \\vec{r} = \\vec{BA} = \\vec{OA} - \\vec{OB}',
        formulaExplanation: 'Position vector r hamesha (Point of Action A) - (Point of Moment B) hota hai: r = OA - OB. Moment cross product determinant se nikalte hain.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Calculate Position Vector r = OA - OB',
            explanation: 'Galti se OB - OA mat karna! r = OA - OB hota hai:\nr = (3i - j - 2k) - (4i - j + k)\n= (3 - 4)i + (-1 - (-1))j + (-2 - 1)k\n= -1i + 0j - 3k.',
            mathLatex: '\\vec{r} = (3 - 4)\\hat{i} + (-1 + 1)\\hat{j} + (-2 - 1)\\hat{k} = -\\hat{i} + 0\\hat{j} - 3\\hat{k}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 2: Set up Cross Product Determinant M = r × F',
            explanation: 'Row 1 me unit vectors i, j, k. Row 2 me r ke components [-1, 0, -3]. Row 3 me F ke components [2, 1, -1]:',
            mathLatex: '\\vec{M} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & 0 & -3 \\\\ 2 & 1 & -1 \\end{vmatrix}',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Expand the Determinant Step by Step',
            explanation: 'i component: [0(-1) - (-3)(1)] = 0 - (-3) = +3.\n-j component: [(-1)(-1) - (-3)(2)] = 1 - (-6) = 1 + 6 = 7. (-j ke sath: -7j).\nk component: [(-1)(1) - (0)(2)] = -1 - 0 = -1.',
            mathLatex: '\\vec{M} = \\hat{i}(0 + 3) - \\hat{j}(1 + 6) + \\hat{k}(-1 - 0) = 3\\hat{i} - 7\\hat{j} - \\hat{k}',
            marksTag: '[2 Marks]'
          }
        ],
        finalAnswer: '\\vec{M} = 3\\hat{i} - 7\\hat{j} - \\hat{k}',
        examTip: 'Examiner checks r = OA - OB sign first. Agar OB - OA kiya toh pure answer ke signs ulte ho jaate hain aur 2 marks cut jaate hain.'
      },
      {
        paper: 'Summer 2025 Q4(d) [4 Marks]',
        marks: 4,
        questionText: 'A particle is displaced from a point whose position vector is 5i - 5j - 7k to the point 6i + 2j - 2k under the action of forces 10i - j + 11k, 4i + 5j + 6k, and -2i + j - 9k. Find the work done.',
        latexQuestion: 'W = \\vec{F} \\cdot \\vec{d}',
        given: 'Initial position A = 5i - 5j - 7k, Final position B = 6i + 2j - 2k. Three forces F1 = 10i - j + 11k, F2 = 4i + 5j + 6k, F3 = -2i + j - 9k.',
        toFind: 'Total Work Done W in scalar units.',
        formula: 'W = \\vec{F}_{\\text{total}} \\cdot \\vec{d}, \\quad \\text{where } \\vec{F}_{\\text{total}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3, \\; \\vec{d} = \\vec{r}_B - \\vec{r}_A',
        formulaExplanation: 'Physics rule: Total force sabhi forces ka vector sum hota hai. Displacement d = Final position - Initial position. Work done dono ka scalar dot product hota hai.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Find Resultant Force Vector F = F1 + F2 + F3',
            explanation: 'i, j, k components ko aapas me add karo:\ni: 10 + 4 - 2 = 12.\nj: -1 + 5 + 1 = 5.\nk: 11 + 6 - 9 = 8.',
            mathLatex: '\\vec{F} = (10 + 4 - 2)\\hat{i} + (-1 + 5 + 1)\\hat{j} + (11 + 6 - 9)\\hat{k} = 12\\hat{i} + 5\\hat{j} + 8\\hat{k}',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 2: Find Displacement Vector d = rB - rA',
            explanation: 'd = (6i + 2j - 2k) - (5i - 5j - 7k)\n= (6 - 5)i + (2 - (-5))j + (-2 - (-7))k\n= 1i + 7j + 5k.',
            mathLatex: '\\vec{d} = (6 - 5)\\hat{i} + (2 + 5)\\hat{j} + (-2 + 7)\\hat{k} = \\hat{i} + 7\\hat{j} + 5\\hat{k}',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 3: Calculate Dot Product W = F · d',
            explanation: 'Formula: (a₁ b₁ + a₂ b₂ + a₃ b₃):\nW = (12)(1) + (5)(7) + (8)(5)\n= 12 + 35 + 40 = 87 units.',
            mathLatex: 'W = (12)(1) + (5)(7) + (8)(5) = 12 + 35 + 40 = 87 \\text{ units}',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'Work Done = 87 units.',
        examTip: 'Work done is a SCALAR quantity. Final answer me i, j, k nahi hona chahiye!'
      },
      {
        paper: 'Winter 2025 Q1(f) & Summer 2026 Q1(e) [2 Marks]',
        marks: 2,
        questionText: 'If the vectors a = 2i - 3j + k and b = 3i - 4j + 2pk are perpendicular to each other, find the value of p.',
        latexQuestion: '\\vec{a} \\perp \\vec{b} \\implies \\vec{a} \\cdot \\vec{b} = 0',
        given: 'Two perpendicular vectors a = 2i - 3j + k and b = 3i - 4j + 2pk.',
        toFind: 'Unknown scalar parameter p.',
        formula: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = 0',
        formulaExplanation: 'Kyunki cos 90° = 0 hota hai, isliye do perpendicular vectors ka scalar dot product HAMESHA ZERO hota hai!',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Write Perpendicularity Condition',
            explanation: 'Since a and b are perpendicular, a · b = 0.',
            mathLatex: '(2\\hat{i} - 3\\hat{j} + \\hat{k}) \\cdot (3\\hat{i} - 4\\hat{j} + 2p\\hat{k}) = 0',
            marksTag: '[0.5 Mark]'
          },
          {
            stepTitle: 'Step 2: Multiply Components',
            explanation: '(2)(3) + (-3)(-4) + (1)(2p) = 0\n=> 6 + 12 + 2p = 0\n=> 18 + 2p = 0\n=> 2p = -18\n=> p = -18 / 2 = -9.',
            mathLatex: '6 + 12 + 2p = 0 \\implies 18 + 2p = 0 \\implies 2p = -18 \\implies p = -9',
            marksTag: '[1.5 Marks]'
          }
        ],
        finalAnswer: 'p = -9',
        examTip: 'Minus into minus plus hota hai: (-3)(-4) = +12. Yahan -12 likhne se bachein.'
      }
    ]
  },

  // =========================================================================
  // UNIT 4: NUMERICAL METHODS (MSBTE Summer 2025, Winter 2025, Summer 2026)
  // =========================================================================
  4: {
    unitId: 4,
    unitName: 'NUMERICAL DIFFERENTIATION & INTEGRATION',
    marksWeightage: '14 - 16 Marks (out of 70)',
    frequentlyRepeatedPatterns: [
      'Finding y\'(0) and y\'\'(0) from tabulated difference data',
      'Trapezoidal Rule: (h/2) [ (y₀ + y_n) + 2(sum of remaining) ]',
      'Simpson\'s 1/3rd Rule: (h/3) [ (y₀ + y_n) + 4(odd) + 2(even) ]',
      'Simpson\'s 3/8th Rule: (3h/8) [ (y₀ + y_n) + 3(non-multiples of 3) + 2(multiples of 3) ]'
    ],
    paperQuestions: [
      {
        paper: 'Summer 2025 Q5(a), Winter 2025 Q5(b), Summer 2026 Q6(b) [6 Marks - Repeated in ALL 3 Papers!]',
        marks: 6,
        questionText: 'Find y\'(0) and y\'\'(0) from the following data: x = [0, 1, 2, 3, 4, 5], y = [4, 8, 15, 7, 6, 2].',
        latexQuestion: 'x = [0, 1, 2, 3, 4, 5], \\quad y = [4, 8, 15, 7, 6, 2]',
        given: 'Discrete data table with step size h = x₁ - x₀ = 1 - 0 = 1.',
        toFind: 'First derivative y\'(0) and second derivative y\'\'(0) at initial point x = 0.',
        formula: 'y\'(x_0) = \\frac{1}{h}\\left( \\Delta y_0 - \\frac{1}{2}\\Delta^2 y_0 + \\frac{1}{3}\\Delta^3 y_0 - \\frac{1}{4}\\Delta^4 y_0 + \\frac{1}{5}\\Delta^5 y_0 \\right)',
        formulaExplanation: 'Kyunki x = 0 table ke shuruat me hai, isliye NEWTON\'S FORWARD DIFFERENCE formula use hota hai. Agar last point hota toh backward use hota.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Construct Forward Difference Table',
            explanation: 'Difference nikalte hain: Δy = y_{i+1} - y_i:\nΔy: [8 - 4 = 4], [15 - 8 = 7], [7 - 15 = -8], [6 - 7 = -1], [2 - 6 = -4].\nΔ²y: [7 - 4 = 3], [-8 - 7 = -15], [-1 - (-8) = 7], [-4 - (-1) = -3].\nΔ³y: [-15 - 3 = -18], [7 - (-15) = 22], [-3 - 7 = -10].\nΔ⁴y: [22 - (-18) = 40], [-10 - 22 = -32].\nΔ⁵y: [-32 - 40 = -72].',
            mathLatex: '\\Delta y_0 = 4, \\; \\Delta^2 y_0 = 3, \\; \\Delta^3 y_0 = -18, \\; \\Delta^4 y_0 = 40, \\; \\Delta^5 y_0 = -72',
            marksTag: '[3 Marks]'
          },
          {
            stepTitle: 'Step 2: Formula for First Derivative y\'(0)',
            explanation: 'h = 1 put karo formula me:\ny\'(0) = (1/1) [ 4 - (1/2)(3) + (1/3)(-18) - (1/4)(40) + (1/5)(-72) ]\n= 4 - 1.5 - 6 - 10 - 14.4\n= 4 - 31.9 = -27.9.',
            mathLatex: 'y\'(0) = 4 - 1.5 - 6 - 10 - 14.4 = -27.9',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 3: Formula for Second Derivative y\'\'(0)',
            explanation: 'Formula: y\'\'(x₀) = (1/h²) [ Δ²y₀ - Δ³y₀ + (11/12)Δ⁴y₀ - (5/6)Δ⁵y₀ ]:\n= (1/1²) [ 3 - (-18) + (11/12)(40) - (5/6)(-72) ]\n= 3 + 18 + 36.67 + 60 = 117.67.',
            mathLatex: 'y\'\'(0) = 3 + 18 + 36.67 + 60 = 117.67',
            marksTag: '[1.5 Marks]'
          }
        ],
        finalAnswer: 'y\'(0) = -27.9, \\quad y\'\'(0) = 117.67',
        examTip: 'Ye question MSBTE me Summer 2025, Winter 2025, aur Summer 2026 TEENO papers me exactly identical data ke sath pucha gaya hai! Iski values rat kar jao.'
      },
      {
        paper: 'Winter 2025 Q4(d) [4 Marks]',
        marks: 4,
        questionText: 'Calculate ∫₁⁵ (2/x) dx using Simpson\'s 1/3rd rule by dividing [1, 5] into 4 equal parts.',
        latexQuestion: 'I = \\int_1^5 \\frac{2}{x} \\, dx, \\quad n = 4',
        given: 'Lower limit a = 1, Upper limit b = 5, number of sub-intervals n = 4, f(x) = 2/x.',
        toFind: 'Numerical value of integral using Simpson\'s 1/3 rule.',
        formula: 'I = \\frac{h}{3} \\Big[ (y_0 + y_4) + 4(y_1 + y_3) + 2(y_2) \\Big]',
        formulaExplanation: 'h = (b - a)/n step size hota hai. Simpson\'s 1/3 me first aur last add hote hain, odd terms 4 se multiply hote hain, aur even terms 2 se multiply hote hain.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Calculate Step Size h and Values Table',
            explanation: 'h = (b - a) / n = (5 - 1) / 4 = 4 / 4 = 1.\nx values: x₀ = 1, x₁ = 2, x₂ = 3, x₃ = 4, x₄ = 5.\ny = 2/x values:\ny₀ = 2/1 = 2.0000\ny₁ = 2/2 = 1.0000\ny₂ = 2/3 = 0.6667\ny₃ = 2/4 = 0.5000\ny₄ = 2/5 = 0.4000',
            mathLatex: 'h = 1; \\quad y_0 = 2, \\; y_1 = 1, \\; y_2 = 0.6667, \\; y_3 = 0.5, \\; y_4 = 0.4',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 2: Grouping Terms according to Simpson\'s 1/3 Rule',
            explanation: 'X = y₀ + y₄ = 2.0000 + 0.4000 = 2.4000\nO (Odd) = y₁ + y₃ = 1.0000 + 0.5000 = 1.5000\nE (Even) = y₂ = 0.6667',
            mathLatex: 'X = 2.4, \\quad O = 1.5, \\quad E = 0.6667',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 3: Applying Formula',
            explanation: 'I = (h/3) [ X + 4O + 2E ]\n= (1/3) [ 2.4000 + 4(1.5000) + 2(0.6667) ]\n= (1/3) [ 2.4000 + 6.0000 + 1.3333 ]\n= (1/3) [ 9.7333 ] = 3.2444.',
            mathLatex: 'I = \\frac{1}{3}\\left[ 2.4 + 4(1.5) + 2(0.6667) \\right] = \\frac{9.7333}{3} \\approx 3.2444',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'I \\approx 3.2444',
        examTip: 'Simpson\'s 1/3rd rule sirf tabhi apply hota hai jab intervals n EVEN ho (jaise n = 2, 4, 6, 8). Yahan n = 4 even hai.'
      }
    ]
  },

  // =========================================================================
  // UNIT 5: LINEAR PROGRAMMING PROBLEMS (MSBTE Summer 2025, Winter 2025, Summer 2026)
  // =========================================================================
  5: {
    unitId: 5,
    unitName: 'LINEAR PROGRAMMING PROBLEMS',
    marksWeightage: '12 - 16 Marks (out of 70)',
    frequentlyRepeatedPatterns: [
      'Graphical method for 2 variables (corner point evaluation)',
      'Simplex Method with slack variables s1, s2',
      'Mathematical formulation of LPP from manufacturing production data'
    ],
    paperQuestions: [
      {
        paper: 'Summer 2025 Q6(c) [6 Marks]',
        marks: 6,
        questionText: 'Solve by graphical method: Maximize Z = 12x + 16y subject to 10x + 20y <= 120, 8x + 8y <= 80, x >= 0, y >= 0.',
        latexQuestion: '\\text{Maximize } Z = 12x + 16y \\quad \\text{s.t.} \\quad 10x + 20y \\le 120, \\; 8x + 8y \\le 80, \\; x, y \\ge 0',
        given: 'Objective function Z = 12x + 16y to be maximized under 2 linear inequalities in first quadrant (x, y >= 0).',
        toFind: 'Corner points of feasible region and point (x*, y*) giving maximum Z.',
        formula: '\\text{At corner points } (x_i, y_i), \\; Z_i = 12x_i + 16y_i',
        formulaExplanation: 'Corner Point Theorem: Linear objective function ka optimal solution feasible region ke kisi ek vertex (corner point) par hi lie karta hai.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Convert Inequalities to Equality Lines',
            explanation: 'Line 1: 10x + 20y = 120 => Divide by 10: x + 2y = 12.\nAt x = 0: 2y = 12 => y = 6. Point A(0, 6).\nAt y = 0: x = 12. Point (12, 0).\nLine 2: 8x + 8y = 80 => Divide by 8: x + y = 10.\nAt x = 0: y = 10. Point (0, 10).\nAt y = 0: x = 10. Point B(10, 0).',
            mathLatex: 'L_1: x + 2y = 12, \\qquad L_2: x + y = 10',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 2: Find Intersection Point of L1 and L2',
            explanation: 'Subtract L2 from L1:\n(x + 2y) - (x + y) = 12 - 10\n=> y = 2.\nAb x + y = 10 me y = 2 put karo: x + 2 = 10 => x = 8.\nIntersection point is C(8, 2).',
            mathLatex: 'y = 2, \\; x = 8 \\implies C(8, 2)',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 3: Feasible Region & Corner Points',
            explanation: 'Origin test (0, 0):\n10(0) + 20(0) = 0 <= 120 (True)\n8(0) + 8(0) = 0 <= 80 (True)\nToh feasible region origin ki taraf bounded hai: O(0, 0), A(0, 6), C(8, 2), B(10, 0).',
            mathLatex: '\\text{Corner Points: } O(0, 0), \\; A(0, 6), \\; C(8, 2), \\; B(10, 0)',
            marksTag: '[1 Mark]'
          },
          {
            stepTitle: 'Step 4: Evaluate Objective Function Z at Each Corner Point',
            explanation: 'At O(0, 0): Z = 12(0) + 16(0) = 0.\nAt A(0, 6): Z = 12(0) + 16(6) = 96.\nAt B(10, 0): Z = 12(10) + 16(0) = 120.\nAt C(8, 2): Z = 12(8) + 16(2) = 96 + 32 = 128.',
            mathLatex: 'Z(O) = 0, \\; Z(A) = 96, \\; Z(B) = 120, \\; Z(C) = 128',
            marksTag: '[1.5 Marks]'
          }
        ],
        finalAnswer: 'Maximum Z = 128 at x = 8, y = 2.',
        examTip: 'Table format me corner points aur Z values likho. Maximum value ko box me highlight karo.'
      },
      {
        paper: 'Winter 2025 Q6(c) & Summer 2026 Q6(c) [6 Marks]',
        marks: 6,
        questionText: 'Solve using Simplex method: Maximize Z = 3x + 2y subject to x + y <= 4, x - y <= 2, x, y >= 0.',
        latexQuestion: '\\text{Maximize } Z = 3x + 2y \\quad \\text{s.t.} \\quad x + y \\le 4, \\; x - y \\le 2, \\; x, y \\ge 0',
        given: 'Standard LPP with maximization objective and two <= constraints.',
        toFind: 'Optimal solution using Simplex algorithm tableau.',
        formula: 'Z - 3x - 2y - 0s_1 - 0s_2 = 0; \\quad \\text{Slack variables } s_1, s_2 \\ge 0',
        formulaExplanation: 'Inequalities <= ko equations me convert karne ke liye non-negative Slack variables s₁ aur s₂ add kiye jaate hain. Fir key column (most negative in Z-row) aur key row (minimum positive ratio) se pivot element dhoondhte hain.',
        stepByStepSolution: [
          {
            stepTitle: 'Step 1: Introduce Slack Variables s1 and s2',
            explanation: 'x + y + s₁ = 4\nx - y + s₂ = 2\nObjective function: Z - 3x - 2y - 0s₁ - 0s₂ = 0.\nInitial basic variables: s₁ = 4, s₂ = 2 with value of Z = 0.',
            mathLatex: '\\begin{cases} x + y + s_1 = 4 \\\\ x - y + s_2 = 2 \\\\ Z - 3x - 2y = 0 \\end{cases}',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 2: Initial Simplex Table & Pivot Element',
            explanation: 'Z-row coefficients: x is -3, y is -2. Most negative is -3 (x-column is key column).\nRatio test (RHS / key col):\nFor s₁: 4 / 1 = 4.\nFor s₂: 2 / 1 = 2 (minimum positive ratio!).\nToh s₂ leaves, x enters. Pivot element = 1 at (s₂ row, x col).',
            mathLatex: '\\text{Entering: } x, \\; \\text{Leaving: } s_2, \\; \\text{Pivot} = 1',
            marksTag: '[2 Marks]'
          },
          {
            stepTitle: 'Step 3: Row Operations to Update Tableau',
            explanation: 'New R₂(x) = Old R₂: [1, -1, 0, 1 | 2].\nNew R₁(s₁) = Old R₁ - New R₂(x):\n[1 - 1, 1 - (-1), 1 - 0, 0 - 1 | 4 - 2] = [0, 2, 1, -1 | 2].\nNew Z-row = Old Z + 3(New R₂):\n[-3 + 3(1), -2 + 3(-1), 0 + 0, 0 + 3(1) | 0 + 3(2)] = [0, -5, 0, 3 | 6].\nNext iteration: y enters (most negative -5 in Z-row). Ratio for s₁: 2 / 2 = 1. Pivot = 2.',
            mathLatex: 'y = 1, \\quad x = 3',
            marksTag: '[1.5 Marks]'
          },
          {
            stepTitle: 'Step 4: Final Solution Verification',
            explanation: 'At final iteration, all coefficients in Z-row are >= 0 (optimal condition reached):\nx = 3, y = 1.\nMaximum Z = 3(3) + 2(1) = 9 + 2 = 11.',
            mathLatex: 'Z_{\\max} = 3(3) + 2(1) = 11 \\quad \\text{at } x = 3, \\; y = 1',
            marksTag: '[1 Mark]'
          }
        ],
        finalAnswer: 'Optimal solution: x = 3, y = 1 with Maximum Z = 11.',
        examTip: 'Examiner checks table ratio column (Min Ratio = 2/1). Ratio column me divide by zero ya negative number kabhi nahi lete.'
      }
    ]
  }
};
