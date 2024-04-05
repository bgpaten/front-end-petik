import React, { useEffect, useState } from "react";
import TopRated from "../TopRated/TopRated";
import "./TopRateds.css";
import { getTopRatedMovie} from "../../api.js";

const TopRateds = () => {

  const [datas, setDatas] = useState([]);


  useEffect(() => {
    getTopRatedMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <div className="top-rated-container">
        {datas.map((data, index) => {
          return (
            <TopRated
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
              vote_average={data.vote_average}
              vote_count={data.vote_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRateds;
