import { FaStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

export type RepositoryItemProps = {
    fullName    : string
    description?: string
    starred     : number
    branches    : number
}

function RepositoryItem({fullName, description, starred, branches} : RepositoryItemProps) {

    const [owner, repo] = fullName.split("/")

    return(
         <div className="w-full lg:h-[10vh] h-[15vh]">
            <div className="flex gap-[0.5%]">
                <h2 className="font-light text-lg">{owner}</h2>
                <p className="text-lg">/</p>
                <h2 className="font-bold text-lg text-[#0587FF]">{repo}</h2>
            </div>
            <div>
                <p className="text-[#989898] text-sm">{description}</p>
            </div>
            <div className="flex">
                <FaStar size={15}  /> <p className="ml-2 mr-5 text-sm">{starred}</p>
                <FaCodeBranch size={15} /> <p className="ml-2 text-sm">{branches}</p>
            </div>
            <div className="lg:h-0 lg:w-0 lg:mb-0 lg:mt-0 h-[0.5%] w-[90%] mt-[5%] bg-gray-200"></div><br />
         </div>
    )
}

export default RepositoryItem
