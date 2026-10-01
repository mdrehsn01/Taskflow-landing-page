import { useEffect, useRef, useState } from "react";
import { Collapse } from "bootstrap";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const closeMobileMenu = () => {
    if (window.innerWidth < 992 && navbarRef.current) {
      Collapse.getInstance(navbarRef.current)?.hide();
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg navbar-dark`}
      aria-label="Main navigation"
    >
      <div className="container">
        <a
          className={`${styles.brand} navbar-brand`}
          href="#home"
          onClick={closeMobileMenu}
        >
          TaskFlow
        </a>

        <button
           className={styles.menuToggle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#taskflowNavbar"
          aria-controls="taskflowNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          ref={navbarRef}
          className="collapse navbar-collapse"
          id="taskflowNavbar"
        >
          <ul className={`${styles.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0`}>
            {navItems.map(({ label, id }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`${styles.navLink} ${
                    activeSection === id ? styles.navLinkActive : ""
                  } nav-link`}
                  href={`#${id}`}
                  onClick={closeMobileMenu}
                  aria-current={activeSection === id ? "location" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}

            <li className="nav-item">
              <a
                className={`${styles.ctaButton} nav-link`}
                href="#pricing"
                onClick={closeMobileMenu}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
