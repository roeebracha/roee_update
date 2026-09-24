import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login() {
  const [form, setForm] = useState({email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    localStorage.setItem("token", data.token);
    navigate("/users");
  };
  return (
    <div className="auth-card">
      <h1>התחברות</h1>
      <p className="subtitle">טוב לראות אותך שוב</p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>אימייל</span>
          <input
            type="email"
            name="email"
            placeholder="roee@example.com"
            dir="ltr"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span>סיסמה</span>
          <input
            type="password"
            name="password"
            placeholder="••••••"
            dir="ltr"
            value={form.password}
            onChange={handleChange}
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-primary">
          התחבר
        </button>
      </form>

      <p className="switch">
        אין לך משתמש? <Link to="/register">להרשמה</Link>
      </p>
    </div>
  );
}
