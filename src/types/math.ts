export interface FormulaItem {
  name: string;
  latex: string;
  note?: string;
}

export interface EquationBreakdown {
  title: string;
  formulaLatex: string;
  kyunAisaHotaHai: string; // Deep conceptual "why does this happen"
  termExplanations: {
    symbol: string;
    symbolLatex?: string;
    meaning: string;
  }[];
  numericExample: {
    values: string;
    calculationLatex: string;
    result: string;
  };
}

export interface ExamWritingStep {
  stepNumber: number;
  stepHeading: string;
  whatToWrite: string;
  latexTemplate?: string;
  marksAllotted: string;
}

export interface ExamWritingTemplate {
  questionType: string;
  totalMarks: string;
  steps: ExamWritingStep[];
  examinerCatchphrase: string;
}

export interface PYQStep {
  stepTitle: string;
  explanation: string;
  mathLatex?: string;
  marksTag?: string;
}

export interface PYQQuestion {
  paper: string; // e.g., "Summer 2025 Q2(b)", "Winter 2025 Q4(e)", "Summer 2026 Q6(c)"
  marks: number;
  questionText: string;
  latexQuestion?: string;
  given: string; // What is given in the question
  toFind: string; // What is asked
  formula: string; // Formula used in KaTeX
  formulaExplanation: string; // Deep ground-level explanation of what each variable means (e.g. "r kya hai?")
  stepByStepSolution: PYQStep[];
  finalAnswer: string;
  examTip: string;
}

export interface SolvedExample {
  title: string;
  problem: string;
  latexProblem?: string;
  steps: {
    stepNumber: number;
    explanation: string;
    whyThisStep: string;
    mathLatex?: string;
  }[];
  finalAnswer: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  latex?: string;
  hint?: string;
  solution: string;
  solutionLatex?: string;
}

export interface SubTopic {
  id: string; // e.g., '1.1'
  title: string;
  unitId: number; // 1 to 5
  subtitle: string;
  
  // Section 1: "Ye Kya Hai?"
  yeKyaHai: {
    definition: string;
    analogy: string;
  };

  // Section 2: "Ground Level Se Samjho"
  groundLevel: {
    intro: string;
    points: {
      heading: string;
      content: string;
    }[];
  };

  // Section 3: "Formula Sheet"
  formulaSheet: {
    summary: string;
    formulas: FormulaItem[];
  };

  // Section 4: Deep Equation Breakdown ("Equation Samjho")
  equationBreakdown?: EquationBreakdown;

  // Section 5: "Exam Mein Kaise Likhein?" (How to write in Exam)
  examTemplate?: ExamWritingTemplate;

  // Section 6: Solved Examples (2-3 examples with "kyun kiya")
  solvedExamples: SolvedExample[];

  // Section 7: Shortcuts & Tricks
  shortcuts: {
    title: string;
    rule: string;
    mnemonic?: string;
    whenToUse: string;
    latexFormula?: string;
  }[];

  // Section 8: Practice Questions (3-5 with show solution toggle)
  practiceQuestions: PracticeQuestion[];

  // PYQ Highlight for this sub-topic if tested directly in uploaded papers
  pyqHighlight?: PYQQuestion;

  // Extras
  commonMistakes: string[];
  examTip: string;
}

export interface UnitPYQAnalysis {
  unitId: number;
  unitName: string;
  marksWeightage: string;
  frequentlyRepeatedPatterns: string[];
  paperQuestions: PYQQuestion[];
}

export interface Unit {
  id: number;
  title: string;
  code: string;
  description: string;
  iconName: string;
  color: string;
  subTopics: SubTopic[];
  pyqAnalysis?: UnitPYQAnalysis;
}
