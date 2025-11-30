import { useState } from "react"
import { FilterDropdown } from "./FilterDropdown"
import RepositoryList from "./RepositoryList"
import SearchBar from "./SearchBar"
import { BiBookBookmark } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { useGithubRepos } from "../hooks/useGithubRepositories"

function RepositoryExplorer() { 

    const {repositories, starred} = useGithubRepos("SahhMachado")
    const [active, setActive] = useState<"repos" | "starred">("repos")
    const currentList = active === "repos" ? repositories : starred

    return(
         <div className="lg:w-[80%] md:w-[65%] w-[65%] h-[90%] ml-[1%]">
            <div className="flex justify-center lg:justify-start 
                            md:justify-start gap-[10%] 
                            md:min-w-[65%] min-w-screen">
            {/* Repositories */}
                <button
                    onClick={() => setActive("repos")}
                    className={`relative lg:w-[15%] md:w-[35%] w-[45%] flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "repos" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}>

                    <BiBookBookmark size={20} />
                    <span className="text-lg">Repositories</span>

                    <span className="ml-1 rounded-full border border-gray-300 bg-gray-100 
                                     px-[8%] py-[0.5%] text-sm text-gray-400">
                        {repositories.length}
                    </span>

                    {active === "repos" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[5%] bg-[#FD8C73]" />
                    )}
                </button>
                    

                {/* Starred */}
                <button
                    onClick={() => setActive("starred")}
                    className={`relative lg:w-[12%] md:w-[33%]  w-[40%] flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "starred" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}>
                        
                    <FaRegStar size={20} />
                    <span className="text-lg">Starred</span>
                    <span className="ml-1 rounded-full border border-gray-300 bg-gray-100 
                                     px-[9%] py-[0.5%] text-sm text-gray-400">
                        {starred.length}
                    </span>

                    {active === "starred" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[5%] bg-[#FD8C73]" />
                    )}
                </button>
            </div>
            <div className="w-full mt-[4%] flex flex-wrap gap-[5%] lg:ml-0 md:ml-0 ml-[3%]">
                <div className="lg:ml-[50%] lg:mb-0 md:min-w-[50%] mb-[7%]">
                    <FilterDropdown title="Type"  
                                    items={[
                                        { label: "All", value: "all" },
                                        { label: "Sources", value: "sources" },
                                        { label: "Forks", value: "forks" },
                                        { label: "Archived", value: "archived" },
                                        { label: "Mirrors", value: "mirrors" },
                                    ]}
                    />

                    <FilterDropdown title="Language" 
                                    items={[
                                        { label: "All", value: "all" },
                                        { label: "Java", value: "java" },
                                        { label: "TypeScript", value: "ts" },
                                        { label: "HTML", value: "html" },
                                        { label: "CSS", value: "css" },
                                    ]}
                    />
                </div>
                <SearchBar />
            </div>
            <div>
                <RepositoryList
                    repoItems={currentList.map(repo => ({
                        fullName: repo.full_name,
                        description: repo.description ?? "",
                        starred: repo.stargazers_count,
                        branches: repo.forks_count
                    }))}
                />
            </div>
         </div>
    )
}

export default RepositoryExplorer