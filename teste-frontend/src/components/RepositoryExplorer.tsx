import { useState } from "react"
import { FilterDropdown } from "./FilterDropdown"
import RepositoryList from "./RepositoryList"
import SearchBar from "./SearchBar"
import { RiBookmarkLine, RiStarLine } from "react-icons/ri"
import { useGithubRepos } from "../hooks/useGitHubRepos"

function RepositoryExplorer() { 

    const {repositories, starred, error} = useGithubRepos("SahhMachado")
    const [active, setActive] = useState<"repos" | "starred">("repos")
    const currentList = active === "repos" ? repositories : starred

    return(
         <div className="w-250 h-190">

            <div className="flex gap-20 mb-5">
            {/* Repositories */}
                <button
                    onClick={() => setActive("repos")}
                    className={`relative flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "repos" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}>

                    <RiBookmarkLine size={18} />
                    <span>Repositories</span>

                    <span className="ml-1 rounded-full bg-gray-200 px-2 text-xs text-gray-700">
                        {repositories.length}
                    </span>

                    {active === "repos" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                    )}
                </button>
                    

                {/* Starred */}
                <button
                    onClick={() => setActive("starred")}
                    className={`relative flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "starred" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}>
                        
                    <RiStarLine size={18} />
                    <span>Starred</span>

                    <span className="ml-1 rounded-full bg-gray-200 px-2 text-xs text-gray-700">
                        {starred.length}
                    </span>

                    {active === "starred" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                    )}
                </button>
            </div>
            <div className="w-full mt-[8%] flex gap-15">
                <SearchBar />
                <div className="ml-[15%]">
                    <FilterDropdown title="Type"  
                                    items={[
                                        { label: "All", value: "all" },
                                        { label: "Java", value: "java" },
                                        { label: "TypeScript", value: "ts" },
                                        { label: "HTML", value: "html" },
                                        { label: "CSS", value: "css" },
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