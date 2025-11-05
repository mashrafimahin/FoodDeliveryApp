import { useState, useEffect } from "react";
import classes from "../Module/Order.module.css";

function Order() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  useEffect(() => {
    // Fetch cart from localStorage
    const fetchCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCart(fetchCart);
  }, []);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate delivery fee
  const deliveryFee = 3.99;

  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee;
  };

  // Handle payment method change
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  // Handle order placement
  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // Validate delivery address for cash on delivery
    if (paymentMethod === "cash") {
      const { name, phone, address, city, zipCode } = deliveryAddress;
      if (!name || !phone || !address || !city || !zipCode) {
        alert("Please fill in all delivery address fields");
        return;
      }
    }

    // Here you would typically send the order to a backend
    alert("Order placed successfully!");
    // Clear cart after order
    localStorage.removeItem("shoppingCart");
    setCart([]);
  };

  return (
    <div className={classes.orderPage}>
      <div className={classes.container}>
        <h1 className={classes.pageTitle}>Order Summary</h1>

        {cart.length > 0 ? (
          <>
            {/* Product Overview */}
            <div className={classes.orderSection}>
              <h2 className={classes.sectionTitle}>Your Order</h2>
              <div className={classes.productList}>
                {cart.map((item) => (
                  <div key={item.id} className={classes.productItem}>
                    <div className={classes.productImage}>
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <div className={classes.productDetails}>
                      <h3 className={classes.productName}>{item.name}</h3>
                      <p className={classes.productDescription}>
                        {item.description}
                      </p>
                      <div className={classes.productPrice}>
                        <span className={classes.quantity}>
                          Qty: {item.quantity}
                        </span>
                        <span className={classes.price}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className={classes.totalSection}>
              <div className={classes.totalBreakdown}>
                <div className={classes.totalRow}>
                  <span>Subtotal:</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className={classes.totalRow}>
                  <span>Delivery:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className={classes.totalRow}>
                  <strong>Total:</strong>
                  <strong>${calculateTotal().toFixed(2)}</strong>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className={classes.paymentSection}>
              <h2 className={classes.sectionTitle}>Payment Method</h2>
              <div className={classes.paymentOptions}>
                <label className={classes.paymentOption}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => handlePaymentChange("card")}
                  />
                  <span className={classes.paymentLabel}>
                    Credit/Debit Card
                  </span>
                </label>
                <label className={classes.paymentOption}>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => handlePaymentChange("paypal")}
                  />
                  <span className={classes.paymentLabel}>PayPal</span>
                </label>
                <label className={classes.paymentOption}>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => handlePaymentChange("cash")}
                  />
                  <span className={classes.paymentLabel}>Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Delivery Address - Only show for Cash on Delivery */}
            {paymentMethod === "cash" && (
              <div className={classes.addressSection}>
                <h2 className={classes.sectionTitle}>Delivery Address</h2>
                <div className={classes.addressForm}>
                  <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                      <label className={classes.formLabel}>Full Name</label>
                      <input
                        type="text"
                        className={classes.formInput}
                        value={deliveryAddress.name}
                        onChange={(e) =>
                          setDeliveryAddress({
                            ...deliveryAddress,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className={classes.formGroup}>
                      <label className={classes.formLabel}>Phone Number</label>
                      <input
                        type="tel"
                        className={classes.formInput}
                        value={deliveryAddress.phone}
                        onChange={(e) =>
                          setDeliveryAddress({
                            ...deliveryAddress,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className={classes.formGroup}>
                    <label className={classes.formLabel}>Address</label>
                    <textarea
                      className={classes.formTextarea}
                      value={deliveryAddress.address}
                      onChange={(e) =>
                        setDeliveryAddress({
                          ...deliveryAddress,
                          address: e.target.value,
                        })
                      }
                      placeholder="Enter your full address"
                      rows="3"
                      required
                    />
                  </div>
                  <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                      <label className={classes.formLabel}>City</label>
                      <input
                        type="text"
                        className={classes.formInput}
                        value={deliveryAddress.city}
                        onChange={(e) =>
                          setDeliveryAddress({
                            ...deliveryAddress,
                            city: e.target.value,
                          })
                        }
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div className={classes.formGroup}>
                      <label className={classes.formLabel}>ZIP Code</label>
                      <input
                        type="text"
                        className={classes.formInput}
                        value={deliveryAddress.zipCode}
                        onChange={(e) =>
                          setDeliveryAddress({
                            ...deliveryAddress,
                            zipCode: e.target.value,
                          })
                        }
                        placeholder="Enter ZIP code"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Place Order Button */}
            <div className={classes.actionSection}>
              <button
                className={classes.placeOrderButton}
                onClick={handlePlaceOrder}
                disabled={!paymentMethod}
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className={classes.emptyOrder}>
            <p>Your cart is empty. Add some items to place an order.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
