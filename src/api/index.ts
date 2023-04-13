import axios from "axios";

export const API = 'http://localhost:3500';

export const getAll = (url: string) => {
    return axios
        .get(`${API}/${url}`)
        .then(response => response.data)
}