import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
  rating: number;
  initials: string;
}

function TestimonialCard({
  name,
  role,
  review,
  rating,
  initials,
}: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.stars}>{"★".repeat(rating)}</span>

      <p className={styles.review}>{review}</p>
      <div className={styles.customer}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.customerInfo}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
