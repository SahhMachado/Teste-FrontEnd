import MoreInfo from "./MoreInfo"
import ProfileInfo from "./ProfileInfo"

function MoreProfileInfo() {
    return(
        <MoreInfo conteudo={
            <div className="w-90 bg-gray-100 rounded-xl">
                <div className="m-[5%]">
                    <ProfileInfo />
                </div>
            </div>
        } 
        />
    )
}

export default MoreProfileInfo