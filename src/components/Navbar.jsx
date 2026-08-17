import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

// React Router: NavLink automatically gets an "active" class on the matching route,
// which we use below to highlight the current page in the nav bar.
function Navbar() {
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " navlink--active" : "");

  // Context API: useTheme() reads { theme, toggleTheme } from ThemeContext
  // without any props being passed down from App.
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <NavLink to="/" className="site-nav__brand">
          📚 Fourth Season Books
        </NavLink>

        <div className="site-nav__links">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* Context API: toggling the theme here updates it everywhere it's read */}
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
