import axios from "axios";

export const getTopAnime = (callback) => {
  const api_url = import.meta.env.VITE_API_URL;
  axios
    .get(`${api_url}/top/anime?limit=5`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
