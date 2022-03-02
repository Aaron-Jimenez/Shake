import {Link} from "react-router-dom";
import uploadIcon from "../../../images/upload_icon.svg";


function UploadIcon() {

    return (
        <span className="text-center text-slate-500 border-2 border-white hover:border-blue-300 rounded">
            <Link to="/upload">
                <img src={uploadIcon} alt="Upload icon" className="h-4 w-4"/>
            </Link>
        </span>
    )

}

export default UploadIcon;
