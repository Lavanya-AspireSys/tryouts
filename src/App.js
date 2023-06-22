import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { GlobalContext } from "./context/GlobalState";
import HomePage from "./components/home/HomePage";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import ItemListByBrand from "./components/itemListByBrand/ItemListByBrand";
import Login from "./components/login/Login";
import 'react-toastify/dist/ReactToastify.css';
const UnAuthRoute = ({ component: Component,authUser, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        !authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

const AuthRoute = ({ component: Component,authUser, ...rest }) => {
  const { isLoggedIn } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

function App() {
  const { login } = useContext(GlobalContext);

  useEffect(() => {
    // Retrieve auth data from sessionStorage
    const getUserData = sessionStorage.getItem("authData");
    const isAuthenticated = getUserData != null;
    if(isAuthenticated)
    {
    login();
    }
  }, []);
	const { isLoggedIn } = useContext(GlobalContext);

  return (
    <div className="App">
      <Router>
        <div>
        <ToastContainer />

          <Navbar />
        </div>
        <Switch>
          <AuthRoute path="/item/:id" authUser={isLoggedIn} component={ItemDetail} />
          <AuthRoute path="/cart" authUser={isLoggedIn} component={Cart} />
          <AuthRoute path="/orders" authUser={isLoggedIn} component={Orders} />
          <AuthRoute path="/checkout" authUser={isLoggedIn} component={Checkout} />
          <AuthRoute path="/itemBrand/:brand" authUser={isLoggedIn} component={ItemListByBrand} />
          <UnAuthRoute path="/login" authUser={isLoggedIn} component={Login} />
          <AuthRoute authUser={isLoggedIn} component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
