import React from 'react'

const CreatePost = () => {
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
                <div className='flex-1 flex flex-col'>
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-sm">
                    </textarea>
                    <div className='flex justify-end mt-6'>
                        <button className="btn btn-active btn-ghost">Create a post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost