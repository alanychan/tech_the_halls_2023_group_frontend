import { useState, useEffect } from "react"
import { Link, useOutletContext } from "react-router-dom"

// Styles
import './HomePage.css';


// Components
import HeroCard from "../Components/HeroCard/HeroCard";

function HeroListPage() {
    const [loggedIn] = useOutletContext();

    //state
    const [heroList, setHeroList] = useState([]);

    // Effects
    useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}hero`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setHeroList(data);
            });
    }, []);

    return (
        <>
        <div className="page-container">
        {loggedIn?
            <div className="hero-section">
                <h2>Add a hero card to the Tech trailblazers</h2>
                <div className="list-hero-buttons">
                    <Link className="btn" to="/create-hero">Add a hero card</Link>
                </div>
                {heroList.map((hero, key) => {
                    return <HeroCard key={key} heroData={hero} />;
                })}
            </div>
            : <p>Log in to see a list of hero cards</p> }
        </div >
        </>
    );
};

export default HeroListPage;