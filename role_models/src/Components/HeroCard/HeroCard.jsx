import { Link, useOutletContext } from "react-router-dom";

import "./HeroCard.css";

function HeroCard(props) {
    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();

    const { heroData } = props;

    return (
        <div className="hero-card">
            <img src={heroData.bio_pic} alt="Photo of our tech hero"/>
            <div className="hero-details">
                <h3>{heroData.name}</h3>
                <p>{heroData.bio_text}</p>
                {loggedIn?
                <div>
                    <Link className="btn" to="">Edit</Link>
                    <Link className="btn" to="">Delete</Link>
                </div>
                : <></> }
            </div>
        </div >
    );
}

export default HeroCard;