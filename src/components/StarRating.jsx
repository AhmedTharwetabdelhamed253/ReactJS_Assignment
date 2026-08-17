import "./StarRating.css";

// Reusable Component — receives "rating" via props
function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((starNumber) => (
        // Ternary Operator: filled star or empty star depending on rating
        <span key={starNumber} className={starNumber <= rating ? "star filled" : "star"}>
          {starNumber <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
