import { NavLink } from "react-router-dom";
import "./Navbar.css";

// React Router: NavLink automatically gets an "active" class on the matching route,
// which we use below to highlight the current page in the nav bar.
function Navbar() {
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " navlink--active" : "");

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
