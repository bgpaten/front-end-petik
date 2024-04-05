import React from "react";
import "./TopRated.css";

const TopRated = (props) => {
  const { title, year, poster, vote_average, vote_count, id } = props;
  return (
    <div className="top-rated">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
      <h3 className="title">
        {title}
      </h3>
      <p className="year">Release Date : {year}</p>
      <p className="year">Vote Average : {vote_average}</p>
      <p className="year">Vote Count : {vote_count}</p>
    </div>
  );
};

export default TopRated;
