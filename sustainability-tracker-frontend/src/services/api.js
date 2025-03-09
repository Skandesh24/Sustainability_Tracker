import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/actions/";
 // Ensure this is correct!

export const getActions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addAction = async (action) => {
    const response = await axios.post(API_URL, action);
    return response.data;
};

export const updateAction = async (id, action) => {
    const response = await axios.put(`${API_URL}${id}/`, action);
    return response.data;
};

export const deleteAction = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
