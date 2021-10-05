
const StarRating = (props) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button id="rate-button"
            type="button"
            key={index}
            className={index <= (props.hover || (props.rating)) ? "on" : "off"}
            onClick={() => (props.setRating(index))}
            onMouseEnter={() => props.setHover(index)}
            onMouseLeave={() => props.setHover(props.rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
