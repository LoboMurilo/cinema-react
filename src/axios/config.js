import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://json-server-cinema.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default blogFetch;

