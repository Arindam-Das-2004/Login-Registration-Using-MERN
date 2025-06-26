import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${styles.container}`}>
      <div className={styles.card}>
        <h1 className="mb-4 text-primary">🎉 Welcome!</h1>
        <p className="mb-4 fs-5">You have successfully logged in.</p>
        <button className="btn btn-danger w-100 rounded-pill" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
