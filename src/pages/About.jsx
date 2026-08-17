import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about">
      <p className="about__eyebrow">Our Story</p>
      <h1 className="about__title">About Fourth Season Books</h1>
      <p className="about__lead">
        Fourth Season Books is an independent bookstore built for readers who love discovering
        their next favorite title. We curate fiction, self-help, and non-fiction picks across
        every season of life.
      </p>

      <div className="about__grid">
        <div className="about__card">
          <h3>📖 Curated Picks</h3>
          <p>Every book on our shelves is hand-selected by our team of avid readers.</p>
        </div>
        <div className="about__card">
          <h3>🚚 Fast Delivery</h3>
          <p>We ship orders within 24 hours so your next read arrives quickly.</p>
        </div>
        <div className="about__card">
          <h3>💬 Community</h3>
          <p>Join our reading circles and swap recommendations with fellow book lovers.</p>
        </div>
      </div>

      <p className="about__footer">
        Have a question or want to get in touch? Visit our{" "}
        <Link to="/contact">Contact page</Link> — we'd love to hear from you.
      </p>
    </section>
  );
}

export default About;
