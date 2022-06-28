import { React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from '../components/Pages/Home';
import UserDetails from '../components/Pages/UserDetails';
import ErrorPage from '../components/Pages/ErrorPage';
import Followers from '../components/Pages/Followers';



const App = () => {

  const [cardArray, setCardArray] = useState([]);
  const [searchField, setSearchField] = useState('');


  const fetchCard = async () => {
    
    try {
      const response = await axios('https://api.github.com/users');
      setCardArray(response.data);
    } 
    
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCard();
  }, []);


  const filteredUser = cardArray.filter((user) => user.login.toLowerCase()
                        .includes(searchField.toLowerCase()));



  return (
    <Router>
      <Routes>
          {/* <nav className="header container">
          <Link to='/'><h4>Home</h4></Link>
        </nav> */}
        <Route exact path="/" 
            element={<Home cardArray={filteredUser} 
                        setSearchField={setSearchField} />} />
        
        <Route path="/user/:title" 
            element={<UserDetails />}  />
        
        <Route path='/user/:title/followers' 
          element={<Followers setSearchField={setSearchField} 
                      searchField={searchField} />} />
        
        <Route path='*' element={<ErrorPage />} />
      </Routes>
  </Router> 
  );
}

export default App;
