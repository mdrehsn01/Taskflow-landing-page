import styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}> Simple, Transparent Pricing</h2>
        <p className={styles.description}>
          Choose the perfect plan for your team.
        </p>
        <div className="row g-3 justify-content-center">
          <div className="col-6 col-md-4">
            <PricingCard
              name="Starter"
              price={0}
              features={["3 Projects", "Basic Tasks", "1 Member"]}
            />
          </div>

          <div className="col-6 col-md-4">
            <PricingCard
              name="Pro"
              price={12}
              features={[
                "Unlimited Projects",
                "Advanced Analytics",
                "10 Team Members",
              ]}
              popular
            />
          </div>

          <div className="col-6 col-md-4">
            <PricingCard
              name="Business"
              price={29}
              features={[
                "Everything in Pro",
                "Unlimited Team Members",
                "Priority Support",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
