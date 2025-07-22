// ./src/components/mortgage-welcome_components/mortgage-welcome.tsx
'use client';

import React from 'react';
import styles from '@/styles/mortgage-welcome/mortgage-welcome.module.scss';
import { Phone, Home, DollarSign, Star, User } from 'lucide-react';

const MortgageWelcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.logo}>Better Mortgage</div>
        <div className={styles.contact}>
          <Phone className={styles.phoneIcon} />
          <div className={styles.helpText}>
            <div>Need help?</div>
            <a href="tel:9899012984">Call 9899012984</a>
          </div>
        </div>
      </div>

      {/* Updated section with centered line behind icon */}
      <div className={styles.centerLineContainer}>
        <div className={styles.separatorLine}></div>
        <div className={styles.iconCircle}>
          <Home size={28} color="white" />
        </div>
        <div className={styles.separatorLine}></div>
      </div>

      <h1 className={styles.greeting}>
        Hi, I&apos;m Betsy! {/* Fixed: changed ' to &apos; */}
        <br />
        What can I help you with?
      </h1>

      <div className={styles.buttons}>
        <button className={styles.optionButton}>
          <Home className={styles.buttonIcon} />
          Buying a home
        </button>
        <button className={styles.optionButton}>
          <DollarSign className={styles.buttonIcon} />
          Refinancing my mortgage
        </button>
        <button className={styles.optionButton}>
          <Star className={styles.buttonIcon} />
          Get cash from my home
        </button>
      </div>

      <div className={styles.stats}>
        <div>
          <strong>$100B</strong>
          <br />
          home loans funded entirely online
        </div>
        <div>
          <strong>400K</strong>
          <br />
          Customers who chose a Better Mortgage
        </div>
      </div>

      <div className={styles.unlockSection}>
        <div className={styles.unlockCard}>
          <div className={styles.unlockHeading}>
            After a few questions, you&apos;ll unlock: {/* Fixed: changed ' to &apos; */}
          </div>
          <div className={styles.unlockItem}>
            <User className={styles.unlockIcon} />
            <span>Custom mortgage rates</span>
          </div>
          <div className={styles.unlockItem}>
            <Star className={styles.unlockIcon} />
            <span>Exclusive offers</span>
          </div>
          <div className={styles.unlockItem}>
            <Home className={styles.unlockIcon} />
            <span>A personalized dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageWelcome;