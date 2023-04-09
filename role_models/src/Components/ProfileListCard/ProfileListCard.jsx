import { Link } from "react-router-dom";

import "./ProfileListCard.css";

function ProfileListCard(props) {

    const { usersData } = props;

    const profileLink = `/profile/${usersData.id}`;
    const sendProfileEmail = `mailto:${usersData.email}`;

    return (
        <>
            <div className="project-card">
                <div className="img-info">
                    <div className="img-container">
                        <img src={usersData.profile_pic} alt="Photo of tech trailblazer" />
                    </div>
                    <div className="profile-info">
                        <Link to={profileLink} className="img-name"><h3>{usersData.first_name} {usersData.last_name}</h3></Link>
                        <li>
                            <p>Job Title: {usersData.job_title}</p>
                        </li>
                        <li>
                            <p>Pronouns: {usersData.pronouns}</p>
                        </li>
                        <li>
                            <p>Email: {usersData.email}</p>
                        </li>
                    </div>
                </div>

                <div className="email-active">
                    <a href={sendProfileEmail} className="btn email-btn">Send Email
                    </a>
                    <div className="toggles">
                        <h2 className="toggle-title">Publish</h2>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <h2 className="toggle-title">Active</h2>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ProfileListCard;