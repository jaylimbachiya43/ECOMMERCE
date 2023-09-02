import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const className = i <= rating ? "text-yellow-500" : "text-gray-300";
    stars.push(<span key={i} className={`text-xl ${className}`}>★</span>);
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
