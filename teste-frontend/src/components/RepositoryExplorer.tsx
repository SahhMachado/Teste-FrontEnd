import { FilterDropdown } from "./FilterDropdown"
import RepositoryList from "./RepositoryList"
import SearchBar from "./SearchBar"

function RepositoryExplorer() {
    return(
         <div className="w-250 h-190 border-2">
            <div className="flex gap-20 mb-5">
                <h2>Repositórios</h2>
                <h2>Starred</h2>
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
                <RepositoryList />
            </div>
         </div>
    )
}

export default RepositoryExplorer
