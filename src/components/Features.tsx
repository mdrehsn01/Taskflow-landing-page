import styles from "./Features.module.css";
import FeatureCard from "./FeatureCard";

import {
  FiCheckSquare,
  FiUsers,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiShield,
} from "react-icons/fi";
function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Everything You Need to Manage Work</h2>
        <p className={styles.description}>
          Powerful tools designed to help your team plan, organize, and complete
          work efficiently.
        </p>
        <div className="row g-4">
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiCheckSquare}
              title="Task Management"
              description="Create, organize and track tasks easily."
            />
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiUsers}
              title="Team Collaboration"
              description="Work together and keep everyone connected."
            />
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiBarChart2}
              title="Project Tracking"
              description="Monitor project progress and stay on track."
            />
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiBell}
              title="Smart Notifications"
              description="Never miss important updates and deadlines."
            />
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiCalendar}
              title="Project Planning"
              description="Plan tasks, deadlines and milestones efficiently."
            />
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <FeatureCard
              icon={FiShield}
              title="Secure & Reliable"
              description="Keep your projects and data protected."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
