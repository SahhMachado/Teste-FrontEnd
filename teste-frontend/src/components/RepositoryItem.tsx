import { FaStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

//title, subtitle, desciption, starred, branches

export type RepositoryItemProps = {
    title: string
    subtitle: string
    description: string
    starred: number
    branches: number
}

function RepositoryItem({title, subtitle, description, starred, branches} : RepositoryItemProps) {
    return(
         <div className="w-full h-25">
            <div className="flex gap-2">
                <h2 className="font-light text-lg">{title}</h2>
                <h2 className="text-lg">/</h2>
                <h2 className="font-bold text-lg text-blue-500">{subtitle}</h2>
            </div>
            <div>
                <p className="text-[#989898] text-sm">{description}</p>
            </div>
            <div className="flex">
                <FaStar size={15}  /> <p className="ml-2 mr-5 text-sm">{starred}</p>
                <FaCodeBranch size={15} /> <p className="ml-2 text-sm">{branches}</p>
            </div>
         </div>
    )
}

export default RepositoryItem
