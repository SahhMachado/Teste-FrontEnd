import { useStore } from "../store/useStore"
import { FilterDropdown } from "./FilterDropdown"
import RepositoryList from "./RepositoryList"
import SearchBar from "./SearchBar"
import { BiBookBookmark } from "react-icons/bi"
import { FaRegStar } from "react-icons/fa"
import { useGithubRepos } from "../hooks/useGithubRepositories"

function RepositoryExplorer() { 

    const { 
        repositories, 
        starred, 
        isLoading, 
        error 
    } = useGithubRepos("SahhMachado")
   
    const active = useStore((state) => state.activeTab)
    const setActive = useStore((state) => state.setActiveTab)
    const currentList = active === "repos" ? repositories : starred

    const search = useStore((state) => state.search)
    const filterType = useStore(state => state.type)
    const filterLanguage = useStore(state => state.language)

    const filteredList = currentList
    .filter(repo =>
        repo.full_name.toLowerCase().includes(search.toLowerCase())
    )

    .filter(repo => {
        if (filterType.length === 0 || filterType.includes("all")) return true;

        return filterType.some(type => {
        if (type === "sources") return repo.fork === false;
        if (type === "forks") return repo.fork === true;
        if (type === "archived") return repo.archived === true;
        if (type === "mirrors") return repo.mirror_url != null;
        return true;
        });
    })

    .filter(repo => {
        if (filterLanguage.length === 0 || filterLanguage.includes("all")) {
            return true;
        }

        if (!repo.language) return false;

        return filterLanguage.some(languageSearch =>
            languageSearch.includes(repo.language.toLowerCase())
        )

    })

    if (isLoading) return <p>Carregando dados...</p>
    if (error) return <p>Erro ao carregar dados.</p>

    return (
         <div className="lg:w-[80%] md:w-[60%] w-100 h-[90%] ml-[1%]">

            {/* Header buttons */}
            <div className="flex justify-center lg:justify-start 
                            md:justify-start md:gap-[8%] gap-[5%] 
                            md:min-w-[65%] min-w-screen">

                {/* Repositories tab */}
                <button
                    onClick={() => setActive("repos")}
                    className={`relative lg:w-[15%] md:w-[40%] w-[45%] flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "repos" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}
                >
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

                {/* Starred tab */}
                <button
                    onClick={() => setActive("starred")}
                    className={`relative lg:w-[12%] md:w-[33%] w-[40%] flex items-center gap-2 pb-3 text-sm font-medium transition
                        ${active === "starred" ? "text-black" : "text-gray-500 hover:text-black"}
                    `}
                >
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

            {/* Filters + Search */}
            <div className="w-full mt-[4%] flex flex-wrap gap-[5%] lg:ml-0 md:ml-0 ml-[1%]">
                
                <div className="lg:ml-[45%] lg:mb-0 md:min-w-[50%] mb-[4%]">
                    <FilterDropdown title="Type"  
                                    filterType="type"
                                    items={[
                                        { label: "All", value: "all" },
                                        { label: "Sources", value: "sources" },
                                        { label: "Forks", value: "forks" },
                                        { label: "Archived", value: "archived" },
                                        { label: "Mirrors", value: "mirrors" },
                                    ]}
                    />

                    <FilterDropdown title="Language" 
                                    filterType="language"
                                    items={[
                                        { label: "All", value: "all" },
                                        { label: "Java", value: "java" },
                                        { label: "TypeScript", value: "typescript" },
                                        { label: "HTML", value: "html" },
                                        { label: "CSS", value: "css" },
                                    ]}
                    />
                </div>

                <SearchBar />
            </div>

            {/* Repository list */}
            <div>
                <RepositoryList
                    repoItems={filteredList.map(repo => ({
                        fullName: repo.full_name,
                        description: repo.description ?? "",
                        starred: repo.stargazers_count,
                        branches: repo.forks_count,
                        link: repo.html_url,
                        language: repo.language ?? ""
                    }))}
                />
            </div>
         </div>
    )
}

export default RepositoryExplorer