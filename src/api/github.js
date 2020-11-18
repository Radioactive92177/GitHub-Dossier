import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    authorization: "token a12dc2865ac6f95b3cd2d48ad4900bca7afb310e",
  },
});
