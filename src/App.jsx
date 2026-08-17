import { useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import BookList from "./components/BookList";
import books from "./data/books";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Build the category list automatically from the data + an "All" option
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // Ternary Operator: filter the books by the active category
  const filteredBooks =
    activeCategory === "All" ? books : books.filter((book) => book.category === activeCategory);

  return (
    <div className="app">
      {/* Props: pass the title and subtitle down to Header */}
      <Header title="Fourth Season Books" subtitle="Handpicked titles for every kind of reader" />

      {/* Props: pass categories, the active category, and the select handler */}
      <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />

      {/* Props: pass the filtered book list */}
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
