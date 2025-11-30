import { BiBuildings } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

import { useGithubProfile } from "../hooks/useGithubProfile"

function ProfileInfo() {
    const { perfil } = useGithubProfile("SahhMachado")
    if (!perfil) return null // ou loader
    return(
        <div className="mb-[2%] text-[#0587FF] flex-wrap flex">
            {perfil.company && (
                <>
                    <div className="flex items-center min-w-full mb-[5%]">
                        <BiBuildings className="mr-[2%]"/>
                        <a href="#">{perfil.company}</a>
                    </div>
                </>
            )}
            {perfil.location && (
                <>
                    <div className="flex items-center min-w-full mb-[5%]">
                        <IoLocationOutline className="mr-[2%]"/>
                        <a href="#">{perfil.location}</a>
                    </div>
                </>
            )}
            {perfil.blog && (
                <>
                    <div className="flex items-center min-w-full mb-[5%]">
                        <IoIosLink />
                        <a href="#">{perfil.blog}</a>
                    </div>
                </>
            )}
            {perfil.twitter_username && (
                <>
                    <div className="flex items-center min-w-full mb-[5%]">
                        <BsTwitterX className="mr-[2%]"/>
                        <a href="#">{perfil.twitter_username}</a>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProfileInfo