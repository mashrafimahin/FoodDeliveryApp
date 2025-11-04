// hooks
import { useEffect } from "react";

// styles
import classes from "../Module/Contact.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// contact data
const contactInfo = [
  {
    icon: faPhone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Call us anytime",
  },
  {
    icon: faEnvelope,
    title: "Email",
    details: ["mashrafi.devs@gmail.com", "support@foodie.com"],
    description: "Send us an email",
  },
  {
    icon: faMapMarkerAlt,
    title: "Location",
    details: ["123 Food Street", "New York, NY 10001"],
    description: "Visit our restaurant",
  },
  {
    icon: faClock,
    title: "Hours",
    details: ["Mon-Fri: 9AM-10PM", "Sat-Sun: 10AM-11PM"],
    description: "We're open daily",
  },
];

const socialLinks = [
  { icon: faFacebook, url: "#", label: "Facebook" },
  { icon: faInstagram, url: "#", label: "Instagram" },
  { icon: faTwitter, url: "#", label: "Twitter" },
];

// main
function Contact() {
  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <>
      <div className={classes.contactPage}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>Get In Touch</h1>
            <p className={classes.heroSubtitle}>
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className={classes.contactInfoSection}>
          <div className={classes.container}>
            <h2 className={classes.sectionTitle}>Contact Information</h2>
            <p className={classes.sectionSubtitle}>
              Reach out to us through any of these channels
            </p>

            {/* contact boxes */}
            <div className={classes.contactGrid}>
              {contactInfo.map((info, index) => (
                <div className={classes.contactCard} key={index}>
                  <div className={classes.contactIcon}>
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <h3>{info.title}</h3>
                  <div className={classes.contactDetails}>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                  <span className={classes.contactDescription}>
                    {info.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={classes.contactFormSection}>
          <div className={classes.container}>
            <div className={classes.formContainer}>
              <div className={classes.formContent}>
                {/* headings */}
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {/* contact form */}
                <form className={classes.contactForm} onSubmit={handleSubmit}>
                  <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className={classes.formGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className={classes.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className={classes.formGroup}>
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className={classes.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={classes.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className={classes.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>

              {/* image */}
              <div className={classes.formImage}>
                <div className={classes.imagePlaceholder}>
                  <img src="/src/Assets/image/ceo.jpg" alt="Contact us" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={classes.socialSection}>
          <div className={classes.container}>
            <h2>Follow Us</h2>
            <p>
              Stay connected and follow us on social media for updates and
              special offers
            </p>

            {/* social icons */}
            <div className={classes.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={classes.socialLink}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
