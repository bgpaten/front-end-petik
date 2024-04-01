import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // Menggunakan useParams unutk menangkap parameter id dari URL
  let { id } = useParams();

  return (
    <div>
      <h1>Detail</h1>
      <p>Parameter ID : {id}</p>
    </div>
  );
};

export default Detail;
