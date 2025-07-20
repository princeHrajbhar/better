// components/FooterSection.tsx
import React from 'react';
import styles from '@/styles/BetterOverview.module.scss'; // Ensure this path is correct if it's not components/FooterSection.module.scss

interface ColumnData {
  title: string;
  isClickable?: boolean;
  items: Array<{
    text: string;
    href?: string;
  }>;
}

const columns: ColumnData[] = [
  {
    title: 'Small Description', // This title is still in data but won't be rendered
    items: [
      { text: 'Better is a family of companies serving all your homeownership needs.' }, // This is the intro paragraph
      { text: `Better Mortgage: We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.` },
      { text: `Better Real Estate: Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.` },
      { text: `Better Cover: Shop, bundle, and save on insurance coverage for home, auto, life, and more.` },
      { text: `Better Inspect: Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.` },
      { text: `Better Settlement Services: Get transparent rates when you shop for title insurance all in one convenient place.` },
    ],
  },
  {
    title: 'Resources',
    isClickable: true,
    items: [
      { text: 'Home affordability calculator', href: '#' },
      { text: 'Mortgage calculator', href: '#' },
      { text: 'Free mortgage calculator', href: '#' },
      { text: 'Mortgage calculator with taxes', href: '#' },
      { text: 'Mortgage calculator with PMI', href: '#' },
      { text: 'Rent vs buy calculator', href: '#' },
      { text: 'HELOC payment calculator', href: '#' },
      { text: 'HELOC vs cash-out refinance calculator', href: '#' },
      { text: 'Buy a home', href: '#' },
      { text: 'Sell a home', href: '#' },
      { text: 'Get home inspection', href: '#' },
    ],
  },
  {
    title: 'Company',
    isClickable: true,
    items: [
      { text: 'About Us', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Media', href: '#' },
      { text: 'Partner With Us', href: '#' },
      { text: 'Learning center', href: '#' },
      { text: 'FAQs', href: '#' },
      { text: 'Investor Relations', href: '#' },
    ],
  },
  {
    title: 'Contact & Legal',
    isClickable: true,
    items: [
      { text: 'Contact Us', href: '#' },
      { text: 'hello@better.com', href: 'mailto:hello@better.com' },
      { text: '415-523-8837', href: 'tel:+14155238837' },
      { text: 'FAQ', href: '#' },
      { text: 'Glossary', href: '#' },
      { text: 'Legal', href: '#' },
      { text: 'NMLS Consumer Access', href: '#' },
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Use', href: '#' },
      { text: 'Disclosures & Licensing', href: '#' },
      { text: 'Affiliated Business', href: '#' },
      { text: 'Browser Disclaimer', href: '#' },
    ],
  },
];

const FooterSection: React.FC = () => {
  // Function to render the "Better X:" heading with "Better" word styled
  const renderPartiallyStyledHeading = (text: string) => {
    // Regex to capture "Better" and the rest of the heading (e.g., " Mortgage:")
    const match = text.match(/(Better)(.*):/); // Capture "Better" and " :", e.g., " Mortgage"
    if (match && match[1] === 'Better') {
      const betterWord = match[1]; // "Better"
      const restOfHeading = match[2]; // " Mortgage" or " Real Estate" etc.
      return (
        <span className={styles.companyHeading}>
          <span className={styles.greenBoldBetter}>{betterWord}</span>
          {restOfHeading}:
        </span>
      );
    }
    // Fallback if format doesn't match, though it should for these specific items
    return <span className={styles.companyHeading}>{text}</span>;
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.columnsWrapper}>
        {columns.map((column, colIndex) => (
          <div key={column.title} className={styles.footerColumn}>
            {/* Conditional rendering for column titles: hide "Small Description" */}
            {column.title !== 'Small Description' && (
              <h3 className={styles.columnTitle}>
                {column.title}
              </h3>
            )}
            <ul className={styles.columnList}>
              {column.items.map((item, itemIndex) => {
                // Special handling for the first "Small Description" column
                if (column.title === 'Small Description') {
                  if (itemIndex === 0) {
                    // This is the introductory paragraph for the column
                    return (
                      <li key={itemIndex} className={styles.listItem}>
                        <p className={styles.introDescriptionPara}>
                          {item.text}
                        </p>
                      </li>
                    );
                  } else {
                    // These are the "heading" followed by its "paragraph"
                    const parts = item.text.split(/:\s(.+)/); // Split "Heading:" and "Paragraph content"
                    const headingText = parts[0] + ':'; // "Better Mortgage:"
                    const paragraphContent = parts[1]; // "We can't wait to say..."

                    return (
                      <li key={itemIndex} className={styles.listItemStacked}>
                        <p className={styles.companyHeadingWrapper}>
                          {renderPartiallyStyledHeading(headingText)}
                        </p>
                        <p className={styles.companyDescriptionPara}>
                          {paragraphContent}
                        </p>
                      </li>
                    );
                  }
                } else {
                  // For other columns (Resources, Company, Contact & Legal), render as clickable links
                  return (
                    <li key={itemIndex} className={styles.listItem}>
                      {column.isClickable ? (
                        <a
                          href={item.href || '#'}
                          className={styles.clickableLink}
                          target={item.href?.startsWith('http') || item.href?.startsWith('mailto') || item.href?.startsWith('tel') ? '_blank' : '_self'}
                          rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.text}
                        </a>
                      ) : (
                        // Fallback for non-clickable if column.isClickable somehow false
                        <p className={styles.descriptionText}>
                          {item.text}
                        </p>
                      )}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;