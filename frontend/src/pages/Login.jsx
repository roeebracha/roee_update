import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-card">
      <h1>התחברות</h1>
      <p className="subtitle">טוב לראות אותך שוב</p>

      <form className="form">
        <label className="field">
          <span>אימייל</span>
          <input type="email" name="email" placeholder="roee@example.com" dir="ltr" />
        </label>

        <label className="field">
          <span>סיסמה</span>
          <input type="password" name="password" placeholder="••••••" dir="ltr" />
        </label>

        <p className="form-error">כאן תופיע השגיאה מהשרת</p>

        <button type="submit" className="btn btn-primary">התחבר</button>
      </form>

      <p className="switch">
        אין לך משתמש? <Link to="/register">להרשמה</Link>
      </p>
    </div>
  );
}
