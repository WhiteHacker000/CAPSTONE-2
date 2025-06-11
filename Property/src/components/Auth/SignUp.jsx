import React, { useState } from "react";
import './Auth.css';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password, displayName);
      navigate("/");
    } catch (err) {
      setError("Failed to sign up: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign up</h2>
      <div className="subtitle">Sign up to continue</div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={displayName} onChange={e=>setDisplayName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <div className="remember-me">
          <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} id="remember" />
          <label htmlFor="remember" style={{marginLeft: "8px"}}>Remember me</label>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="extra-options">
        <div style={{margin: "1.5rem 0 0.5rem 0", color: "#888", fontSize: "0.95rem"}}>ACCESS QUICKLY</div>
        <div className="quick-access">
          <button type="button">Google</button>
          <button type="button">Linkedin</button>
          <button type="button">SSO</button>
        </div>
      </div>
      <div className="footer-link">
        Already have an account?
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignUp;