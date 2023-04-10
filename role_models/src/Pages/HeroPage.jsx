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
        fetch(`${import.meta.env.VITE_API_URL}hero/${id}`)
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
            <img src={hero.bio_pic} />
            <div>
                <h3>{hero.name}</h3>
                <div>
                    <p>{hero.bio_text}</p>
                    <Link to="https://reshmasaujani.com/about/">Biography link</Link>
                </div>
            </div>
        </div>
        <div className="edit-hero-form">
            <h3>Edit hero form</h3>
            <EditHeroForm />
        </div>
    </div>
    </section>
  );
}

export default HeroPage;