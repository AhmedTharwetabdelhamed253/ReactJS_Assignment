import BookCard from "./BookCard";
import "./BookList.css";

// Reusable Component — receives the books array via Props
function BookList({ books }) {
  return (
    <section className="book-list">
      {/* && Operator: "no results" message only shows when there are no books */}
      {books.length === 0 && <p className="empty-state">No books in this category yet.</p>}

      <div className="book-grid">
        {/* .map(): turn the books array into BookCard elements */}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookList;
