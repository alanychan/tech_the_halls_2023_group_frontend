// import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import './DeleteProfilePage.css';


function DeleteProfilePage() {
    // const [profile, setProfile] = useState({});

    const { id } = useParams();
    const profileLink = `/profile/${id}`

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL
    //         }users/${id}`).then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             setProfile(data);
    //         });
    // });


    // need to add in code to delete account/profile

    return (
        <div className="page-container delete-page">
            <h1>Delete Profile?</h1>
            <h3 className="h3-delete">Warning! This action can not be undone.</h3>
            <p>Are you sure you wish to permanently delete your profile and the associated account?</p>
            <div className="option-btns">
                {/* button below needs onClick added after delete code done */}
                <button className="btn delete-btn" >Yes</button>
                <Link to={profileLink} className="btn cancel-btn">Cancel</Link>
            </div>
        </div>
    );
}

export default DeleteProfilePage;