import React from 'react';
import styles from '@/styles/mortgage-welcome/Footer.module.scss';
import { Mail, Phone, CalendarDays } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Column 1: Logo and Description */}
          <div className={styles.column}>
            <h2 className={styles.logo}>Better</h2>
            <p className={styles.description}>
              Better Mortgage Corporation is a direct lender dedicated to providing a fast,
              transparent digital mortgage experience backed by superior customer support.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p><CalendarDays size={16} /> Schedule a conversation</p>
            <p><Mail size={16} /> hello@better.com</p>
            <p><Phone size={16} /> 415-523-8837</p>
          </div>

          {/* Column 3: Legal */}
          <div className={styles.column}>
            <h4>Legal</h4>
            <p>FAQ</p>
            <p>Resources</p>
            <p>NMLS Consumer Access</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Disclosures & Licensing</p>
            <p>Affiliated Business</p>
          </div>
        </div>

        {/* Separator */}
        <hr className={styles.separator} />

        {/* Footer Description */}
        <div className={styles.disclaimer}>
          <p>
            © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family
            of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC
            and Better Real Estate California Inc License #02164055 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement Services provides
            title insurance services; Better Connect, LLC dba Better Attorney Match provides real
            estate attorney connection services; and Better Inspect, LLC provides home inspection
            services. All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage
            Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New
            York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law
            License. Not available in all states. Equal Housing Lender. NMLS Consumer Access.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
