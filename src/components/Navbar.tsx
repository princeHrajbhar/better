'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Navbar.module.scss';
import { FaPhoneAlt, FaChevronRight, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu) {
        const menuRef = menuRefs.current[activeMenu];
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
      if (menuRefs.current[title] &&
          !menuRefs.current[title]?.contains(document.activeElement) &&
          !menuRefs.current[title]?.matches(':hover')) {
        setActiveMenu(null);
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setExpandedMobileMenu(null);
    }
  };

  const toggleMobileSubmenu = (title: string) => {
    setExpandedMobileMenu(expandedMobileMenu === title ? null : title);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>MyCompany</div>

          <div className={styles.desktopMenu}>
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
          <button 
            className={styles.mobileMenuToggle} 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
      >
        <div className={styles.mobileMenuHeader}>
          <div className={styles.logo}>MyCompany</div>
          <button 
            className={styles.mobileMenuClose}
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* <div className={styles.mobileMenuMainButton} onClick={toggleMobileMenu}>
          <div className={styles.mainMenuButton}>
            <span>Main Menu</span>
            <FaChevronDown className={styles.downArrow} />
          </div>
        </div> */}
        
        <div className={styles.mobileMenuItems}>
          {menuItems.map((item) => (
            <div key={item.title} className={styles.mobileMenuItem}>
              <button
                className={styles.mobileMenuButton}
                onClick={() => toggleMobileSubmenu(item.title)}
              >
                <span>{item.title}</span>
                <FaChevronDown className={`${styles.downArrow} ${expandedMobileMenu === item.title ? styles.rotated : ''}`} />
              </button>
              
              {expandedMobileMenu === item.title && (
                <div className={styles.mobileDropdown}>
                  {item.content.map((option) => (
                    <a
                      key={option}
                      href="#"
                      className={styles.mobileDropdownItem}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className={styles.mobileSignIn}>
            <button 
              className={styles.signIn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}