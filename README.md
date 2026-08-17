# Fourth Season Books — React Project

A small online bookstore built to satisfy the ReactJS assignments. Assignment 1 covered
components, props, and core JS operators inside JSX. **Assignment 2** (this version) adds
Hooks, a Custom Hook, all four styling approaches, and Bootstrap.

## Run it

```bash
npm install
npm run dev
```

## Project structure

```
src/
  App.jsx                        → Main component: holds state, wires everything together
  data/books.js                  → Book data (single source of truth)
  hooks/
    useLocalStorage.js           → Custom Hook: syncs state with localStorage
    useCart.js                   → Custom Hook: cart logic, built on useLocalStorage
  components/
    Header.jsx / Header.css              → Title + cart button (Bootstrap navbar, Inline Styling)
    CategoryFilter.jsx / CategoryFilter.css  → Category chips (Bootstrap + CSS Stylesheet)
    BookList.jsx / BookList.css          → Bootstrap responsive grid (row/col)
    BookCard.jsx / BookCard.module.css   → CSS Modules + Inline Styling
    StarRating.jsx / StarRating.css      → Star rating display (CSS Stylesheet)
    CartDrawer.jsx                       → Slide-out cart, 100% Styled Components
```

## Assignment 2 requirements — where each one lives

| Requirement | Where it's used |
|---|---|
| **React Hooks** | `useState` in `App.jsx` (active category, cart-drawer open state); `useEffect` inside the custom hooks |
| **Two+ different hooks** | `useState` + `useEffect`, both used across the app and inside `useLocalStorage`/`useCart` |
| **Custom Hook** | `hooks/useLocalStorage.js` (generic persistence) and `hooks/useCart.js` (cart logic, built on top of it) — used inside `App.jsx` |
| **Inline Styling** | `BookCard.jsx` (dynamic cover color) and `Header.jsx` (cart badge color) |
| **CSS Stylesheet** | `Header.css`, `CategoryFilter.css`, `BookList.css`, `StarRating.css`, `App.css`, `index.css` |
| **CSS Modules** | `BookCard.module.css`, imported and used as `styles.xxx` inside `BookCard.jsx` |
| **Styled Components** | `CartDrawer.jsx` — every element in the drawer is a `styled.xxx` component |
| **Bootstrap installed & used** | `bootstrap` in `package.json`, imported once in `main.jsx`; classes used in `Header` (navbar, buttons, badge), `CategoryFilter` (flex utilities), `BookList` (`row`/`col` grid), `App` (`container`), `BookCard` (`btn`) |
| **Responsive layout** | Bootstrap's grid in `BookList.jsx` (1 column on phones → 4 on large screens) plus the `container` in `App.jsx` |
| **Organized files** | `components/`, `hooks/`, and `data/` are kept in separate folders |

## New feature: Shopping cart

- "Add to Cart" on each book now actually adds the book to a cart.
- The cart persists across page refreshes (via `useLocalStorage`).
- A cart button in the header (Bootstrap) shows the item count and opens a slide-out
  drawer (Styled Components) where items can be reviewed, removed, and totalled.
- The browser tab title updates with the live cart count (`useEffect` side effect).

## Where Assignment 1 concepts still live

| Concept | Where it's used |
|---|---|
| **Reusable Components** | `BookCard`, `StarRating`, `CategoryFilter`, `CartDrawer` |
| **Props** | Every component receives its data/handlers from its parent |
| **Ternary Operator (`? :`)** | Discounted price, add-to-cart button text, active category styling, filled/empty stars, cart empty state |
| **`&&` Operator** | "Bestseller" badge, "Out of stock" overlay, "No results" message, cart footer |
| **`.map()`** | Book list, category chips, star rating, cart item list |
