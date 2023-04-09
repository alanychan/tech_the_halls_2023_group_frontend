import { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";

// Styles
import './HomePage.css';
import './ProfilePage.css';


function ProfilePage(props) {

    // Set state
    const [profile, setProfile] = useState({});
    // const [questionList, setQuestionList] = useState([]);
    // const [userAnswers, setUserAnswers] = useState({ user_answers: [] });
    const [loggedIn] = useOutletContext();

    // Hooks
    const { id } = useParams();
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

        // fetch(`${import.meta.env.VITE_API_URL
        //     }users-answers`).then((results) => {
        //         return results.json();
        //     })
        //     .then((data) => {
        //         setUserAnswers(data);
        //     });
    }, []);

    const profilePic = profile.profile_pic;
    const video = profile.video;
    // const answers = profile.answers;
    const answers = profile.user_answers;
    // console.log(answers[0].answer);

    return (
        <div className="page-container">
            {loggedIn &&
                <div id="edit-delete-container">
                    <Link to={editLink} className="profile-nav-btns">
                        Edit
                    </Link>
                    <Link to={deleteLink} className="profile-nav-btns">
                        Delete
                    </Link>
                </div>
            }
            <div className="column-container">
                <img src={profilePic} alt="profile picture" className="profile-img" />
                <div className="top-right">
                    <h1>{profile.first_name} {profile.last_name}</h1>
                    <h3 className="profile-h3">{profile.pronouns}</h3>
                    <h3 className="profile-h3">{profile.job_title}</h3>
                    <h3 className="profile-h3 profile-tagline">{profile.tagline}</h3>
                    <br></br>
                    <p className="profile-question">
                    </p>
                </div>

                <div className="bottom-left">
                    {/* <ul>
                        {profile.user_answers.map((answer, key) => {
                            return <li key={key} answer={answer}>test</li>;
                        })}
                    </ul> */}

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
                    {profile.video &&
                        <iframe width="420" height="315" controls>
                            <source src={video} type="video/mp4" />
                        </iframe>
                    }
                    <div className="profile-contacts">
                        <h2>Get in touch!</h2>
                        <ul>
                            {profile.email &&
                                <li>
                                    <h3 className="socials-header">Email: </h3>
                                    <span>
                                        <a href={profile.email}>
                                            {profile.email}
                                        </a>
                                    </span>
                                </li>
                            }
                            {profile.blog &&
                                <li>
                                    <h3 className="socials-header">Blog: </h3>
                                    <span>
                                        <a href={profile.blog}>
                                            {profile.blog}
                                        </a>
                                    </span>
                                </li>
                            }
                            {profile.linkedin &&
                                <li>
                                    <h3 className="socials-header">LinkedIn: </h3>
                                    <span>
                                        <a href={profile.linkedin}>
                                            {profile.linkedin}
                                        </a>
                                    </span>
                                </li>
                            }
                            {profile.twitter &&
                                <li>
                                    <h3 className="socials-header">Twitter: </h3>
                                    <span>
                                        <a href={profile.twitter}>
                                            {profile.twitter}
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