// components/SimpleFooter.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from '@/styles/Footer.module.scss';

const SimpleFooter: React.FC = () => {
  const beforeSeparator = `
1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock...
  
2 Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation...

3 Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
  `;

  const afterSeparator = `
© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.

Better BMC operates under the name Better Mortgage Corporation in New York.

Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access

Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.

New York State Housing and Anti-Discrimination Notice

New York Standard Operating Procedures

Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice

Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.

Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.

Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.

Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.

Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.

Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.

Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act
  `;

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className={styles.icon} />
          </a>
        </div>
        <p className={styles.disclaimerText}>{beforeSeparator.trim()}</p>

        <div className={styles.separator}></div>

        <p className={styles.disclaimerText}>{afterSeparator.trim()}</p>
      </div>
    </footer>
  );
};

export default SimpleFooter;