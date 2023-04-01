import React, { useState } from "react";
import { Link, useNavigate, useParams, useOutletContext } from "react-router-dom";

import "./ProfileCard.css";

function ProfileCard(props) {

    const { usersData } = props;

    return (
        <>
        <div className="project-card">
            <Link to="/profile/:id">
            <img src={usersData.profile_pic} alt="Photo of tech trailblazer"/>
                <h3>{usersData.first_name}</h3>
                <p>{usersData.pronouns}</p>
                <p>{usersData.tagline}</p>
            </Link>
        </div >
        </>
    );
}

export default ProfileCard;