import React from 'react'
import { StarRatingProps } from '../utils/types';

const StarRating = ({rating,numReview=1}:StarRatingProps) => {
    const roundedRating = Math.round(rating * 2) / 2;

    // Create an array of stars based on the rating
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<span key={i} className="text-yellow-600">&#9733;</span>);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
      }
    }
    // console.log(roundedRating);
  
    return (
      <div className="flex justify-center ">
        <div className="stars">{stars}</div>
        <div className="num-reviews">&#40;{numReview}&#41;</div>
      </div>
    );
}

export default StarRating