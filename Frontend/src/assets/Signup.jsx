import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${styles.wrapper}`}>
      <div className={styles.card}>
        <h2 className="mb-3 text-center text-primary">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label><strong>Name</strong></label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label><strong>Email</strong></label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label><strong>Password</strong></label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-pill">Register</button>
        </form>
        <p className="mt-3 text-center">Already have an account?</p>
        <Link to="/login" className="btn btn-outline-secondary w-100 rounded-pill">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
