import axios from "axios";
const API_POST = "https://api.dojofullstack.com";

export const createPost = async (post) => {
    try {
        const response = await axios.post(`${API_POST}/api-demo/v1/publication/`, post);
    } catch (error) {
        console.log("error al crear un post api: ", error);
        throw error;
    }
}

export const getAllPost = async () =>{
    try {
        const response = await axios.get(`${API_POST}/api-demo/v1/publication/?page_size=5`);
        return response.data.results;
    } catch (error) {
        console.log("error al crear un post api: ", error);
        throw error;    
    }
}