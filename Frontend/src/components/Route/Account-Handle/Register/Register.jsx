import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import "../Account.css";
import toast, { Toaster } from "react-hot-toast";
export function Register() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== ConfirmPassword) {
      setError("Password and Confirm Password must be same");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/api/users/register",
          {
            name,
            email,
            mobile,
            password,
          },
          config
        );

        if(data){
          toast.success("You Registered Successfully", {duration:2000});
          navigate("/login");
        }

        localStorage.setItem("userinfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        toast.error(error.response.data.message,{duration:1500} );
      }
    }
  };

  return (
    <section id="register-section">
      <div className="register-container container-lr center">
        <Toaster  toastOptions={{
            style: {
              border: "0",
              padding: "16px",
              color: "#fff",
              backgroundColor: "#d20e0f",
            },
          }}/>
        <div className="register-head head-lr">
          <h1>
            Create Your <span>Account</span>
          </h1>
        </div>
        <div className="register-form form-lr center">
          <form onSubmit={handleSubmit}>
          <input
              required
              type="text"
              className="input-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              className="input-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="text"
              className="input-control"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              required
              type="password"
              className="input-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type="password"
              className="input-control"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="register-footer footer-lr">
              <p>
                Have an account already? <Link to="/login">Sign in!</Link>
              </p>
              <input
                type="submit"
                className="box-shadow"
                value="Create an account"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
