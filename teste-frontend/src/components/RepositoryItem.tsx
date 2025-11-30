import { FaStar } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import { useStore } from "../store/useStore"

export type RepositoryItemProps = {
    fullName    : string
    description?: string
    starred     : number
    branches    : number
    link        : string
    language    : string
}

function RepositoryItem({fullName, description, starred, branches, link, language} : RepositoryItemProps) {

    const [owner, repo] = fullName.split("/")
    const active = useStore((state) => state.activeTab)

    return(
         <a href={link} target="_blank" className="inline-block lg:border-0 border-b 
                                                 border-gray-200 mb-10 lg:h-[10%] h-[30%] hover:text-gray-500">
            <div className="flex gap-[0.5%]">
                <h2 className="font-light text-lg">{owner}</h2>
                <p className="text-lg">/</p>
                <h2 className="font-bold text-lg text-[#0587FF]">{repo}</h2>
            </div>
            <div>
                <p className="text-[#989898] text-sm">{description}</p>
            </div>
            <div className="flex mb-4">
                {active === "repos"
                    &&(
                        <div className="flex">
                            <FaStar size={15}  /> <p className="ml-2 mr-5 text-sm">{starred}</p>
                        </div>
                    )
                }
                {active === "starred"
                    && language != ""
                    &&(
                        <div>
                            <p className="mr-5 text-sm">{language}</p>
                        </div>
                    )
                }
                <GoGitBranch size={17} /> <p className="ml-2 text-sm">{branches}</p>
            </div>
         </a>
    )
}

export default RepositoryItem
