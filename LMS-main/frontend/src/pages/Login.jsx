import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // <-- add this stylesheet

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  async function loginUser() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Fill all fields");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify({ name }));
      nav("/home");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={loginUser}>Login</button>

        <p>
          Don't have an account? <span onClick={() => nav("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
