'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Navbar.module.scss';
import { FaPhoneAlt, FaChevronRight } from 'react-icons/fa';


type MenuItem = {
  title: string;
  content: string[];
};

const menuItems: MenuItem[] = [
  {
    title: 'Buy',
    content: ['Home Purchase', 'Investment Property', 'Second Home'],
  },
  {
    title: 'Refinance',
    content: ['Rate Refinance', 'Cash-out Refinance', 'Student Loan Refinance'],
  },
  {
    title: 'HELOC',
    content: ['Line of Credit', 'Fixed Rate', 'Home Equity'],
  },
  {
    title: 'Rates',
    content: ['Current Rates', 'Interest Trends', 'Rate Calculator'],
  },
  {
    title: 'Better+',
    content: ['Insurance', 'Real Estate', 'Moving Services'],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu) {
        const menuRef = menuRefs.current[activeMenu];
        // Check if the click is outside the menu item and its dropdown
        if (menuRef && !menuRef.contains(event.target as Node)) {
          setActiveMenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  // Proper ref assignment without return value
  const setRef = (title: string) => (el: HTMLDivElement | null) => {
    menuRefs.current[title] = el;
  };

  const handleMouseLeave = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      // Only close if the mouse is truly outside the menu item and its dropdown
      if (menuRefs.current[title] &&
          !menuRefs.current[title]?.contains(document.activeElement) &&
          !menuRefs.current[title]?.matches(':hover')) { // Check if the element itself is not hovered
        setActiveMenu(null);
      }
    }, 100);
  };

  return (
    <nav className={styles.navbar}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>MyCompany</div>

        <div className={styles.menu}>
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={styles.menuItem}
              ref={setRef(item.title)}
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                setActiveMenu(item.title);
              }}
              onMouseLeave={() => handleMouseLeave(item.title)}
            >
              <button className={styles.menuButton}>{item.title}</button>
              {activeMenu === item.title && (
                <div
                  className={styles.dropdown}
                  // Keep dropdown open if mouse enters the dropdown itself
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                    setActiveMenu(item.title);
                  }}
                  onMouseLeave={() => handleMouseLeave(item.title)}
                >
                  {item.content.map((option) => (
                    <a
                      key={option}
                      href="#"
                      className={styles.dropdownItem}
                      onMouseEnter={() => setHoveredOption(option)}
                      onMouseLeave={() => setHoveredOption(null)}
                    >
                      <span>{option}</span>
                      {hoveredOption === option && (
                        // Corrected: Wrap FaChevronRight in a div and apply className to the div
                        <div className={styles.arrowIcon}>
                          <FaChevronRight />
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.phoneIcon}>
          <FaPhoneAlt />
        </div>
        <button className={styles.signIn}>Sign In</button>
      </div>
    </nav>
  );
}