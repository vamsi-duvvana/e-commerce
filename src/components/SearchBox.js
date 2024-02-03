import { useState } from "react"
import { CATEGORIES } from "../utils/constants"

const SearchBox = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [category, setCategory] = useState(CATEGORIES[0]);

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        setToggleDropdown(false);
    }

    return (
        <div>
            <div className="flex border border-gray-300 rounded-lg px-2 space-x-10 py-1">
                <div className="flex space-x-7 border-r border-gray-300 pr-2 items-center">
                    <div className="w-32 pl-5">
                        {category}
                    </div>
                    <button onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <img className="w-3 h-3" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706882480/arrow-down-sign-to-navigate_fgdhpu.png" alt="drop-down-icon" />
                    </button>
                </div>
                <div className="">
                    <input className="w-full outline-none px-2 -ml-6" type="text" placeholder="Search" />
                </div>
                <div className="">
                    <button className="text-white px-2 bg-gray-800 rounded-lg -mr-2">
                        Search
                    </button>
                </div>
            </div>
            {toggleDropdown && (
                <div className="absolute bg-white rounded-lg border-x border-b border-gray-300 w-48">
                    {CATEGORIES.map((e, i) => (
                        <div key={i} className="cursor-pointer px-2 tracking-tight hover:bg-gray-300 shadow-md text-slate-500 pl-7" onClick={() => handleCategoryClick(e)}>
                            {e}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBox
