import {Link} from "react-router-dom";
import logo from "../../images/teaching_icon.svg";
import SearchIcon from "../../views/components/icons/SearchIcon"
import HomeIcon from "./icons/HomeIcon";
import UploadIcon from "./icons/UploadIcon";
import ProfileIcon from "./icons/ProfileIcon";


function NavigationBar() {

    return (
            <div>
                <nav className="space-x-6 h-6 my-2 mx-4 mx-auto border-slate-400 rounded justify-end flex flex-row">
                    {/*<span>*/}
                    {/*  <Link to="/">*/}
                    {/*    <img src={logo} alt="Img of teacher" className="h-8 w-8 flex"/>*/}
                    {/*  </Link>*/}
                    {/*</span>*/}
                    <HomeIcon/>
                    <UploadIcon/>
                    <SearchIcon/>
                    <ProfileIcon/>
                </nav>
            </div>
    )

}

export default NavigationBar;
