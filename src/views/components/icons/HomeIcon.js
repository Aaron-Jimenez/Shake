import {Link} from "react-router-dom";
import HomeImage from "../../../images/home_icon.svg";


function HomeIcon() {

    return (
        <span className="text-center text-slate-500 border-2 border-white hover:border-blue-300 rounded">
            <Link to="/">
                <img src={HomeImage} alt="Search" className="h-4 w-4"/>
            </Link>
        </span>
    )

}

export default HomeIcon;
