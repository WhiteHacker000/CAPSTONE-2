import React, { useState } from "react";
import './Auth.css';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to sign in: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      {error && <div style={{color: "red"}}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
