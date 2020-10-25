import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
  },
});
