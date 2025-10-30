import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

export const getTopAnime = (callback) => {
  axios
    .get(`${api_url}/top/anime`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopManga = (callback) => {
  axios
    .get(`${api_url}/top/manga`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAnime = (callback) => {
  axios
    .get(`${api_url}/anime`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAnimeFullById = (id, callback) => {
  axios
    .get(`${api_url}/anime/${id}/full`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCharacterById = (id, callback) => {
  axios
    .get(`${api_url}/anime/${id}/characters`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
