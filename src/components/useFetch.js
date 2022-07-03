import { useState, useEffect, useCallback } from "react";
import axios from 'axios';

const useFetch = (url) => {

    const [cardArray, setCardArray] = useState([]);
  
  
    const fetchCard = useCallback (
        async () => {
      
      try {
        const response = await axios(url);
        setCardArray(response.data);
      } 
      
      catch (error) {
        console.log(error);
      }
    },
    [url] )
  
    useEffect(() => {
      fetchCard();
    }, [fetchCard]);


    return { cardArray }
  
}


export default useFetch;