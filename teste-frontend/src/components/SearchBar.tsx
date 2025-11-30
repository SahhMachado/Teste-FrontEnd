import { LuSearch } from "react-icons/lu";

function SearchBar (){
    return(
        <div className="h-[5%] lg:mb-[4%] mb-[8%] lg:mt-[-2vh] lg:bg-white 
                       md:bg-white md:mt-0 mt-[-7vh] bg-gray-100 relative">

            <LuSearch size={24} className="absolute lg:top-[40%] md:top-[40%] top-[50%]
                                           lg:ml-0 md:ml-0 ml-[90%] -translate-y-1/2 lg:text-gray-400 
                                           md:text-gray-400 text-[#0587FF]" />

            <input  placeholder="Search Here" type="text" 
                    className="lg:border-b md:border-b lg:w-[26vw] lg:h-auto md:w-[58vw] md:h-auto
                               lg:ml-0 md:ml-0 w-[94vw] h-[7vh] focus:outline-none pl-[8%] pb-[1%] 
                               border-gray-300
                               lg:placeholder:text-gray-400 md:placeholder:text-gray-400
                               placeholder:text-gray-100 placeholder:text-[1.8vh] z-0" />
        </div>
    )
}

export default SearchBar