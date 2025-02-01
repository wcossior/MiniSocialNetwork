import React from 'react'
import { createPost } from '../api/post';

const CreatePost = () => {

    const sendDataPost = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const textPost = formData.get("text");
        const post = {
            title: textPost,
            content: textPost,
            author: 1,
        }
        try {
            await createPost(post);
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
                        name='text'
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