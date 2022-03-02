import {Link} from "react-router-dom";
import ProfileImage from "../../../images/profile_icon.svg";


function ProfileIcon() {

    return (
        <span className="text-center text-slate-500 border-2 border-white hover:border-blue-300 rounded">
            <Link to="/upload">
                <img src={ProfileImage} alt="Upload icon" className="h-4 w-4"/>
            </Link>
        </span>
    )

}

export default ProfileIcon;
