import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import BookList from "../components/BookList";
import CartDrawer from "../components/CartDrawer";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import books from "../data/books";

function Home() {
  // Built-in Hook (useState): tracks which category chip is active
  const [activeCategory, setActiveCategory] = useState("All");

  // Built-in Hook (useState): tracks whether the cart drawer is open
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Redux: useDispatch sends actions to the store, useSelector reads state from it.
  // The cart itself now lives entirely in the Redux store, not in local component state.
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

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

      {/* Redux: dispatch(addToCart(...)) updates the global cart state */}
      <BookList books={filteredBooks} onAddToCart={(book) => dispatch(addToCart(book))} />

      {/* Styled Components: the whole drawer is styled with styled-components */}
      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onRemove={(id) => dispatch(removeFromCart(id))}
      />
    </>
  );
}

export default Home;
