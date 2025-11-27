import LogoGit from "../assets/logoGitHub.svg"

function Header() {
    return(
        <header className="w-full h-17 flex items-center bg-[#24292E] text-white">
            <img src={LogoGit} className="ml-70 mr-10"></img>
            <p className="mr-10">/</p>
            <p className="font-light">Profile</p>
        </header>
    )
}

export default Header