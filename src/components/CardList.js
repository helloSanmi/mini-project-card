import React from "react";
import { Link } from 'react-router-dom';


const CardList = (props) => {

  
    return(
        <div className='row'>
        {
          props.arrayUser.map((array) => {
            const {node_id, login, avatar_url} = array;
            return (
              <div className='col-md-3 col-sm-6 spacing' key={node_id}>
                <div className='user-details'>
                  <div className='user-pic'>
                      <img src={avatar_url} alt='userimage' />
                  </div>
                  <h3 className='title'>{login.charAt(0).toUpperCase() + login.slice(1)}</h3>
                  {/* <span className='post'>{type}</span> */}
                  <ul className='social'>
                    <li><Link to={`/user/${login}`}>View Details</Link></li>
                    {/* <li><Link to={`/user/${login}/followers`}  >Followers</Link></li>
                    <li><a href={html_url} >Repos</a></li> */}
                  </ul>
                </div>
            </div>
            )
          })
        }
      </div>
    );
}

export default CardList;