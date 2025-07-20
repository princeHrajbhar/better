import React from 'react';
import Image from 'next/image';
import styles from '@/styles/home_styles/QnA.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.leftText}>
          Got questions?<br />We&apos;ve got answers
        </div>
        
        <div className={styles.rightButtons}>
          <button className={styles.navButton}>Our products</button>
          <button className={styles.navButton}>Calculators</button>
          <button className={styles.navButton}>Guides & FAQs</button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* First Column (1/3 width) */}
        <div className={styles.column1}>
          <div className={styles.contentBlock}>
            <h2 className={styles.heading}>How AI Mortgage Lending is Transforming the Home Loan Process</h2>
            <div className={styles.arrowCircle}>→</div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/1st.webp" 
              alt="AI Mortgage Lending" 
              layout="responsive"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
        </div>

        {/* Second Column (2/3 width) */}
        <div className={styles.column2}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>One Day Mortgage1</h2>
            <p className={styles.paragraph}>
              Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.1
            </p>
            <div className={styles.arrowCircle}>→</div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/2nd.webp" 
                alt="One Day Mortgage" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* --- NEW SECTION: Additional Cards with Swapped Dimensions --- */}
      <div className={styles.mainContent}>
        {/* Third Column (2/3 width) - Image left, text right */}
        <div className={styles.column2}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/3rd.webp" 
                alt="HELOC Access" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Better HELOC: Access Your Home Equity Instantly</h2>
            <p className={styles.paragraph}>
              Tap into your home&apos;s equity with our streamlined HELOC process. Get approved in minutes and access funds immediately with our digital-first approach.
            </p>
            <div className={styles.arrowCircle}>→</div>
          </div>
        </div>

        {/* Fourth Column (1/3 width) */}
        <div className={styles.column1}>
          <div className={styles.contentBlock}>
            <h2 className={styles.heading}>Refinance Simplified: Save Time & Money</h2>
            <div className={styles.arrowCircle}>→</div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/4th.webp" 
              alt="Refinance Simplified" 
              layout="responsive"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;