import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key='6a088a441363174b68537fb6776d1629';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=6a088a441363174b68537fb6776d1629';

const getTrendingVidoes = axios.get(movieByGenreBaseURL);
const getMovieByGenreId = (id) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}` + "&with_genres=" + id);
export default { getTrendingVidoes,getMovieByGenreId };
