"use client";
import React, { useState } from "react";
import styles from "@/styles/MortgageCalculator_styles/MortgageCalculator.module.scss";

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(444600);
  const [downPayment, setDownPayment] = useState<number>(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanLength, setLoanLength] = useState<number>(30);
  const [zipCode, setZipCode] = useState<string>("226002");

  const formatCurrency = (value: number): string =>
    `$ ${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Mortgage Calculator</h2>
      <p className={styles.description}>
        Free mortgage calculator to estimate your monthly mortgage payments with annual amortization. 
        <br/>
        Discover how all factors can affect your payment.
      </p>

      <div className={styles.topRow}>
        <div className={styles.column}>
          <div className={styles.inputContainer}>
            <span className={styles.floatingLabel}>Home price</span>
            <input
              className={styles.input}
              type="text"
              value={formatCurrency(homePrice)}
              readOnly
            />
          </div>
        </div>

        <div className={styles.columnCenter}>
          <span className={styles.label}>Monthly payment</span>
          <p className={styles.monthlyPayment}>$2,877/mo</p>
        </div>

        <div className={styles.columnRight}>
          <button className={styles.button}>Get pre-approved</button>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={50000}
          max={1000000}
          step={1000}
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
          className={styles.slider}
        />
      </div>

      <div className={styles.inputGrid}>
        <div className={styles.inputContainer}>
          <span className={styles.floatingLabel}>Zip code</span>
          <input
            className={styles.input}
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className={styles.rowWithSmallInput}>
          <div className={`${styles.inputContainer} ${styles.downPaymentInput}`}>
            <span className={styles.floatingLabel}>Down payment $</span>
            <input
              className={styles.input}
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
          <div className={`${styles.inputContainer} ${styles.percentInput}`}>
            <span className={styles.floatingLabel}>%</span>
            <input
              className={styles.input}
              type="number"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <span className={styles.floatingLabel}>Interest rate %</span>
          <input
            className={styles.input}
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div className={styles.inputContainer}>
          <span className={styles.floatingLabel}>Length of loan</span>
          <select
            className={styles.input}
            value={loanLength}
            onChange={(e) => setLoanLength(Number(e.target.value))}
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={25}>25 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;