import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList } from "../../api.js";

const Movies = () => {
  // useState tergantung jenis datanya, string, array dll
  // const [nama, setNama] = useState("");

  const [datas, setDatas] = useState([]);

  // const handleClick = () => {
  //   const movie = {
  //     title: "Amazing Spiderman",
  //     year: 2012,
  //     genre: "Action",
  //     poster: "https://picsum.photos/200/300"
  //   };
  //   setDatas([...datas, movie]);
  // };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // menagkap data result api
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
        {/* <button onClick={handleClick}>Add Movie</button> */}
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
