import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

/**
 * Custom Hook: useCart
 *
 * Encapsulates all the shopping-cart logic (add, remove, totals) so that
 * components never have to touch the cart's internal shape directly.
 *
 * Composes another custom hook (useLocalStorage) and a built-in hook (useEffect),
 * which satisfies the "use hooks inside a custom hook" requirement.
 */
function useCart() {
  const [items, setItems] = useLocalStorage("bookstore-cart", []);

  // useEffect: side effect that keeps the browser tab title in sync with the cart
  useEffect(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    document.title = count > 0 ? `(${count}) Fourth Season Books` : "Fourth Season Books";
  }, [items]);

  const addToCart = (book) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === book.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + item.finalPrice * item.quantity, 0);

  return { items, addToCart, removeFromCart, clearCart, cartCount, cartTotal };
}

export default useCart;
