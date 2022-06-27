import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../CardList";
import Header from "../Header";


const Followers = ({ searchField, setSearchField }) => {

    let { title } = useParams();

    const [followUser, setFollowUser] = useState([]);

    const fetchFollowers = useCallback( 
        async () => {
            const response = await axios(`https://api.github.com/users/${title}/followers`);
            setFollowUser(response.data);
        }, 
        [title])


    useEffect(() => {
        fetchFollowers()
    }, [fetchFollowers])


    const filteredUser = followUser.filter((user) => user.login.toLowerCase()
                         .includes(searchField.toLowerCase()));
  
    return(
        <div>
            <div>
                <Header handleSearch={setSearchField} />
            </div>
            <div className='container'>  
                <CardList arrayUser={filteredUser} />
            </div>
        </div>
    );
}


export default Followers;