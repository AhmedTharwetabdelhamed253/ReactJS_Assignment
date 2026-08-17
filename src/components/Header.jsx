import "./Header.css";

// Reusable Component — title and subtitle are swappable via Props
function Header({ title, subtitle }) {
  return (
    <header className="header">
      <p className="header__eyebrow">Bookstore</p>
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;
