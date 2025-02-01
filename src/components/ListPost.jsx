import React, { useEffect, useState } from 'react'
import { getAllPost } from '../api/post';



const ListPost = () => {

    const [listPost, setlistPost] = useState([]);
    const [activateEdit, setactivateEdit] = useState(false);
    const [textPost, settextPost] = useState("");

    useEffect(() => {
        const requestPosts = async () => { //funcion para obtener posts
            try {
                const data = await getAllPost();
                setlistPost(data);
                console.log(data);
            } catch (error) {
                console.log("Error al obtener los post", error);
            }
        };
        requestPosts();

    }, [])

    const sendEdit = () => {


        console.log(textPost);


    }

    return (

        <div id="post-list" className='flex flex-col items-center w-5/6'>

            {listPost &&
                listPost.map(post => {
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
                                        <button onClick={sendEdit} className="btn btn-primary">Save</button>
                                        :
                                        <button onClick={() => setactivateEdit(true)} className="btn btn-primary">Edit</button>
                                    }

                                    {activateEdit ?
                                        <button onClick={() => setactivateEdit(false)} className="btn btn-danger">Cancel</button>
                                        :
                                        <button className="btn btn-danger">Delete</button>
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