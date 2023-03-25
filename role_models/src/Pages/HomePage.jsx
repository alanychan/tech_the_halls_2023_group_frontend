import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
            <h1>Home Page</h1>
            <p>Be the change you want to see.</p>
            {/* <div>
                {heroList.map((hero, key) => {
                    return <HeroCard key={key} heroData={hero} />;
                })}
            </div>
            <div>
                {profileList.map((profile, key) => {
                        return <ProfileCard key={key} profileData={profile} />;
                    })}
            </div> */}
        </div>
    );
}

export default HomePage;