import "./CategoryFilter.css";

// Reusable Component — receives the category list, active category, and select handler via Props
function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-filter">
      {/* .map(): render a button for every category */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          // Ternary Operator: highlight the active button differently
          className={activeCategory === category ? "chip chip--active" : "chip"}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
