// hooks
import { useEffect } from "react";

// styles
import classes from "../Module/Careers.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faRocket,
  faHeart,
  faUtensils,
  faMapMarkerAlt,
  faClock,
  faDollarSign,
  faGraduationCap,
  faHandshake,
  faBriefcase,
  faCoffee,
  faBalanceScale,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

// images
import HeroImage from "../Assets/image/hero.jpg";

// benefits data
const benefitsData = [
  {
    icon: faClock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible scheduling options",
  },
  {
    icon: faDollarSign,
    title: "Competitive Pay",
    description: "Attractive salary packages with performance bonuses",
  },
  {
    icon: faGraduationCap,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement programs",
  },
  {
    icon: faCoffee,
    title: "Great Perks",
    description: "Free meals, health benefits, and employee discounts",
  },
  {
    icon: faHandshake,
    title: "Team Collaboration",
    description:
      "Work with passionate food enthusiasts in a supportive environment",
  },
  {
    icon: faRocket,
    title: "Innovation Focus",
    description: "Be part of a fast-growing food delivery revolution",
  },
];

// job openings data
const jobOpenings = [
  {
    title: "Delivery Driver",
    type: "Full-time/Part-time",
    location: "Multiple Locations",
    description:
      "Join our delivery team and bring delicious food to customers' doorsteps. Flexible hours and great tips!",
    requirements: [
      "Valid driver's license",
      "Smartphone",
      "Reliable transportation",
      "Customer service skills",
    ],
  },
  {
    title: "Restaurant Partner",
    type: "Partnership",
    location: "Restaurant Locations",
    description:
      "Partner with us to expand your restaurant's reach through our delivery platform. Increase your revenue!",
    requirements: [
      "Established restaurant",
      "Quality food standards",
      "Delivery-ready packaging",
      "Business license",
    ],
  },
  {
    title: "Customer Service Representative",
    type: "Full-time",
    location: "Remote/Office",
    description:
      "Help customers with orders, complaints, and provide excellent support experience.",
    requirements: [
      "Communication skills",
      "Problem-solving ability",
      "Computer literacy",
      "Customer-focused mindset",
    ],
  },
  {
    title: "Marketing Specialist",
    type: "Full-time",
    location: "Office",
    description:
      "Create engaging campaigns to promote our food delivery services and attract new customers.",
    requirements: [
      "Marketing experience",
      "Social media knowledge",
      "Creative thinking",
      "Analytics skills",
    ],
  },
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Office/Remote",
    description:
      "Build and maintain our food delivery platform, mobile apps, and internal systems.",
    requirements: [
      "Programming experience",
      "Web technologies",
      "Problem-solving skills",
      "Team collaboration",
    ],
  },
  {
    title: "Operations Manager",
    type: "Full-time",
    location: "Office",
    description:
      "Oversee daily operations, manage teams, and ensure smooth delivery services.",
    requirements: [
      "Management experience",
      "Leadership skills",
      "Operations knowledge",
      "Decision-making ability",
    ],
  },
];

// company values
const valuesData = [
  {
    icon: faHeart,
    title: "Customer First",
    description: "We put our customers at the heart of everything we do",
  },
  {
    icon: faBalanceScale,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our dealings",
  },
  {
    icon: faLightbulb,
    title: "Innovation",
    description: "Constantly evolving to serve our customers better",
  },
  {
    icon: faTrophy,
    title: "Excellence",
    description: "Striving for the highest quality in food and service",
  },
];

// main
function Careers() {
  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.careersPage}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>
              Join Our <span>Food Family</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Be part of the fastest-growing food delivery network. We're
              looking for passionate individuals who love food, people, and
              creating amazing experiences.
            </p>
            <div className={classes.heroStats}>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faUsers} />
                <span>500+ Team Members</span>
              </div>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faUtensils} />
                <span>1000+ Restaurants</span>
              </div>
              <div className={classes.stat}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>50+ Cities</span>
              </div>
            </div>
          </div>
          <div className={classes.heroImage}>
            <div className={classes.heroImagePlaceholder}>
              <img src={HeroImage} alt="Team working together" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={classes.benefitsSection}>
          <h2 className={classes.sectionTitle}>Why Join Us?</h2>
          <p className={classes.sectionSubtitle}>
            Discover the amazing benefits of working with our food delivery
            family
          </p>
          <div className={classes.benefitsGrid}>
            {benefitsData.map((benefit, index) => (
              <div className={classes.benefitCard} key={index}>
                <div className={classes.benefitIcon}>
                  <FontAwesomeIcon icon={benefit.icon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className={classes.valuesSection}>
          <h2 className={classes.sectionTitle}>Our Values</h2>
          <p className={classes.sectionSubtitle}>
            The principles that guide our company and shape our culture
          </p>
          <div className={classes.valuesGrid}>
            {valuesData.map((value, index) => (
              <div className={classes.valueCard} key={index}>
                <div className={classes.valueIcon}>
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Openings Section */}
        <section className={classes.jobsSection}>
          <h2 className={classes.sectionTitle}>Open Positions</h2>
          <p className={classes.sectionSubtitle}>
            Explore exciting career opportunities and find your perfect role
          </p>
          <div className={classes.jobsGrid}>
            {jobOpenings.map((job, index) => (
              <div className={classes.jobCard} key={index}>
                <div className={classes.jobHeader}>
                  <div className={classes.jobIcon}>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className={classes.jobMeta}>
                    <span className={classes.jobType}>{job.type}</span>
                    <span className={classes.jobLocation}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <h3 className={classes.jobTitle}>{job.title}</h3>
                <p className={classes.jobDescription}>{job.description}</p>
                <div className={classes.jobRequirements}>
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className={classes.applyButton}>Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaContent}>
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Join thousands of food lovers who are already part of our growing
              family. Apply today and let's create amazing food experiences
              together!
            </p>
            <div className={classes.ctaButtons}>
              <button className={classes.ctaPrimaryButton}>
                View All Jobs
              </button>
              <button className={classes.ctaSecondaryButton}>Contact HR</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Careers;
