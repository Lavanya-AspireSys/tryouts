import React, { useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { logout } = useContext(GlobalContext);

  const history = useHistory();
  let getData =JSON.parse( localStorage.getItem("authData"));
  console.log("getData",getData)
 function logoutData(){
  logout();
  localStorage.clear()
  history.push('/login')
  }
  function login(){
    history.push('/login')
  }
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Aspire Shop</h2>
      </Link>
      {typeof getData !=null && typeof getData !=undefined && getData !=null && <ul className="navbar-ul">
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
      
        <button className="nav-btn">Hi, {getData?.userName}</button>
      </ul>}
      <ul>
      {typeof getData !=null && typeof getData !=undefined && getData !=null ?
      <button className="nav-btn" onClick={() => logoutData()}>logout</button>:
      <button className="nav-btn" onClick={() => login()}>login</button>
      }
      </ul>
    </div>
  );
};

export default Navbar;