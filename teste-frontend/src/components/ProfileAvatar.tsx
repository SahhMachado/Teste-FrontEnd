type ProfileAvatarProps = {
    src: string
    size?: number
    status?: React.ReactNode
}

function ProfileAvatar({src, size = 120} : ProfileAvatarProps) { 
    return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
            <img src={src} className="h-full w-full rounded-full object-cover"/>
        </div>
    )
}

export default ProfileAvatar