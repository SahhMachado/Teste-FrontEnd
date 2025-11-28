import ProfileAvatar from "./ProfileAvatar"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"
import Icon3 from "../assets/icon3.svg"
import Icon4 from "../assets/icon4.svg"
import { useGithubProfile } from "../hooks/useGithubProfile"

function Profile() { 
    const { perfil, error } = useGithubProfile("SahhMachado")
    if (!perfil) return null // ou loader

    return (
        <div className="ml-80 mr-25">
            <div className="max-w-50 flex flex-wrap text-center justify-center">
                <ProfileAvatar src={perfil.avatar_url} size={150} />
                <h2 className="mt-5 font-bold text-3xl">{perfil.name}</h2>
                <p className="mb-10 text-[#989898]">{perfil.bio}</p>
            </div>
            <div className="mb-2 max-w-70 text-blue-500 flex flex-wrap">
                {perfil.company && (
                    <>
                        <img className="mr-2" src={Icon1} alt="" />
                        <a href="#">{perfil.company}</a>
                    </>
                )}
                {perfil.location && (
                    <>
                        <img className="mr-2" src={Icon2} alt="" />
                        <a href="#">{perfil.location}</a>
                    </>
                )}
                {perfil.blog && (
                    <>
                        <img className="mr-2" src={Icon3} alt="" />
                        <a href="#">{perfil.blog}</a>
                    </>
                )}
                {perfil.twitter_username && (
                    <>
                        <img className="mr-2" src={Icon4} alt="" />
                        <a href="#">{perfil.twitter_username}</a>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Profile