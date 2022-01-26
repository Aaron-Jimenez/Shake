import {Link} from "react-router-dom";
import logo from "../../images/teaching_icon.svg";


function NavigationBar() {

    return (
            <div>
                <nav className="space-x-9 mx-auto border-slate-400 rounded max-w-sm items-center my-2 flex flex-row">
                    <span>
                      <Link to="/">
                        <img src={logo} alt="Img of teacher" className="h-12 w-12 flex"/>
                      </Link>
                    </span>
                    <span className="text-center text-slate-500 hover:border-2 hover:border-blue-400 rounded">
                      <Link to="/">Home</Link>
                    </span>
                    <span className="text-center text-slate-500 hover:border-2 hover:border-blue-400 rounded">
                      <Link to="/video/upload">Upload</Link>
                    </span>
                    <span className="text-center text-slate-500 hover:border-2 hover:border-blue-400 rounded">
                      <Link to="/video/view">View</Link>
                    </span>
                </nav>
            </div>
    )

}

export default NavigationBar;
