// MonthlyBreakdown.tsx
'use client';

import React, { useState } from 'react';
import styles from '@/styles/MortgageCalculator_styles/MonthlyBreakdown.module.scss';

const categories = [
  { label: 'Principal & interest', color: '#4caf50', value: 2234 },
  { label: 'Property taxes', color: '#2196f3', value: 265 },
  { label: 'Homeowners insurance', color: '#ff9800', value: 132 },
  { label: 'HOA fees', color: '#9c27b0', value: 132 },
  { label: 'Utilities', color: '#f44336', value: 100 },
];

const MonthlyBreakdown = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [amounts, setAmounts] = useState(categories.map((c) => c.value));

  const handleChange = (index: number, change: number) => {
    const newAmounts = [...amounts];
    newAmounts[index] = Math.max(0, newAmounts[index] + change);
    setAmounts(newAmounts);
  };

  const handleInput = (index: number, value: string) => {
    const newAmounts = [...amounts];
    newAmounts[index] = Number(value);
    setAmounts(newAmounts);
  };

  const total = amounts.reduce((acc, val) => acc + val, 0);

  return (
    <div className={styles.container}>
      {/* Column 1 */}
      <div className={styles.column}>
        <h4>Monthly payment breakdown</h4>
        <h2>${total.toLocaleString()}/mo</h2>
        <div className={styles.bars}>
          {categories.map((cat, i) => {
            const width = `${(amounts[i] / total) * 100}%`;

            return (
              <div
                key={i}
                className={styles.bar}
                style={{
                  width,
                  backgroundColor: cat.color,
                  // Remove these conditional border-radius properties
                  // borderTopLeftRadius: isFirst ? '20px' : '0',
                  // borderBottomLeftRadius: isFirst ? '20px' : '0',
                  // borderTopRightRadius: isLast ? '20px' : '0',
                  // borderBottomRightRadius: isLast ? '20px' : '0',
                }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {hoverIndex === i && (
                  <div className={styles.tooltip}>
                    <h5>{cat.label}</h5>
                    <p>This is a detailed description for {cat.label}.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2 */}
      <div className={styles.column}>
        <ul className={styles.bulletList}>
          {categories.map((cat, i) => (
            <li key={i} className={styles.bulletRow}>
              <span
                className={styles.bullet}
                style={{ backgroundColor: cat.color }}
              />
              {cat.label}
            </li>
          ))}
        </ul>
        <button className={styles.copyButton}>Copy Estimate link</button>
      </div>

      {/* Column 3 */}
      <div className={styles.column}>
        {amounts.map((value, i) => (
          <div key={i} className={styles.inputRow}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputDollar}>$</span>
              <input
                className={styles.input}
                type="number"
                value={value}
                onChange={(e) => handleInput(i, e.target.value)}
              />
              <div className={styles.incDec}>
                <button onClick={() => handleChange(i, 10)}>+</button>
                <button onClick={() => handleChange(i, -10)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyBreakdown;