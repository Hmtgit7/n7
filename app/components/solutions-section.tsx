import type { CSSProperties } from "react";

const solutions = [
  {
    icon: "/solution-icons/spiral.png",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "/solution-icons/core-banking.png",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/solution-icons/digital-banking.png",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "/solution-icons/open-banking.png",
    title: "Loan Origination System",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/solution-icons/loan-origination.png",
    title: "Loan Management System",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

function GradientIcon({ src, title }: { src: string; title: string }) {
  const style = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
  } satisfies CSSProperties;

  return <span className="solution-card__icon" aria-label={title} role="img" style={style} />;
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 9H14M10 4.5L14.5 9L10 13.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsSection() {
  return (
    <section className="solutions-section" aria-labelledby="solutions-title">
      <div className="solutions-section__intro">
        <h2 id="solutions-title">All of our solutions are tailor-made to your needs</h2>
        <a className="solutions-section__button" href="#request-demo">
          REQUEST DEMO
        </a>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.title}>
            <div className="solution-card__top">
              <GradientIcon src={solution.icon} title={solution.title} />
              {solution.badge ? (
                <span className="solution-card__badge">{solution.badge}</span>
              ) : null}
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <a className="solution-card__link" href="#learn-more">
              <span>LEARN MORE</span>
              <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
