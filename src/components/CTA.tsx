import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className={styles.title}>Ready to Simplify Your Workflow?</h2>

        <p className={styles.description}>
          Bring your tasks, projects, and team together in one organized
          workspace.
        </p>

        <a href="#pricing" className={styles.ctaButton}>
          Get Started Free →
        </a>
      </div>
    </section>
  );
}

export default CTA;
