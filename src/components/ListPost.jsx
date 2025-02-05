import React, { useEffect, useState } from 'react'
import { deletePost, editPost, getAllPost } from '../api/post';
import useStore from '../store';



const ListPost = () => {

    const [activateEdit, setactivateEdit] = useState(false);
    const [textPost, settextPost] = useState("");
    const {savePosts, listPosts} = useStore();

    useEffect(() => {
        const requestPosts = async () => { //funcion para obtener posts
            try {
                const data = await getAllPost();
                savePosts(data);
            } catch (error) {
                console.log("Error al obtener los post", error);
            }
        };
        requestPosts();

    },[])

    const sendEdit = async (post) => {

        try {
            const editedPost = {
                ...post,
                title: textPost,
                content: textPost,
            }
            await editPost(editedPost);
            setactivateEdit(false);
            const data = await getAllPost();
            savePosts(data);

        } catch (error) {
            console.log("Error al editar un post", error);
        }
    }

    const sendDelete = async (postId) => {
        try {
            await deletePost(postId);
            const data = await getAllPost();
            savePosts(data);
        } catch (error) {
            console.log("Error al eliminar un post", error);
        }
    }

    return (

        <div id="post-list" className='flex flex-col items-center w-5/6'>

            {listPosts &&
                listPosts.map(post => {
                    return (
                        <div key={post.id} className="card mt-6 bg-neutral w-full shadow-xl">
                            <div className="card-body">
                                <div className='flex'>
                                    <div>
                                        <div className="avatar online">
                                            <div className="w-24 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-6">
                                        {activateEdit ?
                                            <label className="input input-bordered flex items-center gap-2">
                                                <input onChange={(e) => settextPost(e.target.value)} type="text" className="grow" defaultValue={post.content} />
                                            </label>
                                            :
                                            <h2 className="card-title">{post.content}</h2>
                                        }
                                        <p>{post.created}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    {activateEdit ?
                                        <button onClick={() => sendEdit(post)} className="btn btn-primary">Save</button>
                                        :
                                        <button onClick={() => setactivateEdit(true)} className="btn btn-primary">Edit</button>
                                    }

                                    {activateEdit ?
                                        <button onClick={() => setactivateEdit(false)} className="btn btn-danger">Cancel</button>
                                        :
                                        <button onClick={() => sendDelete(post.id)} className="btn btn-danger">Delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListPost