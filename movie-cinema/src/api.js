import axios from 'axios';

const apikey = '8e465ff28280979967a70c1462d19f7f';

export const getMovieList = async () => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
    );

    return movie.data.results;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    throw error;
  }
};  

export const getDetailMovie = async (id) => {
    const movie = await axios.get (
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
    );
    return movie.data;
};

export const getPopularMovie = async () => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
    );

    return movie.data.results;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    throw error;
  }
};

export const getTopRatedMovie = async () => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
    );

    return movie.data.results;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    throw error;
  }
};  

// popular sama dengan home

// Top Ratted :
// Title
// release date
// poster
// vote average
// vote count

// Detail :
// menampilkan detail movie berdasarkan id : 
// Title
// poster
// overview