import React, { useState,useEffect, useContext } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from "../../context/GlobalState";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = () => {
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => 
        {
          setUser(data);
         
        })
      .catch(error => toast("error","Invalid Credential"));
  }, []);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState('');
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState('');
  const { login } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (data) => {

    let obj = user.find(o => o.emailId === data.email && o.password == data.password);
    if(obj)
    {
    login();
    let storageData = JSON.stringify({userName:data.email.split("@")[0],emailId:data.email})
    sessionStorage.setItem("authData",storageData)
    toast("Logged in successfully")
    history.push('/')
    }
    else{
      alert("Invalid credential!")
    }
}
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email" id="Email"
            {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
          />
                          {errors.email && <p class = "form-error">Invalid Email</p>}

        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password" id="Password"
            {...register("password", {
              required: true
          })}
          />
           {errors.password && <p class = "form-error">Invalid Password</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
