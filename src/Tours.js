import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  console.log("tours", tours);
  return (
    <section>
      <div className="title">
        <h2>World Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
