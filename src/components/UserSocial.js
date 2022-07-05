import { Link } from 'react-router-dom';

const UserSocial = ({user}) => {

    let {followers, following, public_gists, public_repos, login, html_url} = user

    console.log(user);

    return(
        <>
            <ul className="card-info">
                <li>
                    <Link to={`/user/${login}/followers`} >
                        <span>Followers</span>
                        <span className="card-info-stats">{followers}</span>
                    </Link>               
                </li>
                <li>
                    <a href={html_url} >
                        <span className="card-info-stats">{public_repos}</span>
                        <span>Repos</span>
                    </a>
                </li>
                <li>
                    {/* <Link> */}
                        <span className="card-info-stats">{following}</span>
                        <span>Following</span>
                    {/* </Link> */}
                </li>
                <li>
                    <span className="card-info-stats">{public_gists}</span>
                    <span>Gists</span>
                </li>
            </ul>
        </>
    )
}


export default UserSocial;