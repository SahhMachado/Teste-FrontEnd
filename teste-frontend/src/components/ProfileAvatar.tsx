import { FaSmile } from "react-icons/fa";

type ProfileAvatarProps = {
    src: string
    size?: number
    status?: React.ReactNode
}

function ProfileAvatar({src, status = <FaSmile color="#0587FF" className="lg:w-[85%] w-[38%]"/>} : ProfileAvatarProps) { 
    return (
        <div className="flex items-center justify-center min-w-screen">
            <div className="relative inline-flex items-center justify-center lg:w-[8vw] md:w-[15vw] w-[20vw]">
                <img src={src} className="h-full w-full rounded-full object-cover"/>
                <div className="absolute rounded-full 
                            w-[28%] h-[28%]
                            mt-[70%] ml-[70%] 
                            flex items-center justify-center
                            shadow-xl bg-white">{status}
                </div>
            </div>
        </div>
    )
}

export default ProfileAvatar