import { useEffect } from "react";
import classes from "../Module/Terms.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileContract,
  faShieldAlt,
  faUserCheck,
  faCreditCard,
  faTruck,
  faExclamationTriangle,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsSections = [
    {
      icon: faFileContract,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using FoodApp's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our service.",
      ],
    },
    {
      icon: faUserCheck,
      title: "User Accounts",
      content: [
        "When you create an account with us, you must provide information that is accurate, complete, and current at all times.",
        "You are responsible for safeguarding the password and for all activities that occur under your account.",
        "You must immediately notify us of any unauthorized uses of your account or any other breaches of security.",
      ],
    },
    {
      icon: faCreditCard,
      title: "Payment Terms",
      content: [
        "All payments are processed securely through our authorized payment gateways.",
        "Prices for our products are subject to change without notice.",
        "We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to product availability, errors in product information, or payment issues.",
      ],
    },
    {
      icon: faTruck,
      title: "Delivery Services",
      content: [
        "We strive to deliver your order within the estimated time frame provided at checkout.",
        "Delivery times may vary based on location, traffic conditions, and other factors.",
        "We are not responsible for delays caused by circumstances beyond our reasonable control.",
        "Risk of loss and title for items purchased pass to you upon our delivery to the carrier.",
      ],
    },
    {
      icon: faShieldAlt,
      title: "Privacy & Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.",
        "We collect, use, and protect your personal information in accordance with applicable data protection laws.",
        "We implement appropriate technical and organizational measures to ensure the security of your personal data.",
      ],
    },
    {
      icon: faExclamationTriangle,
      title: "Prohibited Uses",
      content: [
        "You may not use our service for any illegal or unauthorized purpose.",
        "You must not violate any laws in your jurisdiction when using our service.",
        "You are prohibited from transmitting any worms, viruses, or any code of a destructive nature.",
        "Any breach or violation of these Terms will result in immediate termination of your service.",
      ],
    },
  ];

  const contactInfo = [
    {
      icon: faPhone,
      title: "Phone Support",
      detail: "+1 (555) 123-4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: faEnvelope,
      title: "Email Support",
      detail: "legal@foodapp.com",
      description: "Contact our legal team",
    },
  ];

  return (
    <>
      <div className={classes.terms}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <div className={classes.heroIcon}>
              <FontAwesomeIcon icon={faFileContract} />
            </div>
            <h1 className={classes.heroTitle}>
              Terms & <span>Services</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Please read these terms and conditions carefully before using our
              service. By using FoodApp, you agree to be bound by these terms.
            </p>
            <div className={classes.lastUpdated}>
              Last updated: November 2025
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className={classes.contentSection}>
          <div className={classes.contentContainer}>
            <div className={classes.introText}>
              <h2>Welcome to FoodApp</h2>
              <p>
                These Terms of Service ("Terms") govern your use of FoodApp's
                website, mobile application, and related services (collectively,
                the "Service"). By accessing or using our Service, you agree to
                be bound by these Terms. If you disagree with any part of these
                terms, then you may not access the Service.
              </p>
            </div>

            <div className={classes.termsGrid}>
              {termsSections.map((section, index) => (
                <div className={classes.termsCard} key={index}>
                  <div className={classes.cardHeader}>
                    <div className={classes.sectionIcon}>
                      <FontAwesomeIcon icon={section.icon} />
                    </div>
                    <h3>{section.title}</h3>
                  </div>
                  <div className={classes.cardContent}>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Terms */}
            <div className={classes.additionalTerms}>
              <h3>Termination</h3>
              <p>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>

              <h3>Governing Law</h3>
              <p>
                These Terms shall be interpreted and governed by the laws of the
                jurisdiction in which FoodApp operates, without regard to its
                conflict of law provisions.
              </p>

              <h3>Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>

              <h3>Contact Information</h3>
              <p>
                If you have any questions about these Terms, please contact us
                through our support channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={classes.contactSection}>
          <h2 className={classes.sectionTitle}>Questions About Our Terms?</h2>
          <p className={classes.sectionSubtitle}>
            Our legal team is here to help clarify any questions you may have
            about our terms and services.
          </p>

          <div className={classes.contactGrid}>
            {contactInfo.map((contact, index) => (
              <div className={classes.contactCard} key={index}>
                <div className={classes.contactIcon}>
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <h3>{contact.title}</h3>
                <p className={classes.contactDetail}>{contact.detail}</p>
                <p className={classes.contactDescription}>
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
