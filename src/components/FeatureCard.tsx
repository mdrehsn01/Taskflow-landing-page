import type { IconType } from "react-icons";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
