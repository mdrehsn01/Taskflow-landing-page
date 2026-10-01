import styles from "./PricingCard.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

function PricingCard({
  name,
  price,
  features,
  popular = false,
}: PricingCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  return (
    <div className={`${styles.pricingCard} ${popular ? styles.popular : ""}`}>
      {popular && <span className={styles.popularBadge}>Most Popular</span>}

      <h3 className={styles.planName}>{name}</h3>

      <div className={styles.price}>
        ${price}
        <span>/month</span>
      </div>

      <hr />

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.planButton}
        onClick={() => setIsOpen(true)}
      >
        Get Started
      </button>

      {isOpen &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
            <div
              className={styles.modal}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>

              <h2>{name} Plan</h2>

              <p>
                ${price}
                <span>/month</span>
              </p>

              <h3>Plan includes:</h3>

              <ul>
                {features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                type="button"
                className={styles.modalButton}
                onClick={() => setIsOpen(false)}
              >
                Continue
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default PricingCard;
