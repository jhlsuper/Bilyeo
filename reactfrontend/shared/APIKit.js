import axios from "axios";

let APIKit = axios.create({
  baseURL: "https://app.example.se",
  timeout: 10000,
});

export const SetClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer ${token}";
    return config;
  });
};

export default APIKit;
