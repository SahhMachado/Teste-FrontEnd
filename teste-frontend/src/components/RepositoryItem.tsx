import { FaStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

export type RepositoryItemProps = {
    fullName    : string
    description?: string
    starred     : number
    branches    : number
    link        : string
}

function RepositoryItem({fullName, description, starred, branches, link} : RepositoryItemProps) {

    const [owner, repo] = fullName.split("/")

    return(
         <a href={link} target="_blank" className="inline-block lg:border-0 border-b border-gray-200 mb-10 lg:h-[10%] h-[30%]">
            <div className="flex gap-[0.5%]">
                <h2 className="font-light text-lg">{owner}</h2>
                <p className="text-lg">/</p>
                <h2 className="font-bold text-lg text-[#0587FF]">{repo}</h2>
            </div>
            <div>
                <p className="text-[#989898] text-sm">{description}</p>
            </div>
            <div className="flex mb-4">
                <FaStar size={15}  /> <p className="ml-2 mr-5 text-sm">{starred}</p>
                <FaCodeBranch size={15} /> <p className="ml-2 text-sm">{branches}</p>
            </div>
         </a>
    )
}

export default RepositoryItem
