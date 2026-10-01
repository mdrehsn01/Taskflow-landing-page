import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <p className={styles.description}>
          Everything you need to know about TaskFlow.
        </p>
        <div className={`accordion ${styles.faqAccordion}`} id="taskflowFAQ">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqOne"
                aria-expanded="true"
                aria-controls="faqOne"
              >
                What is TaskFlow?
              </button>
            </h3>

            <div
              id="faqOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#taskflowFAQ"
            >
              <div className="accordion-body">
                TaskFlow is a project management platform.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqTwo"
                aria-expanded="false"
                aria-controls="faqTwo"
              >
                Is TaskFlow free to use?
              </button>
            </h3>

            <div
              id="faqTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#taskflowFAQ"
            >
              <div className="accordion-body">
                The demo Starter plan is free and includes basic task management
                features.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqThree"
                aria-expanded="false"
                aria-controls="faqThree"
              >
                Can I collaborate with my team?
              </button>
            </h3>

            <div
              id="faqThree"
              className="accordion-collapse collapse"
              data-bs-parent="#taskflowFAQ"
            >
              <div className="accordion-body">
                The proposed team features include project organization, task
                assignment and progress tracking
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFour"
                aria-expanded="false"
                aria-controls="faqFour"
              >
                Can I upgrade my plan later?
              </button>
            </h3>

            <div
              id="faqFour"
              className="accordion-collapse collapse"
              data-bs-parent="#taskflowFAQ"
            >
              <div className="accordion-body">
                The sample pricing model includes Starter, Pro and Business
                plans.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFive"
                aria-expanded="false"
                aria-controls="faqFive"
              >
                Is TaskFlow mobile-friendly?
              </button>
            </h3>

            <div
              id="faqFive"
              className="accordion-collapse collapse"
              data-bs-parent="#taskflowFAQ"
            >
              <div className="accordion-body">
                The landing page is designed to work across desktop, tablet and
                mobile devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
