import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    let navigate = useNavigate();

    return(
        <div className="container">
            <div className="error-page">
                <h3>Error 404</h3>
                <button className="card-action-button"
                    onClick={()=> navigate(-1)}>
                        Back
                    </button>
            </div>
        </div>
    )
}


export default ErrorPage;