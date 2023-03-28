import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Styles
import './HomePage.css';


// Components
import HeroCard from "../Components/HeroCard/HeroCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";

function HomePage() {
    //state
    // const [heroList, setHeroList] = usestate([]);
    // const [profileList, setProfileList] = useState([]);

    // Effects
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}profile`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             setProfileList(data);

    // fetch(`${import.meta.env.VITE_API_URL}hero`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             setHeroList(data);
    //         });
    // }, []);

    return (
        <div className="page-container">
            <h1 className="brandname-tech">tech <span className="brandname-div">&#60;Div&#62;</span><span className="brandname-ersity">ersity</span></h1>
            <h3 className="tagline">Breaking Industry Barriers</h3>
            <div className="hero-section">
                <h2>Meet our tech heroes</h2>
                <HeroCard />
                {/* {heroList.map((hero, key) => {
                    return <HeroCard key={key} heroData={hero} />;
                })} */}
            </div>

            <div className="stats-section">
                <div className="stats">
                    <h3>Did you know?</h3>
                    <p className="stat-number">24%</p>
                    <p>Computing jobs in the world held by women</p>
                </div>
                <div className="stats">
                    <h3>The Slow Rise</h3>
                    <p className="stat-number">2%</p>
                    <p>Represents the global increase of female software engineers in the past 21 years</p>
                </div>
                <div className="stats">
                    <h3>Community Pillars</h3>
                    <p className="stat-number">5,560</p>
                    <p>women have been taught by SheCodes since its inception</p>
                </div>
            </div>
            <div className="profiles-shuffle-board">
                <ProfileCard />
                <ProfileCard />
                {/* {profileList.map((profile, key) => {
                        return <ProfileCard key={key} profileData={profile} />;
                    })} */}
            </div>
            <div className="redirect">
                <h2>Get started in your tech career!</h2>
                <Link className="btn" to="https://shecodes.com.au/">Visit the She Codes website</Link>
            </div>
        </div >
    );
}

export default HomePage;

// website with stats - https://www.baysidegroup.com.au/employers/women-in-ict-in-statistics-how-does-your-company-stack-up#:~:text=Only%2024%25%20of%20computing%20jobs,experience%20gender%20bias%20at%20work. 