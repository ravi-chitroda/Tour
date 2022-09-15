import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> &#8377; {price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
