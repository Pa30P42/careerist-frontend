import axios from "axios";
axios.defaults.baseURL = `https://dry-ravine-95192.herokuapp.com`;

export const getPosts = async (page) => {
  const res = await axios.get(`/posts${page ? `?page=${page}` : ""}`);
  return res.data;
};

export const addPost = async (post) => {
  const res = await axios.post(`/posts`, post);
  return res.data;
};
