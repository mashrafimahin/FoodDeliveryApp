// hooks
import { useEffect } from "react";

// styles
import classes from "../Module/Privacy.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faEye,
  faShare,
  faLock,
  faUserCheck,
  faCookieBite,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// privacy policy data
const privacySections = [
  {
    icon: faShieldAlt,
    title: "Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, and delivery address when you create an account or place an order.",
      "Payment Information: Credit/debit card details processed securely through our payment partners.",
      "Usage Data: Information about how you interact with our app, including pages visited, features used, and time spent.",
      "Device Information: IP address, browser type, operating system, and device identifiers.",
      "Location Data: Approximate location for delivery services and location-based recommendations.",
    ],
  },
  {
    icon: faEye,
    title: "How We Use Your Information",
    content: [
      "Process and fulfill your food orders efficiently.",
      "Provide customer support and respond to your inquiries.",
      "Send you important updates about your orders and account.",
      "Improve our services through analytics and user feedback.",
      "Personalize your experience with relevant recommendations.",
      "Ensure platform security and prevent fraudulent activities.",
    ],
  },
  {
    icon: faShare,
    title: "Information Sharing",
    content: [
      "With restaurants and delivery partners to fulfill your orders.",
      "With payment processors for secure transaction processing.",
      "With service providers who assist our operations (analytics, customer support).",
      "When required by law or to protect our rights and safety.",
      "With your consent for specific purposes you approve.",
    ],
  },
  {
    icon: faLock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your data.",
      "All sensitive information is encrypted during transmission and storage.",
      "Regular security audits and updates to maintain data protection.",
      "Access to personal information is restricted to authorized personnel only.",
      "We use secure servers and follow PCI DSS standards for payment data.",
    ],
  },
  {
    icon: faUserCheck,
    title: "Your Rights",
    content: [
      "Access: Request a copy of the personal information we hold about you.",
      "Correction: Update or correct inaccurate information in your account.",
      "Deletion: Request deletion of your personal data (subject to legal requirements).",
      "Portability: Receive your data in a structured, machine-readable format.",
      "Opt-out: Unsubscribe from marketing communications at any time.",
    ],
  },
  {
    icon: faCookieBite,
    title: "Cookies and Tracking",
    content: [
      "Essential cookies for app functionality and security.",
      "Analytics cookies to understand user behavior and improve services.",
      "Marketing cookies to show relevant advertisements.",
      "You can control cookie preferences through your browser settings.",
      "Third-party cookies from our service providers for enhanced features.",
    ],
  },
];

const contactInfo = {
  email: "privacy@foodiehub.com",
  phone: "+1 (555) 123-4567",
  address: "123 Food Street, Culinary City, FC 12345",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
};

// main
function Privacy() {
  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.privacyPage}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>Privacy Policy</h1>
            <p className={classes.heroSubtitle}>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <div className={classes.heroStats}>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>100% Secure</span>
              </div>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faLock} />
                <span>Encrypted Data</span>
              </div>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faUserCheck} />
                <span>Your Control</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={classes.introSection}>
          <div className={classes.introContent}>
            <h2 className={classes.sectionTitle}>Our Commitment to Privacy</h2>
            <div className={classes.introGrid}>
              <div className={classes.introText}>
                <p>
                  At FoodieHub, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your information when you use our food delivery
                  platform.
                </p>
                <p>
                  We believe in transparency and giving you control over your
                  data. This policy applies to all users of our website, mobile
                  application, and related services. By using FoodieHub, you
                  agree to the collection and use of information in accordance
                  with this policy.
                </p>
                <div className={classes.lastUpdated}>
                  <strong>Last Updated:</strong> November 6, 2024
                </div>
              </div>
              <div className={classes.introImage}>
                <div className={classes.privacyIcon}>
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className={classes.privacySections}>
          <div className={classes.sectionsContent}>
            <h2 className={classes.sectionTitle}>Privacy Details</h2>
            <div className={classes.sectionsGrid}>
              {privacySections.map((section, index) => (
                <div className={classes.privacyCard} key={index}>
                  <div className={classes.cardHeader}>
                    <div className={classes.cardIcon}>
                      <FontAwesomeIcon icon={section.icon} />
                    </div>
                    <h3>{section.title}</h3>
                  </div>
                  <div className={classes.cardContent}>
                    <ul>
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={classes.contactSection}>
          <div className={classes.contactContent}>
            <h2 className={classes.sectionTitle}>Contact Us About Privacy</h2>
            <p className={classes.contactSubtitle}>
              Have questions about your privacy or this policy? We're here to
              help.
            </p>
            <div className={classes.contactGrid}>
              <div className={classes.contactCard}>
                <div className={classes.contactIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3>Email Us</h3>
                <p>{contactInfo.email}</p>
                <span>Response within 24 hours</span>
              </div>
              <div className={classes.contactCard}>
                <div className={classes.contactIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h3>Call Us</h3>
                <p>{contactInfo.phone}</p>
                <span>{contactInfo.hours}</span>
              </div>
              <div className={classes.contactCard}>
                <div className={classes.contactIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <h3>Visit Us</h3>
                <p>{contactInfo.address}</p>
                <span>By appointment only</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={classes.faqSection}>
          <div className={classes.faqContent}>
            <h2 className={classes.sectionTitle}>Frequently Asked Questions</h2>
            <div className={classes.faqGrid}>
              <div className={classes.faqItem}>
                <h3>How can I update my personal information?</h3>
                <p>
                  You can update your account information anytime through the
                  app settings or by contacting our support team.
                </p>
              </div>
              <div className={classes.faqItem}>
                <h3>Do you sell my data to third parties?</h3>
                <p>
                  No, we do not sell your personal information to third parties
                  for their marketing purposes. We only share data as described
                  in this policy.
                </p>
              </div>
              <div className={classes.faqItem}>
                <h3>How long do you keep my data?</h3>
                <p>
                  We retain your information for as long as necessary to provide
                  our services and comply with legal obligations, typically for
                  the duration of your account plus a reasonable period
                  afterward.
                </p>
              </div>
              <div className={classes.faqItem}>
                <h3>Can I delete my account?</h3>
                <p>
                  Yes, you can request account deletion at any time. We'll
                  remove your personal data within 30 days, subject to legal
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Privacy;
