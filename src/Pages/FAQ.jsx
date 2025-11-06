// hooks
import { useEffect, useState } from "react";

// styles
import classes from "../Module/FAQ.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
  faSearch,
  faClock,
  faCreditCard,
  faTruck,
  faShieldAlt,
  faHeadset,
  faUtensils,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// FAQ data
const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: faQuestionCircle,
    questions: [
      {
        question: "What is FoodieHub?",
        answer:
          "FoodieHub is a premium food delivery platform that connects you with the best local restaurants and chefs. We deliver fresh, high-quality meals right to your doorstep with lightning-fast service.",
      },
      {
        question: "How do I place an order?",
        answer:
          "Ordering is simple! Browse our menu, select your favorite dishes, add them to your cart, and checkout. You can pay securely with credit card, debit card, or digital wallets.",
      },
      {
        question: "Is there a minimum order requirement?",
        answer:
          "Our minimum order amount varies by restaurant partner. Most restaurants have a minimum order of $15-$25, but you can always check the specific requirements on each restaurant's page.",
      },
      {
        question: "Can I order for someone else?",
        answer:
          "Absolutely! You can order for delivery to any address. Just enter the recipient's delivery address and contact information during checkout.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Timing",
    icon: faTruck,
    questions: [
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times vary by location and restaurant. Most orders arrive within 30-45 minutes. You can track your order in real-time through our app.",
      },
      {
        question: "What's your delivery area?",
        answer:
          "We currently deliver within a 15-mile radius of our partnered restaurants. You can check if we deliver to your area by entering your address during checkout.",
      },
      {
        question: "Can I schedule delivery for later?",
        answer:
          "Yes! You can schedule your order for delivery up to 7 days in advance. Select your preferred delivery time during checkout.",
      },
      {
        question: "What if my food arrives cold?",
        answer:
          "Food quality is our priority. If your food arrives cold or unsatisfactory, contact our support team immediately for a replacement or refund.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Pricing",
    icon: faCreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and popular digital wallets like Apple Pay, Google Pay, and PayPal.",
      },
      {
        question: "Is there a delivery fee?",
        answer:
          "Delivery fees vary by location and order size. Most deliveries have a $2.99-$4.99 fee, but orders over $35 often qualify for free delivery.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Refunds are processed within 3-5 business days for eligible orders. Contact our support team to initiate a refund request.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "We believe in transparency. All fees are clearly displayed before checkout, including delivery fees, taxes, and any applicable service charges.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Support",
    icon: faHeadset,
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Click the 'Sign Up' button and provide your email, phone number, and basic information. You'll receive a verification code to complete registration.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click 'Forgot Password' on the login page. We'll send a reset link to your registered email address.",
      },
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach us 24/7 through our in-app chat, email at support@foodiehub.com, or call our hotline at 1-800-FOODIE.",
      },
      {
        question: "Can I change my delivery address?",
        answer:
          "Yes, you can update your delivery address in your account settings or during checkout for each order.",
      },
    ],
  },
];

// Quick help cards
const quickHelpCards = [
  {
    icon: faClock,
    title: "Fast Delivery",
    description: "Average 30-minute delivery time",
  },
  {
    icon: faShieldAlt,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
  {
    icon: faUtensils,
    title: "Quality Food",
    description: "Fresh ingredients guaranteed",
  },
  {
    icon: faMapMarkerAlt,
    title: "Wide Coverage",
    description: "15-mile delivery radius",
  },
];

// main
function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // toggle question
  const toggleQuestion = (questionId) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  // filter questions based on search
  const getFilteredQuestions = () => {
    if (!searchTerm) return faqCategories;

    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
  };

  const filteredCategories = getFilteredQuestions();

  return (
    <>
      <div className={classes.faqPage}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>Frequently Asked Questions</h1>
            <p className={classes.heroSubtitle}>
              Find answers to common questions about FoodieHub. Can't find what
              you're looking for? Our support team is here to help!
            </p>

            {/* Search Bar */}
            <div className={classes.searchContainer}>
              <div className={classes.searchBox}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={classes.searchIcon}
                />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={classes.searchInput}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help Cards */}
        <section className={classes.quickHelpSection}>
          <div className={classes.quickHelpContent}>
            <h2 className={classes.sectionTitle}>Why Choose FoodieHub?</h2>
            <div className={classes.quickHelpGrid}>
              {quickHelpCards.map((card, index) => (
                <div className={classes.helpCard} key={index}>
                  <div className={classes.helpIcon}>
                    <FontAwesomeIcon icon={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className={classes.faqSection}>
          <div className={classes.faqContent}>
            {/* Category Tabs */}
            <div className={classes.categoryTabs}>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  className={`${classes.categoryTab} ${
                    activeCategory === category.id ? classes.activeTab : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <FontAwesomeIcon icon={category.icon} />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className={classes.faqAccordion}>
              {filteredCategories
                .filter(
                  (category) =>
                    activeCategory === "all" || category.id === activeCategory
                )
                .map((category) => (
                  <div key={category.id} className={classes.categorySection}>
                    <h3 className={classes.categoryTitle}>
                      <FontAwesomeIcon icon={category.icon} />
                      {category.title}
                    </h3>
                    <div className={classes.questionsList}>
                      {category.questions.map((faq, index) => {
                        const questionId = `${category.id}-${index}`;
                        const isOpen = openQuestions.has(questionId);

                        return (
                          <div key={questionId} className={classes.faqItem}>
                            <button
                              className={classes.questionButton}
                              onClick={() => toggleQuestion(questionId)}
                            >
                              <span className={classes.questionText}>
                                {faq.question}
                              </span>
                              <FontAwesomeIcon
                                icon={isOpen ? faChevronUp : faChevronDown}
                                className={classes.toggleIcon}
                              />
                            </button>
                            {isOpen && (
                              <div className={classes.answerContent}>
                                <p>{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>

            {/* No Results */}
            {filteredCategories.length === 0 && searchTerm && (
              <div className={classes.noResults}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={classes.noResultsIcon}
                />
                <h3>No results found</h3>
                <p>Try different keywords or browse our categories above.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className={classes.contactSection}>
          <div className={classes.contactContent}>
            <h2 className={classes.sectionTitle}>Still Need Help?</h2>
            <p className={classes.contactText}>
              Our friendly support team is available 24/7 to assist you with any
              questions or concerns.
            </p>
            <div className={classes.contactOptions}>
              <div className={classes.contactCard}>
                <FontAwesomeIcon
                  icon={faHeadset}
                  className={classes.contactIcon}
                />
                <h3>Live Chat</h3>
                <p>Get instant help through our live chat</p>
                <button className={classes.contactButton}>Start Chat</button>
              </div>
              <div className={classes.contactCard}>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className={classes.contactIcon}
                />
                <h3>Email Support</h3>
                <p>Send us an email and we'll respond within 24 hours</p>
                <button className={classes.contactButton}>Send Email</button>
              </div>
              <div className={classes.contactCard}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={classes.contactIcon}
                />
                <h3>Call Us</h3>
                <p>Speak directly with our support team</p>
                <button className={classes.contactButton}>Call Now</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FAQ;
