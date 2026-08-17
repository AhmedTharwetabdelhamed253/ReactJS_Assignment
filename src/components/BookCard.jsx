import StarRating from "./StarRating";
import "./BookCard.css";

// Reusable Component — receives book data via Props
function BookCard({ book }) {
  const { title, author, category, price, discount, rating, inStock, bestseller, color } = book;

  // Ternary Operator: calculate discounted price if a discount exists
  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <article className={`book-card ${!inStock ? "book-card--out" : ""}`}>
      <div className="book-cover" style={{ backgroundColor: color }}>
        <span className="book-cover__initial">{title.charAt(0)}</span>

        {/* && Operator: "Bestseller" badge only shows when true */}
        {bestseller && <span className="badge badge--bestseller">Bestseller</span>}

        {/* && Operator: "Out of stock" overlay only shows when the book is unavailable */}
        {!inStock && <div className="out-of-stock-overlay">Out of stock</div>}
      </div>

      <div className="book-info">
        <span className="book-category">{category}</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>

        <StarRating rating={rating} />

        <div className="book-price">
          {/* Ternary Operator: show the old crossed-out price only when there's a discount */}
          {discount > 0 ? (
            <>
              <span className="price-old">${price}</span>
              <span className="price-new">${finalPrice}</span>
              <span className="discount-tag">-{discount}%</span>
            </>
          ) : (
            <span className="price-new">${price}</span>
          )}
        </div>

        <button className="add-btn" disabled={!inStock}>
          {/* Ternary Operator: button text depends on stock availability */}
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default BookCard;
