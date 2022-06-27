import axios from "axios";
import {  useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailsCard from '../UserDetailsCard';


const UserDetails = () => {
  let { title } = useParams();

  const [user, setUser] = useState([]);

  
  const fetchUser =  useCallback(
      async () => {
        const response = await axios(`https://api.github.com/users/${title}`);
        setUser(response.data);
      }, [title] )


  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  return (
    <>
      <UserDetailsCard user={user} />
    </>
  );
};

export default UserDetails;
