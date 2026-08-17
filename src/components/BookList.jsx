import BookCard from "./BookCard";
import "./BookList.css";

// Reusable Component — receives the books array and the add-to-cart handler via Props
function BookList({ books, onAddToCart }) {
  return (
    <section className="book-list">
      {/* && Operator: "no results" message only shows when there are no books */}
      {books.length === 0 && <p className="empty-state">No books in this category yet.</p>}

      {/* Bootstrap grid: responsive columns — 1 per row on phones, up to 4 on large screens */}
      <div className="row g-4">
        {/* .map(): turn the books array into BookCard elements */}
        {books.map((book) => (
          <div key={book.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <BookCard book={book} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
