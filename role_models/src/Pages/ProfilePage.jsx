import { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";

// Styles
import './HomePage.css';
import './ProfilePage.css';


function ProfilePage(props) {

    // Set state
    const [loggedIn] = useOutletContext();
    const [profile, setProfile] = useState({});
    const [userAnswers, setUserAnswers] = useState([]);


    // Hooks
    const { id } = useParams();

    // Variables
    const deleteLink = `/delete-profile/${profile.id}`;
    const editLink = `/edit-profile/${id}`;


    //Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL
            }users/${id}`).then((results) => {
                return results.json();
            })
            .then((data) => {
                setProfile(data);
            });

        fetch(`${import.meta.env.VITE_API_URL
            }users/${id}`).then((results) => {
                return results.json();
            })
            .then((data) => {
                setUserAnswers(data.user_answers);
            });
    }, []);

    const profilePic = profile.profile_pic;
    const sendProfileEmail = `mailto:${profile.email}`;
    const video = `https://www.youtube.com/embed/${profile.video}`;
    // .slice(17) - can't get this to work on refresh
    const answers = userAnswers.map(item => {
        const container = [];
        container[0] = item.question;
        container[1] = item.answer;

        return container;
    })

    return (
        <div className="page-container">

            {loggedIn &&
                <div id="edit-delete-container">
                    <Link to={editLink} className="profile-btns">
                        Edit
                    </Link>
                    <Link to={deleteLink} className="profile-btns">
                        Delete
                    </Link>
                </div>
            }
            <div className="columns-container">

                <img src={profilePic} alt="profile picture" className="top-left profile-img" />

                <div className="top-right">
                    <h1>{profile.first_name} {profile.last_name}</h1>
                    <h3 className="profile-h3">{profile.pronouns}</h3>
                    <h3 className="profile-h3">{profile.job_title}</h3>
                    <h3 className="profile-tagline">{profile.tagline}</h3>
                </div>

                <ul className="bottom-left">
                    {answers.map((answer, key) => {
                        return <li key={key}>
                            <h3 className="profile-h3">
                                {answer[0]}
                            </h3>
                            <p className="profile-answer">
                                {answer[1]}
                            </p>
                        </li>;
                    })}
                </ul>


                <div className="bottom-right">
                    {profile.video &&
                        <div className="iframe-container">
                            <iframe width="560" height="315" src={video} title="Profile's YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    }

                    <div className="profile-socials-section">
                        <h2>Get in touch!</h2>
                        <ul>
                            {profile.blog &&
                                <li>
                                    <h3 className="social-header">Blog </h3>
                                    <span>
                                        <a href={profile.blog}>
                                            Check out {profile.first_name}'s blog
                                        </a>
                                    </span>
                                </li>
                            }
                            {profile.linkedin &&
                                <li>
                                    <h3 className="social-header">LinkedIn </h3>
                                    <span>

                                        <a href={profile.linkedin}>
                                            Connect with {profile.first_name} on LinkedIn
                                        </a>
                                    </span>
                                </li>
                            }
                            {profile.twitter &&
                                <li>
                                    <h3 className="social-header">Twitter </h3>
                                    <span>
                                        <a href={profile.twitter}>
                                            Connect with {profile.first_name} on Twitter
                                        </a>
                                    </span>
                                </li>
                            }
                        </ul>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default ProfilePage;


{/* <h3 className="profile-h3">What motivates you every day?</h3>
                <p className="profile-question">This is the first section - sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis</p>
                <br></br>
                <h3 className="profile-h3">What inspired you to get into tech?</h3>
                <p className="profile-question">{profile?.answers}Sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu</p>
                <br></br>
                <h3 className="profile-h3">What's been your biggest success?</h3>
                <p className="profile-question">Viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti</p>
                </div> */}