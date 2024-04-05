import React from "react";
import "./Popular.css";

const Popular = (props) => {
  const { title, year, poster, id } = props;
  return (
    <div className="popular">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
      <h3 className="title">{title}</h3>
      <p className="year">{year}</p>
    </div>
  );
};

export default Popular;
