import { Link } from "react-router-dom";

import "./HeroCard.css";

function HeroCard() {

    return (
        <>
        <div className="hero-card">
            <img src="" alt="Photo of famous woman in tech"/>
            <div className="hide">
            <h3>Name</h3>
            <p>Short bio</p>
            <Link className="btn">Find out more...</Link>
            </div>
        </div >
        <div className="hero-card">
            <img src="" alt="Photo of famous woman in tech"/>
            <div className="hide">
            <h3>Name</h3>
            <p>Short bio</p>
            <Link className="btn">Find out more...</Link>
            </div>
        </div >
        <div className="hero-card">
            <img src="" alt="Photo of famous woman in tech"/>
            <div className="hide">
            <h3>Name</h3>
            <p>Short bio</p>
            <Link className="btn">Find out more...</Link>
            </div>
        </div >
        </>
    );
}

export default HeroCard;