import { useState } from "react";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import BookList from "../components/BookList";
import CartDrawer from "../components/CartDrawer";
import useCart from "../hooks/useCart";
import books from "../data/books";

function Home() {
  // Built-in Hook (useState): tracks which category chip is active
  const [activeCategory, setActiveCategory] = useState("All");

  // Built-in Hook (useState): tracks whether the cart drawer is open
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Custom Hook: all cart logic (add/remove/totals) lives in one reusable place
  const { items, addToCart, removeFromCart, cartCount, cartTotal } = useCart();

  // Build the category list automatically from the data + an "All" option
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // Ternary Operator: filter the books by the active category
  const filteredBooks =
    activeCategory === "All" ? books : books.filter((book) => book.category === activeCategory);

  return (
    <>
      {/* Props: pass the title, subtitle and cart info down to Header */}
      <Header
        title="Fourth Season Books"
        subtitle="Handpicked titles for every kind of reader"
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Props: pass categories, the active category, and the select handler */}
      <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />

      {/* Props: pass the filtered book list and the "add to cart" handler */}
      <BookList books={filteredBooks} onAddToCart={addToCart} />

      {/* Styled Components: the whole drawer is styled with styled-components */}
      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </>
  );
}

export default Home;
