import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } =
    useContext(GlobalContext);

    const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + (curr.price*curr.quantity), 0));
    const totalQuantity = Math.floor(cart?.reduce((sum, curr) => sum + (curr.quantity), 0));
  const total = subTotal;
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    addItemToOrderList({
      orderId: orders.length + 1,
      buyerId: 1,
      items: [...cart],
      price: total,
      address: "TNHB, Chennai-625012",
      deliveryDate: "20/07/2023",
      isDelivered: false,
    });
    clearCart();
    setIsOrdered(true);
  };
  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Total Quantity</h4>
              <span>{totalQuantity}</span>
            </div>
          
            <div className="custom-row">
              <h4>Total</h4>
              <span>${total}</span>
            </div>
          </div>
          <button className="item-btn" onClick={handlePay}>
            Pay ${total}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
