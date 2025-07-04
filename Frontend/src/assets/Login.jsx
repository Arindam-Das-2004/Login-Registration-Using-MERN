import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("Login response:", result.data);
        if (result.data === "Success") {
          navigate("/home"); // Navigate to home if login is successful
        } else {
          alert(result.data); // Show error message (like incorrect password)
        }
      })
      .catch((err) => {
        console.error("Login Failed:", err);
        alert("An error occurred during login. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

        <p className="mt-2">Don't Have an Account?</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
