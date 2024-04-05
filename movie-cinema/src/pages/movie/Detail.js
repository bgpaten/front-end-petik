import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../api.js";

const Detail = () => {
  // Menggunakan useParams unutk menangkap parameter id dari URL
  let { id } = useParams();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menagkap data result api
    getDetailMovie(id).then((result) => {
      setDatas(result);
    });
  });

  // Mencari data movie yang sesuai dengan id
  // const movie = datas.find((data) => data.id == id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Detail Movie
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`}
            alt={datas.title}
            style={{
              width: "300px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {datas.title}
        </h2>
        <p style={{ textAlign: "justify", margin: "0 20px" }}>
          {datas.overview}
        </p>
      </div>
    </div>
  );
};

export default Detail;
