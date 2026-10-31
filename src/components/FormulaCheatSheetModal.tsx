import React, { useState } from 'react';
import { X, Zap, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { MathView } from './MathView';

interface FormulaCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaCheatSheetModal: React.FC<FormulaCheatSheetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'euler' | 'matrices' | 'eigen' | 'vectors' | 'simpson' | 'lpp'>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Engineering Maths – Exam Shortcuts Cheat Sheet
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sabse zyada marks dilane wale direct formulas aur 10-second tricks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 border-b border-slate-100 dark:border-slate-800 overflow-x-auto text-xs bg-slate-50/50 dark:bg-slate-900/50">
          {[
            { id: 'all', label: 'All Shortcuts' },
            { id: 'euler', label: "Euler's Theorem" },
            { id: 'matrices', label: 'Rank & Consistency' },
            { id: 'eigen', label: '2x2 Eigenvalues' },
            { id: 'vectors', label: 'Cross Product Trick' },
            { id: 'simpson', label: 'Simpson vs Trapezoidal' },
            { id: 'lpp', label: 'LPP & Simplex' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* 1. Euler's Theorem */}
          {(activeTab === 'all' || activeTab === 'euler') && (
            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-indigo-950 dark:text-indigo-200">
                  Euler's Theorem: 2-Step Verification & Modified Shortcut
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                Jab u = f(x, y) homogeneous ho degree n ka:
              </p>
              <MathView block math="x\frac{\partial u}{\\partial x} + y\frac{\partial u}{\\partial y} = n \\cdot u" />
              <MathView block math="x^2\\frac{\\partial^2 u}{\\partial x^2} + 2xy\\frac{\\partial^2 u}{\\partial x \\partial y} + y^2\\frac{\\partial^2 u}{\\partial y^2} = n(n - 1)u" />
              <div className="mt-3 p-2.5 rounded-lg bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
                <strong>⚡ Modified Euler 10-Second Shortcut:</strong> Agar u = sin⁻¹(z), cos⁻¹(z), ya tan⁻¹(z) ho:
                <div className="mt-1 font-mono">
                  x(∂u/∂x) + y(∂u/∂y) = n * [F(u) / F'(u)]
                </div>
                • For sin⁻¹(z): Answer = <strong>n * tan(u)</strong><br />
                • For cos⁻¹(z): Answer = <strong>-n * cot(u)</strong><br />
                • For tan⁻¹(z): Answer = <strong>(n/2) * sin(2u)</strong>
              </div>
            </div>
          )}

          {/* 2. Rank & Consistency Table */}
          {(activeTab === 'all' || activeTab === 'matrices') && (
            <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-purple-950 dark:text-purple-200">
                  Matrix Consistency: Rouche-Capelli Decision Table
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                Augmented matrix [A | B] reduce karne ke baad ranks compare karo (n = variables count):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-300 dark:border-slate-700 rounded-lg">
                  <thead className="bg-purple-100/80 dark:bg-purple-900/40 text-purple-900 dark:text-purple-200 font-semibold">
                    <tr>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Condition</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Consistency</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Type of Solution</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Exam Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="bg-rose-50/50 dark:bg-rose-950/20">
                      <td className="p-2 font-mono border border-slate-300 dark:border-slate-700">ρ(A) ≠ ρ(A|B)</td>
                      <td className="p-2 font-semibold text-rose-600">INCONSISTENT</td>
                      <td className="p-2">NO SOLUTION</td>
                      <td className="p-2">Row like [0 0 0 | 5] appears</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-slate-300 dark:border-slate-700">ρ(A) = ρ(A|B) = n</td>
                      <td className="p-2 font-semibold text-emerald-600">CONSISTENT</td>
                      <td className="p-2">UNIQUE SOLUTION</td>
                      <td className="p-2">Exact one value for x, y, z</td>
                    </tr>
                    <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                      <td className="p-2 font-mono border border-slate-300 dark:border-slate-700">ρ(A) = ρ(A|B) = r &lt; n</td>
                      <td className="p-2 font-semibold text-amber-600">CONSISTENT</td>
                      <td className="p-2">INFINITE SOLUTIONS</td>
                      <td className="p-2">Assume (n - r) variables = k</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. 2x2 Eigenvalues */}
          {(activeTab === 'all' || activeTab === 'eigen') && (
            <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-blue-950 dark:text-blue-200">
                  2×2 Eigenvalues & Eigenvectors Instant Formula
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                Kisi bhi 2×2 matrix ke liye bina determinant khole characteristic equation likho:
              </p>
              <MathView block math="\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-2">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Sum Check:</span>
                  <p className="font-mono mt-0.5">λ₁ + λ₂ = Trace = a₁₁ + a₂₂</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Product Check:</span>
                  <p className="font-mono mt-0.5">λ₁ · λ₂ = Determinant = ad - bc</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Vectors Cross Product Trick */}
          {(activeTab === 'all' || activeTab === 'vectors') && (
            <div className="p-4 rounded-xl border border-pink-200 dark:border-pink-900/60 bg-pink-50/40 dark:bg-pink-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-pink-950 dark:text-pink-200">
                  Cross Product Determinant Trick & Cyclic Memory Circle
                </h3>
              </div>
              <MathView block math="\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = \\hat{i}(a_2 b_3 - a_3 b_2) - \\hat{j}(a_1 b_3 - a_3 b_1) + \\hat{k}(a_1 b_2 - a_2 b_1)" />
              <div className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                <strong>Cyclic Wheel Rule:</strong> î → ĵ → k̂ → î<br />
                Clockwise = Positive (î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ)<br />
                Counter-clockwise = Negative (ĵ × î = -k̂, k̂ × ĵ = -î, î × k̂ = -ĵ)
              </div>
            </div>
          )}

          {/* 5. Trapezoidal vs Simpson */}
          {(activeTab === 'all' || activeTab === 'simpson') && (
            <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-amber-950 dark:text-amber-200">
                  Kab Kaunsa Rule Use Karein? (Trapezoidal vs Simpson 1/3 vs 3/8)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-300 dark:border-slate-700">
                  <thead className="bg-amber-100/80 dark:bg-amber-900/40 font-semibold text-amber-950 dark:text-amber-200">
                    <tr>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Rule</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Intervals Condition (n)</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Curve Degree</th>
                      <th className="p-2 border border-slate-300 dark:border-slate-700">Memory Formula</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-2 font-semibold">Trapezoidal</td>
                      <td className="p-2 font-mono text-emerald-600 font-semibold">Any n (Odd or Even)</td>
                      <td className="p-2">Degree 1 (Line)</td>
                      <td className="p-2 font-mono">(h/2) [ Ends + 2*(Rest) ]</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">Simpson's 1/3</td>
                      <td className="p-2 font-mono text-indigo-600 font-semibold">n MUST BE EVEN (2k)</td>
                      <td className="p-2">Degree 2 (Parabola)</td>
                      <td className="p-2 font-mono">(h/3) [ Ends + 4*(Odds) + 2*(Evens) ]</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">Simpson's 3/8</td>
                      <td className="p-2 font-mono text-purple-600 font-semibold">n MULTIPLE OF 3 (3k)</td>
                      <td className="p-2">Degree 3 (Cubic)</td>
                      <td className="p-2 font-mono">(3h/8) [ Ends + 3*(Non-3s) + 2*(3-multiples) ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 6. LPP & Simplex */}
          {(activeTab === 'all' || activeTab === 'lpp') && (
            <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 mb-2">
                <BookmarkCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-emerald-950 dark:text-emerald-200">
                  LPP Corner Point Checklist & Simplex Method Roadmap
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                    Graphical Method Checklist:
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    <li>1. Convert &le; to = and get Intercepts (x/a + y/b = 1).</li>
                    <li>2. Test (0,0) → True (towards origin), False (away).</li>
                    <li>3. Find all intersection vertices (Corner Points).</li>
                    <li>4. Table of Z at each corner → pick highest Z!</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                    Simplex Tableau Roadmap:
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    <li>1. Add Slack Variables (s1, s2 &ge; 0 with cost 0).</li>
                    <li>2. Key Col: Most POSITIVE in Cj - Zj.</li>
                    <li>3. Key Row: Smallest positive ratio θ = XB / Key Col.</li>
                    <li>4. Stop when ALL Cj - Zj &le; 0 (Optimal reached!).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Got it, Back to Learning
          </button>
        </div>

      </div>
    </div>
  );
};
