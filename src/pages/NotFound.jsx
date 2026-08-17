import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <p className="notfound__code">404</p>
      <h1 className="notfound__title">Page Not Found</h1>
      <p className="notfound__text">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="notfound__link">
        ⬅ Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
