// app/page.tsx
"use client";

import { useState } from 'react';
import styles from '@/styles/home_styles/Stories.module.scss';

export default function Home() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (name: string) => {
    setActiveButton(name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.videoContainer}>
          <video
            className={styles.videoPlayer}
            src="/reel.mp4"
            controls
            playsInline
          />
        </div>
        <div className={styles.buttonGroup}>
          {['Paul', 'Amanda', 'Tiara'].map((name) => (
            <button
              key={name}
              className={`${styles.personButton} ${
                activeButton === name ? styles.active : ''
              }`}
              onClick={() => handleButtonClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.contentCenter}>
          <h1 className={styles.title}>
            Find out why <br />
            we&apos;re better
          </h1>
          <button className={styles.storiesButton}>see all our stories</button>
          <div className={styles.trustBadge}>
            <div className={styles.starIcon}>★</div>
            <span>Trustpilot Excellent 4.4 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}