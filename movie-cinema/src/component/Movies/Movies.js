import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = () => {
  const datas = [
    {
      title: "Judul film 1",
      year: 2004,
      genre: "Comedy",
      poster: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Judul film 2",
      year: 2004,
      genre: "Romance",
      poster: "https://picsum.photos/200/300?random=2",
    },
    {
      title: "Judul film 3",
      year: 2004,
      genre: "Action",
      poster: "https://picsum.photos/200/300?random=3",
    },
    {
      title: "Judul film 4",
      year: 2004,
      genre: "Fanntasy",
      poster: "https://picsum.photos/200/300?random=4",
    },
    {
      title: "Judul film 5",
      year: 2004,
      genre: "Anime",
      poster: "https://picsum.photos/200/300?random=5",
    },
    {
      title: "Judul film 6",
      year: 2004,
      genre: "Animasi",
      poster: "https://picsum.photos/200/300?random=6",
    },
    {
      title: "Judul film 7",
      year: 2004,
      genre: "Sci-FI",
      poster: "https://picsum.photos/200/300?random=7",
    },
    {
      title: "Judul film 8",
      year: 2004,
      genre: "Horror",
      poster: "https://picsum.photos/200/300?random=8",
    },
    {
      title: "Judul film 9",
      year: 2004,
      genre: "Gore",
      poster: "https://picsum.photos/200/300?random=9",
    },
    {
      title: "Judul film 10",
      year: 2004,
      genre: "Comedy",
      poster: "https://picsum.photos/200/300?random=10",
    },
  ];
  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
