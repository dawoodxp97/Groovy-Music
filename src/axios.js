import axios from "axios";

const instance = axios.create({
  baseURL: "http://jiosaavnapiskd.herokuapp.com",
});

export default instance;
