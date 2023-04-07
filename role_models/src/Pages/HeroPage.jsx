import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        });
    }, []);

  return (
    <>
    <div>
        <img src={hero.bio_pic} />
        <h2>{hero.name}</h2>
        <p>{hero.bio_text}</p>

    </div>    
    <div>
        <EditHeroForm />
    </div>
    </>
  );
}

export default HeroPage;