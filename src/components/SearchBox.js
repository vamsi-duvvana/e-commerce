const SearchBox = () => {
    return (
        <div className="flex border border-gray-300 rounded-lg px-2 space-x-10 py-1">
            <div className="flex space-x-7 border-r border-gray-300 pr-2 items-center">
                <div>
                    All Categories
                </div>
                <button>
                    <img className="w-3 h-3" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706882480/arrow-down-sign-to-navigate_fgdhpu.png" alt="drop-down-icon" />
                </button>
            </div>
            <div className="">
                <input className="w-full outline-none px-2 -ml-6" type="text" placeholder="Search" />
            </div>
            <div className="">
                <button className="text-white px-2 bg-gray-800 rounded-lg">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBox
