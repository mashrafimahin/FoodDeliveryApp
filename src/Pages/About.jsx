// hooks
import { useEffect } from "react";

// styles
import classes from "../Module/About.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAward,
  faHeart,
  faStar,
  faQuoteLeft,
  faQuoteRight,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

// images
import Food from "../Assets/image/hero.jpg";
import HeroImage from "../Assets/image/ceo.jpg";

// company data
const companyStats = [
  {
    icon: faUsers,
    number: "50,000+",
    title: "Happy Customers",
    description: "Satisfied food lovers worldwide",
  },
  {
    icon: faAward,
    number: "15+",
    title: "Years Experience",
    description: "Excellence in food delivery",
  },
  {
    icon: faHeart,
    number: "500+",
    title: "Menu Items",
    description: "Diverse culinary options",
  },
];

// CEO information
const ceoInfo = {
  name: "Mashrafi Mahin",
  title: "Founder & CEO",
  image: HeroImage,
  bio: "With over 15 years in the culinary industry, Sarah founded FoodieHub with a vision to revolutionize food delivery. Her passion for authentic flavors and commitment to quality has made FoodieHub the go-to choice for food lovers everywhere.",
  experience: [
    {
      icon: faBriefcase,
      title: "Culinary Director",
      company: "Fine Dining Group",
      period: "2015-2020",
    },
    {
      icon: faGraduationCap,
      title: "Master Chef Certification",
      company: "Culinary Institute of America",
      period: "2012",
    },
    {
      icon: faAward,
      title: "Entrepreneur of the Year",
      company: "Food Industry Awards",
      period: "2023",
    },
  ],
  contact: {
    email: "mashrafi.devs@gmail.com",
    phone: "+880 1822565654",
    location: "Kushtia, Bangladesh",
  },
};

// testimonials data
const testimonials = [
  {
    name: "Emily Chen",
    role: "Food Blogger",
    image: HeroImage,
    rating: 5,
    comment:
      "FoodieHub has completely transformed my dining experience. The quality of food and lightning-fast delivery is unmatched. I've tried countless delivery services, but this one stands out!",
    date: `March ${new Date().getFullYear()}`,
  },
  {
    name: "Marcus Rodriguez",
    role: "Busy Professional",
    image: HeroImage,
    rating: 5,
    comment:
      "As someone with a hectic schedule, FoodieHub saves me so much time. The app is intuitive, the food arrives hot and fresh, and the customer service is exceptional. Highly recommended!",
    date: `February ${new Date().getFullYear()}`,
  },
  {
    name: "Lisa Thompson",
    role: "Home Chef",
    image: HeroImage,
    rating: 5,
    comment:
      "I love experimenting with new cuisines, and FoodieHub offers such amazing variety. The portion sizes are generous, flavors are authentic, and everything arrives perfectly packaged. My new favorite!",
    date: `January ${new Date().getFullYear()}`,
  },
];

// main
function About() {
  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.aboutPage}>
        <Navbar />

        {/* Company Story Section */}
        <section className={classes.storySection}>
          <div className={classes.storyContent}>
            <h2 className={classes.sectionTitle}>Our Story</h2>
            <div className={classes.storyGrid}>
              <div className={classes.storyText}>
                <h3>From Kitchen to Your Doorstep</h3>
                <p>
                  Founded in 2009, FoodieHub began as a small family-owned
                  restaurant with a big dream: to make exceptional food
                  accessible to everyone. What started as a single location has
                  grown into a beloved food delivery platform serving thousands
                  of happy customers daily.
                </p>
                <p>
                  Our journey has been driven by an unwavering commitment to
                  quality, innovation, and customer satisfaction. We partner
                  with the finest local restaurants and chefs to bring you
                  authentic, freshly prepared meals that capture the essence of
                  diverse culinary traditions.
                </p>
                <p>
                  Today, FoodieHub stands as a testament to what happens when
                  passion for food meets cutting-edge technology. We're more
                  than a delivery service – we're your culinary companion, your
                  shortcut to extraordinary dining experiences.
                </p>
              </div>
              <div className={classes.storyImage}>
                <img src={Food} alt="Our Story" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={classes.statsSection}>
          {companyStats.map((stat, index) => (
            <div className={classes.statCard} key={index}>
              <div className={classes.statIcon}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className={classes.statNumber}>{stat.number}</div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </section>

        {/* CEO Section */}
        <section className={classes.ceoSection}>
          <div className={classes.ceoContent}>
            <h2 className={classes.sectionTitle}>Meet Our Founder</h2>
            <div className={classes.ceoGrid}>
              {/* Ceo Image and Contact */}
              <div className={classes.ceoImage}>
                <img src={ceoInfo.image} alt={ceoInfo.name} draggable={false} />
                <div className={classes.ceoContact}>
                  <div className={classes.contactItem}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{ceoInfo.contact.email}</span>
                  </div>
                  <div className={classes.contactItem}>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{ceoInfo.contact.phone}</span>
                  </div>
                  <div className={classes.contactItem}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{ceoInfo.contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Ceo Info and Experience */}
              <div className={classes.ceoInfo}>
                <h3>{ceoInfo.name}</h3>
                <p className={classes.ceoTitle}>{ceoInfo.title}</p>
                <p className={classes.ceoBio}>{ceoInfo.bio}</p>

                <div className={classes.experienceSection}>
                  <h4>Professional Experience</h4>

                  {/* experience list */}
                  <div className={classes.experienceList}>
                    {ceoInfo.experience.map((exp, index) => (
                      <div className={classes.experienceItem} key={index}>
                        <div className={classes.expIcon}>
                          <FontAwesomeIcon icon={exp.icon} />
                        </div>
                        <div className={classes.expDetails}>
                          <h5>{exp.title}</h5>
                          <p>{exp.company}</p>
                          <span className={classes.expPeriod}>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={classes.testimonialsSection}>
          <div className={classes.testimonialsContent}>
            <h2 className={classes.sectionTitle}>What Our Customers Say</h2>
            <p className={classes.sectionSubtitle}>
              Don't just take our word for it – hear from our satisfied
              customers
            </p>

            {/* testimonials grid */}
            <div className={classes.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div className={classes.testimonialCard} key={index}>
                  <div className={classes.testimonialHeader}>
                    <div className={classes.customerImage}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        draggable={false}
                      />
                    </div>
                    <div className={classes.customerInfo}>
                      <h4>{testimonial.name}</h4>
                      <p className={classes.customerRole}>{testimonial.role}</p>
                      <div className={classes.rating}>
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <FontAwesomeIcon icon={faStar} key={i} />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={classes.testimonialContent}>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className={classes.quoteIcon}
                    />
                    <p>{testimonial.comment}</p>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className={classes.quoteIcon}
                    />
                  </div>

                  <div className={classes.testimonialDate}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={classes.missionSection}>
          <div className={classes.missionContent}>
            <h2 className={classes.sectionTitle}>Our Mission</h2>
            <div className={classes.missionGrid}>
              <div className={classes.missionCard}>
                <div className={classes.missionIcon}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <h3>Quality First</h3>
                <p>
                  We believe that great food starts with the finest ingredients
                  and ends with exceptional service. Every meal we deliver
                  reflects our commitment to excellence.
                </p>
              </div>
              <div className={classes.missionCard}>
                <div className={classes.missionIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3>Community Focus</h3>
                <p>
                  We're proud to support local restaurants and chefs, fostering
                  a vibrant food community that celebrates diversity,
                  creativity, and culinary excellence.
                </p>
              </div>
              <div className={classes.missionCard}>
                <div className={classes.missionIcon}>
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h3>Innovation</h3>
                <p>
                  Technology meets tradition in our quest to make food delivery
                  seamless, sustainable, and accessible to everyone, everywhere.
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

export default About;
