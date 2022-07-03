import { useParams } from "react-router-dom";
import CardList from "../CardList";
import Header from "../Header";
import useFetch from '../useFetch';


const Followers = ({ searchField, setSearchField }) => {

    let { title } = useParams();

    const { cardArray: followUser } = useFetch(`https://api.github.com/users/${title}/followers`);

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