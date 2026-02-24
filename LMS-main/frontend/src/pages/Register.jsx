import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";   // ensure styling applies

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const nav = useNavigate();

  async function registerUser() {
    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration Successful");
      nav("/login");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={registerUser}>Register</button>

        <p>
          Already have an account?{" "}
          <span style={{ color: "#4e54c8", cursor: "pointer", fontWeight: "bold" }} 
                onClick={() => nav("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
