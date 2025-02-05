import React, { useEffect, useState } from 'react'
import { deletePost, editPost, getAllPost, getNextAllPost } from '../api/post';
import useStore from '../store';
import InfiniteScroll from "react-infinite-scroll-component";

const ListPost = () => {

    const [activateEdit, setactivateEdit] = useState(false);
    const [textPost, settextPost] = useState("");
    const [idEditPost, setidEditPost] = useState(null);
    const [idDeletePost, setidDeletePost] = useState(null);
    const { savePosts, listPosts, addingNextPosts } = useStore();
    const [isEditing, setisEditing] = useState(false);
    const [isDeleting, setisDeleting] = useState(false);
    const [nextPage, setNextPage] = useState(null);


    useEffect(() => {
        const requestPosts = async () => { //funcion para obtener posts
            try {
                const data = await getAllPost();
                savePosts(data.results);
                setNextPage(data.next);

            } catch (error) {
                console.log("Error al obtener los post", error);
            }
        };
        requestPosts();

    }, [])

    const getMorePosts = async () => {
        try {
            const data = await getNextAllPost(nextPage);
            addingNextPosts(data.results);
            setNextPage(data.next);
        } catch (error) {
            console.log("Error al intentar obtener mas posts");
        }
    }

    const sendEdit = async (post) => {

        try {
            if (textPost !== "") {
                const editedPost = {
                    ...post,
                    title: textPost,
                    content: textPost,
                }
                setisEditing(true);
                await editPost(editedPost);
                const data = await getAllPost();
                savePosts(data);
                deactivateEditPost();
                setisEditing(false);
                settextPost("");
            }

        } catch (error) {
            settextPost("");
            setisEditing(false);
            deactivateEditPost();
            console.log("Error al editar un post", error);
        }
    }

    const sendDelete = async (postId) => {
        try {
            setisDeleting(true);
            setidDeletePost(postId);
            await deletePost(postId);
            const data = await getAllPost();
            savePosts(data);
            setisDeleting(false);
            setidDeletePost(null);
        } catch (error) {
            setidDeletePost(null);
            setisDeleting(false);
            console.log("Error al eliminar un post", error);
        }
    }

    const activateEditPost = (post) => {
        setactivateEdit(true);
        setidEditPost(post.id);
        settextPost("");
    }

    const deactivateEditPost = () => {
        setactivateEdit(false);
        setidEditPost(null);
    }



    return (

        <InfiniteScroll
            dataLength={listPosts?.length || 0}
            next={getMorePosts}
            hasMore={Boolean(nextPage)}
            loader={<h4 className='text-center'>Loading...</h4>}
        >
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
                                            {idEditPost === post.id ?
                                                <label className="input input-bordered flex items-center gap-2">
                                                    <input onChange={(e) => settextPost(e.currentTarget.value)} type="text" className="grow" defaultValue={post.title} />
                                                </label>
                                                :
                                                <h2 className="card-title">{post.title}</h2>
                                            }
                                            <p>{post.created}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {activateEdit && idEditPost === post.id ?
                                            <button disabled={isEditing} onClick={() => sendEdit(post)} className="btn btn-primary">
                                                {isEditing ?
                                                    "Saving..."
                                                    :
                                                    "Save"
                                                }
                                            </button>
                                            :
                                            <button disabled={isDeleting && idDeletePost === post.id} onClick={() => activateEditPost(post)} className="btn btn-primary">Edit</button>
                                        }
                                        {activateEdit && idEditPost === post.id ?
                                            <button disabled={isEditing} onClick={() => deactivateEditPost()} className="btn btn-danger">Cancel</button>
                                            :
                                            <button disabled={isDeleting && idDeletePost === post.id} onClick={() => sendDelete(post.id)} className="btn btn-danger">
                                                {isDeleting && idDeletePost === post.id ?
                                                    "Deleting..."
                                                    :
                                                    "Delete"
                                                }
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </InfiniteScroll>
    )
}

export default ListPost