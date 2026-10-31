import { Unit, SubTopic } from '../types/math';
import { unit1SubTopics } from './units/unit1';
import { unit2SubTopics } from './units/unit2';
import { unit3SubTopics } from './units/unit3';
import { unit4SubTopics } from './units/unit4';
import { unit5SubTopics } from './units/unit5';

import { unitPYQData } from './pyqAnalysis';

export const syllabusUnits: Unit[] = [
  {
    id: 1,
    title: 'PARTIAL DIFFERENTIATION',
    code: 'UNIT 1',
    description: 'First & Second order derivatives, Euler Theorem, Maxima & Minima of 2 variables, and Lagrange Multipliers.',
    iconName: 'Divide',
    color: 'from-blue-600 to-indigo-600',
    subTopics: unit1SubTopics,
    pyqAnalysis: unitPYQData[1],
  },
  {
    id: 2,
    title: 'MATRICES',
    code: 'UNIT 2',
    description: 'Elementary transformations, Echelon & Normal forms, Rank, Linear systems consistency, and 2x2 Eigenvalues.',
    iconName: 'Grid',
    color: 'from-indigo-600 to-purple-600',
    subTopics: unit2SubTopics,
    pyqAnalysis: unitPYQData[2],
  },
  {
    id: 3,
    title: 'VECTORS AND TENSORS',
    code: 'UNIT 3',
    description: 'DRs & DCs, Vector algebra, Dot & Cross products, Scalar Triple Product, and Ground-level Tensors.',
    iconName: 'Compass',
    color: 'from-purple-600 to-pink-600',
    subTopics: unit3SubTopics,
    pyqAnalysis: unitPYQData[3],
  },
  {
    id: 4,
    title: 'NUMERICAL DIFFERENTIATION AND INTEGRATION',
    code: 'UNIT 4',
    description: 'Finite differences, Forward/Backward derivatives, Trapezoidal rule, Simpson 1/3, and Simpson 3/8 rules.',
    iconName: 'TrendingUp',
    color: 'from-amber-600 to-rose-600',
    subTopics: unit4SubTopics,
    pyqAnalysis: unitPYQData[4],
  },
  {
    id: 5,
    title: 'LINEAR PROGRAMMING PROBLEMS',
    code: 'UNIT 5',
    description: 'LPP formulation, Graphical Corner-Point method, and Simplex method tableau step-by-step.',
    iconName: 'PieChart',
    color: 'from-emerald-600 to-teal-700',
    subTopics: unit5SubTopics,
    pyqAnalysis: unitPYQData[5],
  },
];

// Flat list of all 32 sub-topics in exact order
export const allSubTopics: SubTopic[] = syllabusUnits.flatMap((u) => u.subTopics);

export const getSubTopicById = (id: string): SubTopic | undefined => {
  return allSubTopics.find((t) => t.id === id);
};

export const getAdjacentSubTopics = (currentId: string) => {
  const index = allSubTopics.findIndex((t) => t.id === currentId);
  return {
    prev: index > 0 ? allSubTopics[index - 1] : null,
    next: index < allSubTopics.length - 1 ? allSubTopics[index + 1] : null,
    currentIndex: index,
    total: allSubTopics.length,
  };
};

export const getUnitBySubTopicId = (subTopicId: string): Unit | undefined => {
  const unitId = Number(subTopicId.split('.')[0]);
  return syllabusUnits.find((u) => u.id === unitId);
};
