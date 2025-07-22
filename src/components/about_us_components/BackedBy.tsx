// ./src/components/about_us_components/BackedBy.tsx
import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from '@/styles/about_us_styles/BackedBy.module.scss';

const logos = [
  {
    name: 'SoftBank',
    src: '/soft bank.png',
    alt: 'SoftBank',
    href: 'https://group.softbank/en/philosophy',
  },
  {
    name: 'Ally',
    src: '/ally.png',
    alt: 'Ally Financial',
    href: 'https://www.ally.com',
  },
  {
    name: 'Citi',
    src: '/citi.png',
    alt: 'Citi',
    href: 'https://www.citi.com',
  },
  {
    name: 'Ping An Bank',
    src: '/ping an bank.jpg',
    alt: 'Ping An Bank',
    href: 'https://bank.pingan.com/english/index.shtml',
  },
  {
    name: 'Kleiner Perkins',
    src: '/kleiner.png',
    alt: 'Kleiner Perkins',
    href: 'https://www.kpcb.com',
  },
  {
    name: 'Goldman Sachs',
    src: '/goldman sachs.png',
    alt: 'Goldman Sachs',
    href: 'https://www.goldmansachs.com',
  },
];

const BackedBy: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.heading}>Backed by</h2>
    <div className={styles.logosRow}>
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoWrapper}
        >
          {/* Replaced <img> with <Image /> */}
          <Image
            src={logo.src}
            alt={logo.alt}
            width={0} // Set width and height to 0 when using fill and responsive styling
            height={0} // This indicates that the parent (logoWrapper) will control the size
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Helps Next.js optimize for different viewports
            className={styles.logoImage}
            style={{ objectFit: 'contain' }} // Moved object-fit here for Image component
            fill // This makes the image fill its parent (logoWrapper)
            unoptimized={logo.src.endsWith('.jpg') || logo.src.endsWith('.png')} // Optional: if you have mixed image types and Next.js can't optimize all, or want to disable for specific external images
          />
        </a>
      ))}
    </div>
  </div>
);

export default BackedBy;