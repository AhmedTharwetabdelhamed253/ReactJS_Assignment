import "./Header.css";

// Reusable Component — title, subtitle and cart info are all swappable via Props
function Header({ title, subtitle, cartCount, onCartClick }) {
  // Inline Styling: the badge's background color is computed at render time,
  // so it's applied directly as a style object rather than a CSS class.
  const badgeStyle = {
    backgroundColor: cartCount > 0 ? "#c9a227" : "#a39c8c",
    transition: "background-color 0.2s ease",
  };

  return (
    // Bootstrap: navbar component gives us a responsive top bar for free
    <header className="header">
      <nav className="navbar navbar-light">
        <div className="container-fluid px-0 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-dark position-relative" onClick={onCartClick}>
            🛒 Cart
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={badgeStyle}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <p className="header__eyebrow">Bookstore</p>
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;
