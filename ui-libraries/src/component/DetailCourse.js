import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getCourse();
  });

  const getCourse = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setCourse(response.data);
  };

  return (
    <div>
      <section className="section mt-5">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <figure className="image is4by3">
                <img src={course.url} alt={course.name} />
              </figure>
            </div>
            <div class="column">
              <div class="content">
                <div class="title is-4">{course.name}</div>
                <p>{course.desc}</p>
                <div class="field p-5">
                  <button className="button is-primary is-fullwidth has-text-white mb-3">
                    Add 
                  </button>
                  <button className="button is-primary is-outlined is-fullwidth is-text-white">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailCourse;
