import ProfileAvatar from "./ProfileAvatar"
import { useGithubProfile } from "../hooks/useGithubProfile"
import MoreProfileInfo from "./MoreProfileInfo"
import ProfileInfo from "./ProfileInfo"

function Profile() { 
    const { data: perfil, isLoading, error } = useGithubProfile("SahhMachado")
    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar perfil.</p>

    if (!perfil) return null // ou loader
    return (
        <div className="lg:ml-[15%] lg:w-[15%] md:w-[30%] md:ml-[3%]">
            <div className="max-w-full flex flex-wrap text-center justify-center">
                <ProfileAvatar src={perfil.avatar_url} />
                <h2 className="lg:mt-[10%] md:mt-[10%] mt-[5%] font-bold text-[2.5vh] min-w-screen">{perfil.name}</h2>
                <p className="lg:mb-[15%] md:mb-[15%] mb-[5%] text-[1.5vh] text-[#989898]">{perfil.bio}</p>
            </div>
            <div className="lg:block md:block hidden">
                <ProfileInfo />
            </div>
            <div className="lg:hidden md:hidden">
                <MoreProfileInfo />
            </div>
        </div>
    )
}

export default Profile