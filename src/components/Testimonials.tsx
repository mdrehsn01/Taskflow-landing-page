import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Loved by Productive Teams</h2>

        <p className={styles.description}>
          See how TaskFlow helps teams stay organized and get more done.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <TestimonialCard
              name="Alex Morgan"
              role="Project Manager"
              review="TaskFlow makes it easy to organize projects."
              rating={5}
              initials="AM"
            />
          </div>

          <div className="col-12 col-md-4">
            <TestimonialCard
              name="Sarah Johnson"
              role="Team Lead"
              review="Managing tasks with my team feels much simpler."
              rating={5}
              initials="SJ"
            />
          </div>

          <div className="col-12 col-md-4">
            <TestimonialCard
              name="David Wilson"
              role="Freelancer"
              review="A simple workspace that helps me stay focused."
              rating={4}
              initials="DW"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
