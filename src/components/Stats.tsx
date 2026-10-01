import styles from "./Stats.module.css";

function Stats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className={styles.stat}>
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Teams</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className={styles.stat}>
              <h3>25K+</h3>
              <p>Tasks Completed</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className={styles.stat}>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
