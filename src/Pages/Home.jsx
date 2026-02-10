// hooks
import { useContext, useEffect, useRef } from "react";

// styles
import classes from "../Module/Home.module.css";

// gsap hook
import useHeroAnim from "../Animations/useHeroAnim";
import useSectionFeatured from "../Animations/useSectionFeatured";
import useExplore from "../Animations/useExplore";
import useXPart from "../Animations/useXPart";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// context
import DataContext from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";

// router
import { useNavigate } from "react-router";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPizzaSlice,
  faBurger,
  faIceCream,
  faCoffee,
  faCakeCandles,
  faStar,
  faTruck,
  faClock,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

// images
import HeroImage from "../Assets/image/hero.jpg";
import pizza from "../Assets/image/pizza.jpg";
import burger from "../Assets/image/burg.jpg";
import cake from "../Assets/image/cake.jpg";

// data
const featuredData = [
  {
    icon: faTruck,
    title: "Fast Delivery",
    description: "Get your food delivered within 30 minutes",
  },
  {
    icon: faShieldHalved,
    title: "Quality Assured",
    description: "Fresh ingredients and hygiene guaranteed",
  },
  {
    icon: faClock,
    title: "24/7 Service",
    description: "Order anytime, we're always available",
  },
];

// category
const categoriesData = [
  {
    icon: faPizzaSlice,
    title: "Pizza",
    description: "Authentic Italian pizzas",
  },
  { icon: faBurger, title: "Burgers", description: "Juicy gourmet burgers" },
  {
    icon: faIceCream,
    title: "Desserts",
    description: "Sweet treats & ice cream",
  },
  { icon: faCoffee, title: "Beverages", description: "Coffee, tea & drinks" },
  { icon: faCakeCandles, title: "Bakery", description: "Fresh baked goods" },
  { icon: faUtensils, title: "Special", description: "Chef's recommendations" },
];

// trending product
const trendingData = [
  {
    name: "Margherita Pizza",
    image: pizza,
    rating: 4.9,
    price: 12.99,
    description: "Classic Italian pizza with fresh mozzarella and basil",
  },
  {
    name: "Classic Burger",
    image: burger,
    rating: 4.8,
    price: 9.99,
    description: "Juicy beef patty with cheese, lettuce and special sauce",
  },
  {
    name: "Chocolate Cake",
    image: cake,
    rating: 5.0,
    price: 7.99,
    description: "Rich chocolate cake with creamy frosting and sprinkles",
  },
];

// main
function Home() {
  // reference
  const content = useRef(null);
  const featured = useRef(null);
  const explore = useRef(null);
  const xPart = useRef(null);

  // context
  const { setSelected } = useContext(DataContext);
  const { userState } = useContext(AuthContext);

  // mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // navigation
  const navigate = useNavigate();

  const handleClick = (e) => {
    const categoryTitle = e.currentTarget.querySelector("h3").innerText;
    setSelected(categoryTitle);
    navigate("/shop");
  };

  const handleOrder = () => {
    navigate("/order");
  };

  const handleOrderClick = (e) => {
    const target = e.target.parentElement.parentElement;
    const text = target.querySelector("h3").innerText.toLowerCase();
    setSelected(text);
    navigate("/shop");
  };

  // animation
  useHeroAnim(
    {
      one: ".text",
      two: ".buttons",
      three: ".heroImage",
    },
    content,
  );

  useSectionFeatured(
    {
      one: ".fText",
      two: ".fBox",
    },
    featured,
  );

  useExplore(
    {
      one: ".eText",
      two: ".eBox",
    },
    explore,
  );

  useXPart(xPart);

  return (
    <>
      <div className={classes.homePage}>
        <Navbar />
        {/* Hero Section */}
        <section className={classes.heroSection} ref={content}>
          {/* heading texts */}
          <div className={classes.heroContent}>
            <h1 className={`${classes.heroTitle} text`}>
              Delicious Food <span>Delivered</span> to Your Door
            </h1>

            {/* sub heading */}
            <p className={`${classes.heroSubtitle} text`}>
              Fresh ingredients, authentic flavors, and culinary excellence.
              Experience the best food delivery service in town.
            </p>

            {/* buttons */}
            <div className={`${classes.heroButtons} buttons`}>
              <button
                className={classes.primaryButton}
                onClick={
                  userState
                    ? handleOrder
                    : () => alert("You must login to order something...!")
                }
              >
                Order Now
              </button>
              <button
                className={classes.secondaryButton}
                onClick={() => navigate("/shop")}
              >
                View Menu
              </button>
            </div>
          </div>

          {/* icon style image */}
          <div className={`heroImage ${classes.heroImage}`}>
            <div className={classes.heroImagePlaceholder}>
              <img
                src={HeroImage}
                loading="lazy"
                alt="Hero food image"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </section>

        {/* Featured Dishes Section */}
        <section className={classes.featuredSection} ref={featured}>
          {/* headings */}
          <h2 className={`fText ${classes.sectionTitle}`}>Popular Dishes</h2>
          <p className={`fText ${classes.sectionSubtitle}`}>
            Our customers' favorite meals
          </p>

          {/* cards */}
          <div className={`fBox ${classes.dishesGrid}`}>
            {trendingData.map((dish, index) => (
              <div className={classes.dishCard} key={index}>
                {/* head */}
                <div className={classes.dishImagePlaceholder}>
                  <img src={dish.image} loading="lazy" alt={dish.name} />
                </div>

                {/* body */}
                <div className={classes.dishInfo}>
                  <h3>{dish.name}</h3>

                  {/* rating star */}
                  <div className={classes.rating}>
                    {Array.from({ length: Math.floor(dish.rating) }).map(
                      (_, i) => (
                        <FontAwesomeIcon icon={faStar} key={i} />
                      ),
                    )}
                    <span>({dish.rating})</span>
                  </div>

                  {/* description */}
                  <p>{dish.description}</p>
                  <div className={classes.dishFooter}>
                    <span className={classes.price}>${dish.price}</span>
                    <button
                      className={classes.addButton}
                      onClick={handleOrderClick}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className={classes.categoriesSection} ref={explore}>
          {/* heading */}
          <h2 className={`eText ${classes.sectionTitle}`}>Explore Our Menu</h2>
          <p className={`eText ${classes.sectionSubtitle}`}>
            Choose from our wide variety of delicious categories
          </p>

          {/* cards */}
          <div className={`eBox ${classes.categoriesGrid}`}>
            {categoriesData.map((category, index) => (
              <div
                className={`${classes.categoryCard}`}
                key={index}
                onClick={handleClick}
              >
                <div className={classes.categoryIcon}>
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className={classes.featuresSection} ref={xPart}>
          {featuredData.map((feature, index) => (
            <div className={classes.featureCard} key={index}>
              <div className={classes.featureIcon}>
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaContent}>
            <h2>Ready to Order?</h2>
            <p>Download our app and get exclusive deals and faster checkout</p>

            {/* action buttons */}
            <div className={classes.ctaButtons}>
              <button className={classes.ctaPrimaryButton}>Download App</button>
              <button className={classes.ctaSecondaryButton}>
                Order Online
              </button>
            </div>
          </div>
        </section>

        {/* footer  */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
