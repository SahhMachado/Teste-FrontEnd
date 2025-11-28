import { FaSearch } from "react-icons/fa";

function SearchBar (){
    return(
        <div className="h-15 relative">
            <FaSearch size={20} className="absolute top-[20%] -translate-y-1/2 text-gray-300" />
            <input  placeholder="Search Here"
                    type="text" className="border-b w-100 focus:outline-none pl-8 border-gray-300 text-gray-600" />
        </div>
    )
}

export default SearchBar