# Fourth Season Books — React Project

A simple online bookstore built to satisfy the ReactJS assignment requirements.

## Run it

```bash
npm install
npm run dev
```

## Project structure

```
src/
  App.jsx                    → Main component: holds state, wires everything together
  data/books.js               → Book data (single source of truth)
  components/
    Header.jsx                → Page title (Props)
    CategoryFilter.jsx        → Category filter buttons (map + ternary)
    BookList.jsx               → Renders the list of books (map + &&)
    BookCard.jsx                → A single book card (props + ternary + &&)
    StarRating.jsx              → Star rating display (map + ternary)
```

## Where each required concept is used

| Concept | Where it's used |
|---|---|
| **Reusable Components** | `BookCard`, `StarRating`, `CategoryFilter` are all independent components reused for every book/category |
| **Props** | `App` passes data down to every child component (`title`, `subtitle`, `books`, `book`, `rating`, `categories`...) |
| **Ternary Operator (`? :`)** | Discounted price calculation, add-to-cart button text, active category styling, filled/empty stars |
| **`&&` Operator** | "Bestseller" badge, "Out of stock" overlay, "No results" message |
| **`.map()`** | Rendering the book list, rendering categories, drawing the five stars |

## Features

- Filter books by category (Fiction / Self-Help / Science).
- Automatic discounted price when a book has a discount.
- "Out of stock" overlay for unavailable books.
- "Bestseller" badge for featured books.
- Clean layout with a Fraunces display font and Inter for body text.
