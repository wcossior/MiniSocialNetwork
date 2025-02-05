import React, { useState } from 'react'
import { createPost, getAllPost } from '../api/post';
import useStore from '../store';

const CreatePost = () => {

    const { savePosts } = useStore();
    const [textPost, settextPost] = useState("")

    const sendDataPost = async (e) => {
        e.preventDefault();
        const post = {
            title: textPost,
            content: textPost,
            author: 1,
        }
        try {
            await createPost(post);
            const data = await getAllPost();
            savePosts(data);
            settextPost("");
        } catch (error) {
            console.log("Error al crear post form", error);
        }

    }

    return (
        <div id="create-post" className='w-5/6'>
            <div className='flex gap-6'>
                <div className="items-start flex-none">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                <form onSubmit={sendDataPost} className='flex-1 flex flex-col'>
                    <textarea
                        onChange={(e) => settextPost(e.currentTarget.value)}
                        name='text'
                        value={textPost}
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-sm">
                    </textarea>
                    <div className='flex justify-end mt-6'>
                        <button type='submit' className="btn btn-active btn-ghost">Create a post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost