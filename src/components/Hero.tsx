import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Hero content */}
          <div className="col-12 col-lg-6">
            <h1 className={styles.heroTitle}>
              Manage Your Work.
              <br />
              Simplify Your Workflow.
            </h1>

            <p className={styles.heroDescription}>
              TaskFlow helps teams organize projects, manage tasks, and
              collaborate seamlessly — all in one place.
            </p>

            <div className={styles.heroActions}>
              <a href="#pricing" className={`${styles.primaryButton} btn`}>
                Get Started
              </a>

              <a
                href="#how-it-works"
                className={`${styles.secondaryButton} btn`}
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="col-12 col-lg-6">
            <div
              className={styles.dashboard}
              aria-label="TaskFlow dashboard preview"
            >
              <div className={styles.sidebar}>
                <h2>TaskFlow</h2>
                <span>Overview</span>
                <span>Projects</span>
                <span>Tasks</span>
                <span>Team</span>
                <span>Settings</span>
              </div>

              <div className={styles.dashboardContent}>
                <h2>Welcome Back!</h2>

                <div className={styles.stats}>
                  <div className={styles.statsCard}>
                    <strong>12</strong>
                    <span>Projects</span>
                  </div>

                  <div className={styles.statsCard}>
                    <strong>24</strong>
                    <span>Tasks</span>
                  </div>

                  <div className={styles.statsCard}>
                    <strong>86%</strong>
                    <span>Progress</span>
                  </div>
                </div>

                <div className={styles.recentProjects}>
                  <h3>Recent Projects</h3>

                  <div className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                      <span>Website Redesign</span>
                      <span>75%</span>
                    </div>
                    <div
                      className={styles.progressBar}
                      role="progressbar"
                      aria-label="Website Redesign progress"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className={styles.progressFill}
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>

                  <div className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                      <span>Mobile App</span>
                      <span>45%</span>
                    </div>
                    <div
                      className={styles.progressBar}
                      role="progressbar"
                      aria-label="Mobile App progress"
                      aria-valuenow={45}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className={styles.progressFill}
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
