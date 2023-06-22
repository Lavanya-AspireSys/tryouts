import React, { createContext, useContext, useState } from "react";

// Create the GlobalContext
export const GlobalContext = createContext();

// Create the GlobalContextProvider component
export const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addItemToOrderList = (item) => {
    setOrders([...orders, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const globalContextValue = {
    cart,
    orders,
    addItemToOrderList,
    clearCart,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
