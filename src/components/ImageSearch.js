import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <div className="w-full max-w-sm">
                <form onSubmit={onSubmit} className="flex item-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 loading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                    <button className="flex-shrink-0 bg-green-500 border-green-500 text-sm border-4 text-white py-1 px-2 rounded hover:bg-green-700 hover:border-green-700" type="submit" >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ImageSearch
