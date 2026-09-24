import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout =() =>{
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="brand">👥 Users Flow</span>

        <nav className="nav-links">
          <NavLink to="/register">הרשמה</NavLink>
          <NavLink to="/login">התחברות</NavLink>
          <NavLink to="/users">משתמשים</NavLink>
        </nav>

<button className="btn btn-ghost" onClick={handleLogout}>התנתק</button>
      </div>
    </header>
  );
}
