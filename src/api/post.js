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

export const editPost = async (post) => {
    try {
        const response = await axios.put(`${API_POST}/api-demo/v1/publication/${post.id}`, post);
    } catch (error) {
        console.log("error al editar un post api: ", error);
        throw error;
    }
}

export const deletePost = async (postId) => {
    try {
        const response = await axios.delete(`${API_POST}/api-demo/v1/publication/${postId}`);
    } catch (error) {
        console.log("error al editar un post api: ", error);
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


const updatePostApi = (idPost) => {
    console.log("actualizado publicacion...");
    setLoadingPost(true);

    const data = {
      title: publicacionEdit,
      content: publicacionEdit,
      author: 1,
    };

    axios
      .put(`${API_POST}/api-demo/v1/publication/${idPost}`, data)
      .then((response) => {
        console.log(response.data);

        setPublicacionIdEdit(null);
        setPublicacionEdit("");
        getListPost();
        setLoadingPost(false);
      })
      .catch((error) => {
        console.log(error);
        setPublicacionIdEdit(null);
        setPublicacionEdit("");
        setLoadingPost(false);
      });
  };