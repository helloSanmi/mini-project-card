

const UserSocial = ({user}) => {

    let {followers, following, public_gists, public_repos} = user

    return(
        <>
            <ul className="card-info">
                <li>
                <span className="card-info-stats">{followers}</span>
                <span>Followers</span>
                </li>
                <li>
                <span className="card-info-stats">{following}</span>
                <span>Following</span>
                </li>
                <li>
                <span className="card-info-stats">{public_gists}</span>
                <span>Gists</span>
                </li>
                <li>
                <span className="card-info-stats">{public_repos}</span>
                <span>Repos</span>
                </li>
            </ul>
        </>
    )
}


export default UserSocial;