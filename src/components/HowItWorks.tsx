import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.description}>
          Start managing your work in just three simple steps.
        </p>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <h3 className={styles.number}>01</h3>
              <h4 className={styles.stepTitle}>Create Your Workspace</h4>
              <p className={styles.stepDescription}>
                Set up your workspace and invite your team members.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <h3 className={styles.number}>02</h3>
              <h4 className={styles.stepTitle}>Organize Your Work</h4>
              <p className={styles.stepDescription}>
                Create projects, assign tasks, and manage deadlines.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.step}>
              <h3 className={styles.number}>03</h3>
              <h4 className={styles.stepTitle}>Get Things Done</h4>
              <p className={styles.stepDescription}>
                Track progress, collaborate, and complete projects efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
