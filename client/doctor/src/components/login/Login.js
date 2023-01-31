import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
   

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 200) {
      window.alert("login Successful");
    } else {
      alert(data.message);
      if (data.message === " login successful") {
        navigate("/about");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <Link to="/Signup">Not Registered?</Link>
        <button className="login-button" onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
