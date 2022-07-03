import { useParams } from "react-router-dom";
import UserDetailsCard from '../UserDetailsCard';
import useFetch from "../useFetch";


const UserDetails = () => {
  let { title } = useParams();

  const {  cardArray: user } = useFetch(`https://api.github.com/users/${title}`);


  return (
    <div className="container">
      <UserDetailsCard user={user} />
    </div>
  )
}

export default UserDetails;
