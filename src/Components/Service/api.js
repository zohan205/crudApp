import axios from "axios";

const url = "http://localhost:5000/users"

export const getUsers = async () =>{
    return await axios.get(url);
}

export const addUser = async (user) =>{
    return await axios.post(url, user);
}

export const getEditUsers = async (id) =>{
    return await axios.get(`${url}/${id}`);
}
export const editUser = async (id,user) =>{
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async (id,user) =>{
    return await axios.delete(`${url}/${id}`, user);
}