import React from 'react'

const ListPost = () => {
    return (
        <div id="post-list" className='flex flex-col items-center w-5/6'>
            <div className="card mt-6 bg-neutral w-full shadow-xl">
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
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose? </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>

            <div className="card mt-6 bg-neutral w-full shadow-xl">
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
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose? </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListPost