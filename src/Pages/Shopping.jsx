// hooks
import { useState, useEffect, useContext } from "react";

// router
import { useNavigate } from "react-router";

// styles
import classes from "../Module/Shopping.module.css";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// context
import DataContext from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faBurger,
  faIceCream,
  faCoffee,
  faCakeCandles,
  faUtensils,
  faStar,
  faShoppingCart,
  faSearch,
  faTimes,
  faPlus,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// images
import Margherita from "../Assets/product/pizza1.webp";
import Pepperoni from "../Assets/product/pizza2.jpg";
import Classic from "../Assets/product/burger1.jpeg";
import Cheese from "../Assets/product/burger2.jpg";
import Chicken from "../Assets/product/burger3.jpg";
import Cake from "../Assets/product/cake1.webp";
import Cup from "../Assets/product/cake2.jpg";
import Cros from "../Assets/product/croissants.webp";
import Ice from "../Assets/product/vanillaIceCream.jpg";
import Sun from "../Assets/product/Chocolatessundae.jpg";
import Shake from "../Assets/product/StrawberryShake.jpg";
import Espresso from "../Assets/product/Espresso.jpg";
import Cappuccino from "../Assets/product/Cappuccino.jpg";
import Latte from "../Assets/product/Latte.webp";
import Special from "../Assets/product/special.jpg";
import Seafood from "../Assets/product/SeafoodPlatter.jpeg";

// Sample product data
const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    price: 12.99,
    rating: 4.9,
    description: "Classic Italian pizza with fresh mozzarella and basil",
    icon: Margherita,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "pizza",
    price: 14.99,
    rating: 4.8,
    description: "Traditional pepperoni with extra cheese",
    icon: Pepperoni,
  },
  {
    id: 3,
    name: "Classic Burger",
    category: "burger",
    price: 9.99,
    rating: 4.7,
    description: "Juicy beef patty with cheese and special sauce",
    icon: Classic,
  },
  {
    id: 4,
    name: "Cheese Burger",
    category: "burger",
    price: 11.99,
    rating: 4.8,
    description: "Double cheese with crispy bacon",
    icon: Cheese,
  },
  {
    id: 5,
    name: "Chicken Burger",
    category: "burger",
    price: 10.99,
    rating: 4.6,
    description: "Grilled chicken with fresh vegetables",
    icon: Chicken,
  },
  {
    id: 6,
    name: "Chocolate Cake",
    category: "bakery",
    price: 7.99,
    rating: 5.0,
    description: "Rich chocolate cake with creamy frosting",
    icon: Cake,
  },
  {
    id: 7,
    name: "Vanilla Cupcake",
    category: "bakery",
    price: 3.99,
    rating: 4.7,
    description: "Fluffy vanilla cupcake with buttercream",
    icon: Cup,
  },
  {
    id: 8,
    name: "Croissant",
    category: "bakery",
    price: 4.99,
    rating: 4.9,
    description: "Buttery French croissant",
    icon: Cros,
  },
  {
    id: 9,
    name: "Vanilla Ice Cream",
    category: "dessert",
    price: 5.99,
    rating: 4.8,
    description: "Creamy vanilla ice cream",
    icon: Ice,
  },
  {
    id: 10,
    name: "Chocolate Sundae",
    category: "dessert",
    price: 6.99,
    rating: 4.9,
    description: "Ice cream with chocolate sauce and toppings",
    icon: Sun,
  },
  {
    id: 11,
    name: "Strawberry Shake",
    category: "dessert",
    price: 5.49,
    rating: 4.7,
    description: "Fresh strawberry milkshake",
    icon: Shake,
  },
  {
    id: 12,
    name: "Espresso",
    category: "beverage",
    price: 3.99,
    rating: 4.8,
    description: "Strong Italian espresso",
    icon: Espresso,
  },
  {
    id: 13,
    name: "Cappuccino",
    category: "beverage",
    price: 4.99,
    rating: 4.9,
    description: "Classic cappuccino with foam",
    icon: Cappuccino,
  },
  {
    id: 14,
    name: "Latte",
    category: "beverage",
    price: 4.49,
    rating: 4.7,
    description: "Smooth latte with steamed milk",
    icon: Latte,
  },
  {
    id: 15,
    name: "Chef's Special",
    category: "special",
    price: 18.99,
    rating: 5.0,
    description: "Today's special dish by our chef",
    icon: Special,
  },
  {
    id: 16,
    name: "Seafood Platter",
    category: "special",
    price: 24.99,
    rating: 4.9,
    description: "Fresh seafood selection",
    icon: Seafood,
  },
];

const categories = [
  { id: "all", name: "All Items", icon: faUtensils },
  { id: "pizza", name: "Pizza", icon: faPizzaSlice },
  { id: "burger", name: "Burgers", icon: faBurger },
  { id: "bakery", name: "Bakery", icon: faCakeCandles },
  { id: "dessert", name: "Desserts", icon: faIceCream },
  { id: "beverage", name: "Beverages", icon: faCoffee },
  { id: "special", name: "Special", icon: faUtensils },
];

// main
function Shopping() {
  const navigate = useNavigate();
  // category from context
  const { selected } = useContext(DataContext);
  const { userState } = useContext(AuthContext);

  // fetch items
  const fetchItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  // states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState(selected || "");
  const [cart, setCart] = useState(fetchItems);
  const [showCart, setShowCart] = useState(false);

  // mount scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // local storage for cart
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // handle order button
  const handleOrder = () => {
    navigate("/order");
  };

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity
  const updateQuantity = (productId, change) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get cart count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <div className={classes.shoppingPage}>
        {/* Header Section */}
        <section className={classes.headerSection}>
          <div className={classes.headerContent}>
            <h1>Our Menu</h1>
            <p>Discover delicious food and order your favorites</p>
          </div>
        </section>

        {/* Search and Cart Bar */}
        <div className={classes.searchBar}>
          <div className={classes.searchContainer}>
            <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={classes.searchInput}
            />
            {searchQuery && (
              <button
                className={classes.clearSearch}
                onClick={() => setSearchQuery("")}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
          <button
            className={classes.cartButton}
            onClick={() => setShowCart(!showCart)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
            {getCartCount() > 0 && (
              <span className={classes.cartBadge}>{getCartCount()}</span>
            )}
          </button>
        </div>

        {/* Category Filter */}
        <div className={classes.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${classes.categoryButton} ${
                selectedCategory === category.id ? classes.active : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={classes.productsSection}>
          {filteredProducts.length > 0 ? (
            <div className={classes.productsGrid}>
              {/* card  */}
              {filteredProducts.map((product) => (
                <div key={product.id} className={classes.productCard}>
                  {/* icon */}
                  <div className={classes.productImage}>
                    <img src={product.icon} />
                  </div>
                  {/* name */}
                  <div className={classes.productInfo}>
                    <h3>{product.name}</h3>
                    {/* rating */}
                    <div className={classes.rating}>
                      <FontAwesomeIcon icon={faStar} />
                      <span>{product.rating}</span>
                    </div>
                    {/* description */}
                    <p className={classes.description}>{product.description}</p>
                    <div className={classes.productFooter}>
                      <span className={classes.price}>${product.price}</span>
                      <button
                        className={classes.addButton}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={classes.noResults}>
              <p>No products found matching your criteria</p>
            </div>
          )}
        </div>

        {/* Shopping Cart Sidebar */}
        <div
          className={`${classes.cartSidebar} ${showCart ? classes.show : ""}`}
        >
          {/* header */}
          <div className={classes.cartHeader}>
            <h2>Your Cart</h2>
            <button
              className={classes.closeCart}
              onClick={() => setShowCart(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* body */}
          <div className={classes.cartContent}>
            {cart.length > 0 ? (
              <>
                <div className={classes.cartItems}>
                  {cart.map((item) => (
                    <div key={item.id} className={classes.cartItem}>
                      {/* icon */}
                      <div className={classes.cartItemIcon}>
                        <img src={item.icon} draggable={false} />
                      </div>
                      {/* name */}
                      <div className={classes.cartItemInfo}>
                        <h4>{item.name}</h4>
                        <p className={classes.cartItemPrice}>${item.price}</p>
                      </div>
                      {/* quantity */}
                      <div className={classes.quantityControls}>
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      {/* remove */}
                      <button
                        className={classes.removeButton}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className={classes.cartSummary}>
                  {/* sub total */}
                  <div className={classes.totalRow}>
                    <span>Subtotal:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  {/* delivery */}
                  <div className={classes.totalRow}>
                    <span>Delivery:</span>
                    <span>$3.99</span>
                  </div>
                  {/* total */}
                  <div className={classes.totalRow}>
                    <strong>Total:</strong>
                    <strong>${(calculateTotal() + 3.99).toFixed(2)}</strong>
                  </div>
                  {/* button */}
                  <button
                    className={classes.checkoutButton}
                    onClick={
                      userState
                        ? handleOrder
                        : () => alert("You must login to buy products...!")
                    }
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className={classes.emptyCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>Your cart is empty</p>
                <button onClick={() => setShowCart(false)}>
                  Start Shopping
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Overlay */}
        {showCart && (
          <div
            className={classes.overlay}
            onClick={() => setShowCart(false)}
          ></div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Shopping;
