import React, { useEffect, useState } from "react";
import Layout from "../auth/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, setTrainerId] = useState(1);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setFile(URL.createObjectURL(image));
  };

  const getCourseById = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setName(response.data.name);
    setDesc(response.data.desc);
    setFile(response.data.url);
    setTrainerId(response.data.trainer_id);
  };

  useEffect(() => {
    getCourseById();
  }, [id]);

  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://api.sukmax.my.id/course/${id}`,
        {
          name: name,
          trainer_id: trainerId,
          desc: desc,
          url: file,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // redirect
      navigate("/table-course");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <h3 className="subtitle">Update Course</h3>
      <form onSubmit={updateCourse}>
        <div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                value={name}
                placeholder="Masukkan nama course"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Trainer Id</label>
            <div class="control">
              <input
                class="input"
                type="text"
                value={trainerId}
                placeholder="Text input"
                onChange={(e) => setTrainerId(e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                value={desc}
                placeholder="e.g. Hello world"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                onChange={loadImage}
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label"> Choose a file… </span>
              </span>
            </label>
          </div>

          {file ? (
            <figure className="image is-128x128">
              <img src={file} alt="preview-img" />
            </figure>
          ) : (
            ""
          )}

          <div class="field is-grouped mt-5">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button type="submit" class="button is-link is-light">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditCourse;
