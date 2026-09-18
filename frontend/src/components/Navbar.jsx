import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="brand">👥 Users Flow</span>

        <nav className="nav-links">
          <NavLink to="/register">הרשמה</NavLink>
          <NavLink to="/login">התחברות</NavLink>
          <NavLink to="/users">משתמשים</NavLink>
        </nav>

        <button className="btn btn-ghost">התנתק</button>
      </div>
    </header>
  );
}
