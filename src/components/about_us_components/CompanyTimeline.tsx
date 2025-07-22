// CompanyTimeline.tsx
"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/about_us_styles/CompanyTimeline.module.scss';

const timelineData = [
  {
    year: '2014',
    text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: '2015',
    text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: '2016',
    text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: '2017',
    text: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: '2018',
    text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: '2019',
    text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: '2021',
    text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
  },
  {
    year: '2022',
    text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: '2023',
    text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days..",
  },
  {
    year: 'Today',
    text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
  },
];

const CompanyTimeline = () => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeights, setLineHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((ref, index) => {
      if (ref && index < timelineData.length - 1) {
        return ref.offsetHeight + 40;
      }
      return 0;
    });
    setLineHeights(heights);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <h1 className={styles.heading}>Company Timeline</h1>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.marker}>
              <div className={styles.yearBubble}>{item.year}</div>
              {index < timelineData.length - 1 && (
                <div 
                  ref={el => { lineRefs.current[index] = el; }} // Fixed ref callback
                  className={styles.verticalLine}
                  style={{ height: lineHeights[index] ? `${lineHeights[index]}px` : '40px' }}
                ></div>
              )}
            </div>
            <div 
              ref={el => { contentRefs.current[index] = el; }} // Fixed ref callback
              className={`${styles.content} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.contentBox}>
                {item.text}
                {/* Added button to last card */}
                {index === timelineData.length - 1 && (
                  <button className={styles.getStartedButton}>
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default CompanyTimeline;