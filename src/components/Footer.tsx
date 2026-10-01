import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Information */}
          <div className="col-12 col-md-5">
            <h2 className={styles.brand}>TaskFlow.</h2>

            <p className={styles.description}>
              Simplify your workflow, organize your projects, and achieve more
              with your team.
            </p>

            <div className={styles.socialIcons}>
              <a
                href="https://github.com/mdrehsn01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammadrehan001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/developer.rehan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h3 className={styles.heading}>Quick Links</h3>

            <ul className={styles.linkList}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-4">
            <h3 className={styles.heading}>Support</h3>

            <ul className={styles.linkList}>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="mailto:developerrehan.business@gmail.com">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <hr className={styles.divider} />

        <p className={styles.copyright}>
          © 2026 TaskFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
