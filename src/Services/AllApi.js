import axios from "axios";

const base_url="https://movie-server-onxb.onrender.com"

export const addMovie=async(data)=>{
    return await axios.post(`"${base_url}/Movies",data`)

}

export const getMovies=async()=>{
    return await axios.get(`${base_url}/Movies`)
}

export const getDelete=async(id)=>{
    return await axios.delete(`${base_url}/Movies/${id}`)
}