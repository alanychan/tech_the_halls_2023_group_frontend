import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useOutletContext } from "react-router-dom";

import './DeleteProfilePage.css';


function DeleteProfilePage() {
    // const [profile, setProfile] = useState({});
    const [loggedIn, setLoggedIn] = useOutletContext();

    const { id } = useParams();
    const profileLink = `/profile/${id}`
    // const navigate = useNavigate();

    // alert(id)
    const deleteProfile = (id) => {
        fetch(`${import.meta.env.VITE_API_URL}users/${id}`,
            { method: 'DELETE' }).then((results) => {
                return results.json();
            })
        // .then((data) => {
        //     // console.log(data);
        //     setProfile(data); 
        // });
        window.localStorage.removeItem("token")
        setLoggedIn(false)
        // navigate("/");
    };

    return (
        <>
            {loggedIn ?
                <div className="page-container delete-page">
                    <h1>Delete Profile?</h1>
                    <h3 className="h3-delete">Warning! This action can not be undone.</h3>
                    <p>Are you sure you wish to permanently delete your profile and the associated account?</p>
                    <div className="option-btns">
                        {/* button below needs onClick added after delete code done */}
                        <button className="btn delete-btn" onClick={deleteProfile}>Yes</button>
                        <Link to={profileLink} className="btn cancel-btn">Cancel</Link>
                    </div>
                </div> : <div className="delete-confirmation"> <h2>This account no longer exists.</h2> <h3 className="h3-delete-confirmation"><span><a href="/">Click here</a></span> to return to the homepage</h3></div>}
        </>
    );
}

export default DeleteProfilePage;

// return (
//     <div className="page-container delete-page">
//         <h1>Delete Profile?</h1>
//         <h3 className="h3-delete">Warning! This action can not be undone.</h3>
//         <p>Are you sure you wish to permanently delete your profile and the associated account?</p>
//         <div className="option-btns">
//             {/* button below needs onClick added after delete code done */}
//             <button className="btn delete-btn" onClick={()=> DeleteProfilePage(id)}>Yes</button>
//             <Link to={profileLink} className="btn cancel-btn">Cancel</Link>
//         </div>
//     </div>