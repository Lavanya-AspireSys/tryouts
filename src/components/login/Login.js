// Login.js

import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import user from "../../mockData/users.json";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(GlobalContext);
  //const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = user.find(o => o.emailId === email && o.password == password);
    if(obj)
    {
    login();
    let storageData = JSON.stringify({userName:email.split("@")[0],emailId:email})
    localStorage.setItem("authData",storageData)
    //history.push('/')
    }
    else{
      alert("Invalid credential!")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
