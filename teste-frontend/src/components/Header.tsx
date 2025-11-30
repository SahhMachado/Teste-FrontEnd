import LogoGit from "../assets/logoGitHub.svg"

function Header() {
    return(
        <header className="w-screen h-[8vh] flex items-center bg-[#24292E] text-white">
            <img src={LogoGit} className="lg:ml-[15%] lg:w-[7vw] w-[16vw] 
                                          lg:mr-[1.2%] md:mr-[2%] ml-[3%]"></img>
            <p className="lg:mr-[1.2%] md:mr-[2%] text-2xl">/</p>
            <p className="font-light text-[1.7vh]">Profile</p>
        </header>
    )
}

export default Header