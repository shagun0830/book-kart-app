import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import "../Account.css";
import axios from "axios";

export function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );

      if (data) {
        setIsLoggedIn(true);
        toast.success("Login Successfully", { duration: 1700 });
        navigate("/");
      }

      localStorage.setItem("userinfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
      toast.error("Invalid Email or Password", { duration: 1700 });
    }
  };

  return (
    <section id="login-section">
      <div className="login-container container-lr center">
        <Toaster
          toastOptions={{
            style: {
              border: "0",
              padding: "16px",
              color: "#fff",
              backgroundColor: "#d20e0f",
            },
          }}
        />
        <div className="login-head head-lr">
          <h1>
            Your <span>Account</span>
          </h1>
        </div>
        <div className="login-form form-lr center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="input-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="login-footer footer-lr">
              <p>
                Don't have an account? <Link to="/register">Create one.</Link>
              </p>
              <input type="submit" className="box-shadow" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
