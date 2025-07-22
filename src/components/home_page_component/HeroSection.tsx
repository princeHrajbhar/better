// components/HomeLandingPage.tsx
import Image from 'next/image';
import styles from '@/styles/home_styles/HeroSection.module.scss';
import { FaClock } from 'react-icons/fa';

export default function HomeLandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundGradient}></div>
      
      <div className={styles.content}>
        <div className={styles.textContainer}>
          {/* "The first" text */}
          <p className={styles.subtitle}>
            The first
          </p>
          
          {/* Main Heading - Now all on one line */}
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>AI-powered</span>
            <span className={styles.whiteText}> Mortgage</span>
          </h1>
          
          {/* Description */}
          <p className={styles.description}>
            Our tech unlocks lower rates, higher chances of approval,
            and a lightning‑fast process from approval to closing. Over $100 billion funded.
          </p>
          
          {/* Button - No gradient */}
          <button className={styles.approvalButton}>
            Start my pre-approval
          </button>
          
          {/* Info with Icons - Fixed layout */}
          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <FaClock className={styles.icon} />
              <span>3 min | No hard credit check</span>
            </div>
        
          </div>
          
          {/* Image */}
          <div className={styles.imageWrapper}>
           <Image
  src="/ai-powered-fico.webp"
  alt="AI-powered Mortgage"
  width={0}      // Not needed if using class
  height={0}     // Not needed if using class
  className={styles.image}
  unoptimized    // Optional: ensures real image size is loaded
/>

          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
      <div className={styles.decorCircle3}></div>
    </div>
  );
}