import { Link } from "react-router-dom";

import "./ProfileCard.css";

function ProfileCard(props) {

    const { usersData } = props;

    const profileLink = `/profile/${usersData.id}`;

    return (
        <>
        <div className="project-card">
            <Link to={profileLink}>
            <img src={usersData.profile_pic} alt="Photo of tech trailblazer"/>
                <h3>{usersData.first_name} {usersData.last_name}</h3>
                <p>{usersData.tagline}</p>
            </Link>
        </div>
        </>
    );
}

export default ProfileCard;