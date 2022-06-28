import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import UserSocial from './UserSocial';


const UserDetailsCard = (props) => {

    let location = useLocation();
    let navigate = useNavigate();

    let {user} = props;

    return (
        <div className="container">
            <div className="user-container">
                <div className="card">
                    <img src={user.avatar_url} alt={user.login} className="card-image"  />
                    <div className="card-text">
                        <h2>{user.name}</h2>
                        <p>Username: {user.login}</p>
                        <p>Company: {user.company}</p>
                        <p>Location: {user.location}</p>
                    </div>
                    <UserSocial user={user} />
                    <div className="card-action">
                        <button className="card-action-button" 
                        onClick={()=> navigate("/") + location.search}
                        >
                        Home
                        </button>
                        <button className="card-action-button"
                        onClick={()=> navigate(-1)}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserDetailsCard;