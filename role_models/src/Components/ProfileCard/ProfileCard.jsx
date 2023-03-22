import { Link } from "react-router-dom";

function ProfileCard() {


    return (
        <div className="project-card">
            <Link to="">
                <img src="" />
                <h3>Profile Name</h3>
                <p>Short bio</p>
                <p><span>Quote: </span>Something inspirational!</p>
            </Link>
        </div >
    );
}

export default ProfileCard;