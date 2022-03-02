import {Link} from "react-router-dom";
import searchIcon from "../../../images/search_icon.svg";


function SearchIcon() {

    return (
        <span className="text-center text-slate-500 border-2 border-white hover:border-blue-300 rounded">
            <Link to="/">
                <img src={searchIcon} alt="Search" className="h-4 w-4"/>
            </Link>
        </span>
    )

}

export default SearchIcon;
