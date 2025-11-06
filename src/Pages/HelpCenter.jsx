import { useState, useEffect } from "react";
import classes from "../Module/HelpCenter.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faChevronUp,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faCreditCard,
  faTruck,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our menu, add items to your cart, and proceed to checkout. You'll need to create an account or log in to complete your order.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver 24/7! Our delivery service is available around the clock to ensure you get your favorite food whenever you want it.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 30-45 minutes. During peak hours, it might take up to 60 minutes. You can track your order in real-time through our app.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets (PayPal, Apple Pay, Google Pay), and cash on delivery.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or cancelled within 5 minutes of placement. Please contact our support team immediately if you need to make changes.",
    },
    {
      question: "What if my food arrives cold or damaged?",
      answer:
        "We're committed to quality! If your food arrives cold or damaged, please contact us immediately. We'll send a replacement or provide a full refund.",
    },
    {
      question: "Do you offer vegetarian and vegan options?",
      answer:
        "Yes! We have a wide variety of vegetarian and vegan options clearly marked in our menu. Many dishes can also be customized to meet dietary preferences.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track your order through our mobile app.",
    },
  ];

  const helpCategories = [
    {
      icon: faShoppingCart,
      title: "Ordering",
      description: "Learn how to place, modify, and track orders",
      topics: [
        "Placing Orders",
        "Order Tracking",
        "Modifying Orders",
        "Order History",
      ],
    },
    {
      icon: faTruck,
      title: "Delivery",
      description: "Delivery times, areas, and tracking information",
      topics: [
        "Delivery Times",
        "Delivery Areas",
        "Delivery Tracking",
        "Delivery Fees",
      ],
    },
    {
      icon: faCreditCard,
      title: "Payments",
      description: "Payment methods, refunds, and billing",
      topics: ["Payment Methods", "Refunds", "Billing Issues", "Gift Cards"],
    },
    {
      icon: faUser,
      title: "Account",
      description: "Account management and profile settings",
      topics: [
        "Creating Account",
        "Profile Settings",
        "Password Reset",
        "Account Security",
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
      detail: "support@foodapp.com",
      description: "Send us an email for detailed inquiries",
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      detail: "123 Food Street, Culinary City",
      description: "Our main office location",
    },
    {
      icon: faClock,
      title: "Support Hours",
      detail: "24/7 Available",
      description: "We're here whenever you need us",
    },
  ];

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={classes.helpCenter}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>
              How Can We <span>Help You?</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Find answers to common questions, get support, or contact our
              team. We're here to make your food ordering experience amazing.
            </p>

            {/* Search Bar */}
            <div className={classes.searchContainer}>
              <div className={classes.searchBar}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={classes.searchIcon}
                />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={classes.searchInput}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className={classes.categoriesSection}>
          <h2 className={classes.sectionTitle}>Browse Help Topics</h2>
          <p className={classes.sectionSubtitle}>
            Quick access to the most common questions and issues
          </p>

          <div className={classes.categoriesGrid}>
            {helpCategories.map((category, index) => (
              <div className={classes.categoryCard} key={index}>
                <div className={classes.categoryIcon}>
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className={classes.topicsList}>
                  {category.topics.slice(0, 2).map((topic, topicIndex) => (
                    <span key={topicIndex} className={classes.topicTag}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className={classes.faqSection}>
          <h2 className={classes.sectionTitle}>Frequently Asked Questions</h2>
          <p className={classes.sectionSubtitle}>
            Find quick answers to the most common questions
          </p>

          <div className={classes.faqContainer}>
            {filteredFAQs.map((faq, index) => (
              <div className={classes.faqItem} key={index}>
                <button
                  className={classes.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={expandedFAQ === index ? faChevronUp : faChevronDown}
                    className={classes.chevronIcon}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className={classes.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={classes.contactSection}>
          <h2 className={classes.sectionTitle}>Get In Touch</h2>
          <p className={classes.sectionSubtitle}>
            Can't find what you're looking for? Our support team is here to help
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

        {/* CTA Section */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaContent}>
            <h2>Still Need Help?</h2>
            <p>
              Our dedicated support team is ready to assist you with any
              questions or concerns.
            </p>
            <div className={classes.ctaButtons}>
              <button className={classes.ctaPrimaryButton}>
                <FontAwesomeIcon icon={faPhone} />
                Call Support
              </button>
              <button className={classes.ctaSecondaryButton}>
                <FontAwesomeIcon icon={faEnvelope} />
                Email Us
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;
