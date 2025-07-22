import React from 'react';
import styles from '@/styles/about_us_styles/HowWeAreChanging.module.scss';

const HowWeAreChanging = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How we’re changing things</h2>
      <p className={styles.paragraph}>
        Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, 
        and mortgages account for $15 trillion. Yet home finance operates in the same way it has 
        for decades — through opaque systems and expensive intermediaries whose interests are 
        misaligned with consumers’.<br /><br />
        That’s why Better.com is redefining the homeownership process from the ground up. 
        We’re using technology to make it faster and more efficient, and humans to help make it 
        friendly and enjoyable.
      </p>
    </div>
  );
};

export default HowWeAreChanging;
