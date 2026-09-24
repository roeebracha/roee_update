import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
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
      <h1>הרשמה</h1>
      <p className="subtitle">משתמש חדש נשמר ב-MongoDB</p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>שם מלא</span>
          <input
            type="text"
            name="name"
            placeholder="רועי כהן"
            value={form.name}
            onChange={handleChange}
          />
        </label>

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
            placeholder="לפחות 6 תווים"
            dir="ltr"
            value={form.password}
            onChange={handleChange}
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-primary">
          הרשמה
        </button>
      </form>

      <p className="switch">
        כבר רשום? <Link to="/login">להתחברות</Link>
      </p>
    </div>
  );
}
