import {Link} from "react-router-dom";
import HomeImage from "../../../images/home_icon.svg";
import React from "react";


function SearchResultsPage({}) {

    const hostname = "http://localhost:8081";

    return (
        <div>
            <img height="150px" width="250px" src={hostname + "/image/birds"} alt=""/>
        </div>
    )

}

export default SearchResultsPage;
