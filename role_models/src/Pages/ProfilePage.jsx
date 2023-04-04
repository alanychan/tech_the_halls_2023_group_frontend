import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Styles
import './HomePage.css';
import './ProfilePage.css';

function ProfilePage() {

    // Set state
    const [profile, setProfile] = useState({});

    // Hooks
    const { id } = useParams();

    //Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL
            }users/${id}`).then((results) => {
                return results.json();
            })
            .then((data) => {
                setProfile(data);
            });
    }, []);

    console.log(profile)
    return (
        <div className="column-container">
            {/* {loggedIn && <div className="edit-delete-btns">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>} */}
            <div className="top-left">
                <img src="data:image/jpeg;base64,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"
                    alt="Photo of Danielle Bunten Berry" className="profile-img" />
            </div>
            <div className="top-right">
                <h1>{profile.first_name} {profile.last_name}</h1>
                <h3 className="profile-h3">She/Her</h3>
                <h3 className="profile-h3 profile-tagline">As a trans woman, Berry is remembered for the gender barriers she broke in the gaming industry.</h3>
                <br></br>
                {/* <p>{user.q1}</p> */}
                <p className="profile-question">She was a giant in the gaming industry, being credited as the first programmer to develop games for more than two people. Nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu</p>
            </div>
            <div className="bottom-left">
                <h3 className="profile-h3">What motivates you every day?</h3>
                <p className="profile-question">This is the first section - sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis</p>
                <br></br>
                <h3 className="profile-h3">What inspired you to get into tech?</h3>
                <p className="profile-question">{profile?.answers}Sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu</p>
                <br></br>
                <h3 className="profile-h3">What's been your biggest success?</h3>
                <p className="profile-question">Viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti</p>
            </div>
            <div className="bottom-right">
                <video width="320" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
                {/* <ul>
                    {project.pledges.map((pledgeData, key) => {
                        return (
                            <li key={key}>
                                ${pledgeData.amount} from {pledgeData.supporter}
                                <p>"{pledgeData.comment}"</p>
                            </li>
                        );
                    })}
                </ul> */}
                <div className="profile-contacts">
                    <h2>Get in touch!</h2>
                    <ul>
                        <li>Email: {profile.email}</li>
                        <li>placeholder for social connect2</li>
                        <li>placeholder for social connect3</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default ProfilePage;