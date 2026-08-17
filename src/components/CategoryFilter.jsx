import "./CategoryFilter.css";

// Reusable Component — receives the category list, active category, and select handler via Props
function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    // Bootstrap: "d-flex flex-wrap justify-content-center" handles the responsive wrapping/centering,
    // the CSS Stylesheet ("chip", "chip--active") layers the store's own pill look on top.
    <div className="category-filter d-flex flex-wrap justify-content-center">
      {/* .map(): render a button for every category */}
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          // Ternary Operator: highlight the active button differently
          className={activeCategory === category ? "btn chip chip--active" : "btn chip"}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
