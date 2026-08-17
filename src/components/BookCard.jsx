import StarRating from "./StarRating";
// CSS Modules: classes are imported as a scoped object instead of global class names
import styles from "./BookCard.module.css";

// Reusable Component — receives book data and the add-to-cart handler via Props
function BookCard({ book, onAddToCart }) {
  const { title, author, category, price, discount, rating, inStock, bestseller, color } = book;

  // Ternary Operator: calculate discounted price if a discount exists
  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  const handleAddToCart = () => {
    onAddToCart({ id: book.id, title, price, finalPrice });
  };

  return (
    <article className={`${styles.bookCard} ${!inStock ? styles.bookCardOut : ""}`}>
      {/* Inline Styling: each book's cover color comes from data, so it has to be inline */}
      <div className={styles.bookCover} style={{ backgroundColor: color }}>
        <span className={styles.bookCoverInitial}>{title.charAt(0)}</span>

        {/* && Operator: "Bestseller" badge only shows when true */}
        {bestseller && <span className={`${styles.badge} ${styles.badgeBestseller}`}>Bestseller</span>}

        {/* && Operator: "Out of stock" overlay only shows when the book is unavailable */}
        {!inStock && <div className={styles.outOfStockOverlay}>Out of stock</div>}
      </div>

      <div className={styles.bookInfo}>
        <span className={styles.bookCategory}>{category}</span>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookAuthor}>{author}</p>

        <StarRating rating={rating} />

        <div className={styles.bookPrice}>
          {/* Ternary Operator: show the old crossed-out price only when there's a discount */}
          {discount > 0 ? (
            <>
              <span className={styles.priceOld}>${price}</span>
              <span className={styles.priceNew}>${finalPrice}</span>
              <span className={styles.discountTag}>-{discount}%</span>
            </>
          ) : (
            <span className={styles.priceNew}>${price}</span>
          )}
        </div>

        {/* Bootstrap "btn" utility combined with the module's own "add-btn" look */}
        <button className={`btn ${styles.addBtn}`} disabled={!inStock} onClick={handleAddToCart}>
          {/* Ternary Operator: button text depends on stock availability */}
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default BookCard;
