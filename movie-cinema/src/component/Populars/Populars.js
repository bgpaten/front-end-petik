import React, { useEffect, useState } from "react";
import Popular from "../Popular/Popular";
import "./Populars.css";
import { getPopularMovie } from "../../api.js";

const Populars = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menagkap data result api
    getPopularMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <div className="populars-container">
        {datas.map((data, index) => {
          return (
            <Popular
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Populars;
