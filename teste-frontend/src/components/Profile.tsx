import ProfileAvatar from "./ProfileAvatar"
import ImgPerfil from "../assets/imgPerfil.jpeg"

export type Links = {
    nome: string
    href: string
    icon: string
}

type ProfileProps = {
    nome: string
    bio?: string
    links?: Links[]
}

function Profile({nome, bio, links =[]} : ProfileProps) { 
    return (
        <div className="ml-80 mr-25">
            <div className="max-w-50 flex flex-wrap text-center justify-center">
                <ProfileAvatar src={ImgPerfil} size={150} />
                <h2 className="mt-5 font-bold text-3xl">{nome}</h2>
                <p className="mb-10 text-[#989898]">{bio}</p>
            </div>
            {
                links.map((link) => { 
                    return(
                        <div className="mb-2 max-w-70 text-blue-500 flex flex-wrap">
                            <img className="mr-2" src={link.icon} alt="" />
                            <a href={link.href}>{link.nome}</a>
                        </div>
                    )
                }) 
            }
        </div>
    )
}

export default Profile