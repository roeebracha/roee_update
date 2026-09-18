import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-card">
      <h1>הרשמה</h1>
      <p className="subtitle">משתמש חדש נשמר ב-MongoDB</p>

      <form className="form">
        <label className="field">
          <span>שם מלא</span>
          <input type="text" name="name" placeholder="רועי כהן" />
        </label>

        <label className="field">
          <span>אימייל</span>
          <input type="email" name="email" placeholder="roee@example.com" dir="ltr" />
        </label>

        <label className="field">
          <span>סיסמה</span>
          <input type="password" name="password" placeholder="לפחות 6 תווים" dir="ltr" />
        </label>

        <p className="form-error">כאן תופיע השגיאה מהשרת</p>

        <button type="submit" className="btn btn-primary">הרשמה</button>
      </form>

      <p className="switch">
        כבר רשום? <Link to="/login">להתחברות</Link>
      </p>
    </div>
  );
}
