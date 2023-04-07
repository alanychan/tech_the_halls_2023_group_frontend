import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Styles
import './HeroPage.css';

// Components
import EditHeroForm from "../Components/EditHeroForm/EditHeroForm";

function HeroPage() {
    // State
    const [hero, setHero] = useState([]);

    // Hooks
    const { id } = useParams();

    // Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}hero/${id}/`)
        .then(results => {
            return results.json();
        })
        .then((data) => {
            setHero(data);
        })
    }, []);

  return (
    <section>
    <h2>Edit hero card</h2>
    <div className="hero-container">
        <div className="edit-hero-page">
            {/* <img src={hero.bio_pic} /> */}
            <img src="https://www.duckcreek.com/wp-content/uploads/2021/11/Rashma_crop-1.jpg"/>
            {/* <h2>Hero name: {hero.name}</h2> */}
            <div>
                <h3>Reshma Saujani</h3>
                <div>
                    {/* <p>Hero bio: {hero.bio_text}</p> */}
                    <p>Reshma is an American lawyer, politician, civil servant, and the founder of the non-profit organization Girls Who Code. She aims to increase the number of women in computer science and close the gender employment difference in that field.</p>
                    <Link to="https://reshmasaujani.com/about/">Biography link</Link>
                    <p>Featured: True</p>
                </div>
            </div>
        </div>
        <div><EditHeroForm /></div>
    </div>
    </section>
  );
}

export default HeroPage;