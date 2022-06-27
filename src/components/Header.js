import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({handleSearch}) => {

    let navigate = useNavigate();
    let location = useLocation();

    return(
        <div className="header">
            <div className="header-text">
                <button 
                onClick={()=> navigate("/home") + location.search}
                >
                Home
                </button>
            </div>
            <div className="search">
            <input 
                className="search-box" 
                type="search" 
                placeholder="Search user"
                onChange={(e)=>handleSearch(e.target.value)} />
            </div>
        </div>
       
    )
}


export default Header;