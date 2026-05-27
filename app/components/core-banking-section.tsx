import Image from "next/image";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

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

function CheckIcon() {
  return (
    <span className="core-features-section__check" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3.2 7.2 5.8 9.8 10.9 4.4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function CoreBankingSection() {
  return (
    <>
      <section className="core-banking-section" aria-labelledby="core-banking-title">
        <div className="core-banking-section__ghost" aria-hidden="true">
          CB7
        </div>

        <div className="core-banking-section__copy">
          <h2 id="core-banking-title">A complete cloud-based core banking.</h2>
          <p>Faster time to market with our cloud-based core banking services</p>
          <a className="core-banking-section__button" href="#request-demo">
            REQUEST DEMO
          </a>
          <a className="core-banking-section__link" href="#learn-more">
            <span>LEARN MORE</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="core-banking-section__dashboard" aria-hidden="true">
          <Image
            src="/assets/svg/dashboard.svg"
            alt=""
            width={792}
            height={462}
            sizes="(max-width: 767px) 92vw, (max-width: 1199px) 62vw, 792px"
          />
        </div>
      </section>

      <section className="core-features-section" aria-labelledby="core-features-title">
        <div className="core-features-section__dashboard" aria-hidden="true">
          <Image
            src="/assets/svg/dashboard-2.svg"
            alt=""
            width={792}
            height={462}
            sizes="(max-width: 767px) 92vw, (max-width: 1199px) 58vw, 792px"
          />
        </div>

        <div className="core-features-section__content">
          <h2 id="core-features-title">
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>
          <p className="core-features-section__eyebrow">What you will get:</p>
          <div className="core-features-section__list">
            {features.map((feature) => (
              <div className="core-features-section__item" key={feature}>
                <CheckIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="core-cta-section" aria-labelledby="core-cta-title">
        <div className="core-cta-section__card">
          <div className="core-cta-section__ghost" aria-hidden="true">
            CB7
          </div>
          <div className="core-cta-section__copy">
            <h2 id="core-cta-title">Take the full advantage of going paper-less now.</h2>
            <p>
              CB7 helps your financial institution improve the client experience, automate and
              optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="core-cta-section__actions">
            <a
              className="core-cta-section__button core-cta-section__button--outline"
              href="#contact-us"
            >
              CONTACT US
            </a>
            <a
              className="core-cta-section__button core-cta-section__button--primary"
              href="#request-demo"
            >
              REQUEST DEMO
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
