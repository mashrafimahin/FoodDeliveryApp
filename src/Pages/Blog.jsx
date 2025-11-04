// hooks
import { useEffect } from "react";

// styles
import classes from "../Module/Blog.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// images
import pizza from "../Assets/image/pizza.jpg";
import burger from "../Assets/image/burg.jpg";
import cake from "../Assets/image/cake.jpg";
import menu from "../Assets/image/menu.jpg";

// blog data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Perfect Pizza Making",
    excerpt:
      "Discover the secrets behind crafting the perfect pizza dough, selecting the finest ingredients, and achieving that crispy crust everyone loves.",
    image: pizza,
    author: "Chef Maria",
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Recipes",
  },
  {
    id: 2,
    title: "Burger Revolution: Modern Takes on Classics",
    excerpt:
      "Explore how contemporary chefs are reinventing the humble burger with innovative ingredients and techniques that surprise and delight.",
    image: burger,
    author: "Chef Alex",
    date: "November 12, 2024",
    readTime: "4 min read",
    category: "Trends",
  },
  {
    id: 3,
    title: "Sweet Indulgences: Cake Decorating Mastery",
    excerpt:
      "From simple buttercream roses to intricate fondant sculptures, learn the techniques that turn cakes into edible works of art.",
    image: cake,
    author: "Chef Sarah",
    date: "November 10, 2024",
    readTime: "6 min read",
    category: "Baking",
  },
  {
    id: 4,
    title: "Farm to Table: Seasonal Menu Highlights",
    excerpt:
      "Celebrating the freshest seasonal ingredients and how they inspire our ever-changing menu offerings throughout the year.",
    image: menu,
    author: "Chef David",
    date: "November 8, 2024",
    readTime: "3 min read",
    category: "Seasonal",
  },
  {
    id: 5,
    title: "Coffee Culture: Brewing the Perfect Cup",
    excerpt:
      "A deep dive into coffee origins, brewing methods, and the art of creating the ultimate coffee experience for our customers.",
    image: pizza, // Using pizza as placeholder for coffee image
    author: "Barista James",
    date: "November 5, 2024",
    readTime: "4 min read",
    category: "Beverages",
  },
  {
    id: 6,
    title: "Sustainable Dining: Our Green Initiative",
    excerpt:
      "How we're reducing food waste, sourcing locally, and implementing eco-friendly practices in our kitchen and operations.",
    image: burger, // Using burger as placeholder
    author: "Chef Maria",
    date: "November 3, 2024",
    readTime: "5 min read",
    category: "Sustainability",
  },
];

// main
function Blog() {
  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.blogPage}>
        <Navbar />

        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>
              Foodie <span>Stories</span> & Insights
            </h1>
            <p className={classes.heroSubtitle}>
              Discover culinary adventures, expert tips, and behind-the-scenes
              stories from our passionate food community.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className={classes.blogSection}>
          <div className={classes.container}>
            {/* Section Header */}
            <div className={classes.sectionHeader}>
              <h2 className={classes.sectionTitle}>Latest Articles</h2>
              <p className={classes.sectionSubtitle}>
                Stay updated with our latest food stories and culinary insights
              </p>
            </div>

            {/* Blog Grid */}
            <div className={classes.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} className={classes.blogCard}>
                  {/* Blog Image */}
                  <div className={classes.blogImage}>
                    <img src={post.image} alt={post.title} />
                    <div className={classes.categoryBadge}>{post.category}</div>
                  </div>

                  {/* Blog Content */}
                  <div className={classes.blogContent}>
                    <div className={classes.blogMeta}>
                      <div className={classes.metaItem}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>{post.author}</span>
                      </div>
                      <div className={classes.metaItem}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{post.date}</span>
                      </div>
                      <div className={classes.metaItem}>
                        <FontAwesomeIcon icon={faClock} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className={classes.blogTitle}>{post.title}</h3>
                    <p className={classes.blogExcerpt}>{post.excerpt}</p>

                    <div className={classes.blogFooter}>
                      <button className={classes.readMoreBtn}>
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={classes.newsletterSection}>
          <div className={classes.container}>
            <div className={classes.newsletterContent}>
              <h2>Stay in the Loop</h2>
              <p>
                Subscribe to our newsletter for the latest recipes, food trends,
                and exclusive culinary content delivered to your inbox.
              </p>
              <div className={classes.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={classes.emailInput}
                />
                <button className={classes.subscribeBtn}>Subscribe</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
