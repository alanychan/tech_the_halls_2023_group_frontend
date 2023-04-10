import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function EditHeroForm(props) {
    const authToken = window.localStorage.getItem("token");
    const [loggedIn] = useOutletContext();

    // State
    const {heroData} = props
    const [hero, setHero] = useState();
           
    // Hooks
    const { id } = useParams();
    const navigate = useNavigate();

    // Effects
      useEffect(() => {
        // fetch is an asynchronis function
        // using 'await' stops the code and makes it wait for the function to finish, it's typically used instead of 
        // useEffect as an async code
        fetch(`${import.meta.env.VITE_API_URL}hero/${id}/`)
        .then(results => {
          return results.json();
        })
        .then((data) => {
          setHero(data);
        });
      }, []);


    // Actions
    const handleChange = (event) => {
        // target of event is input
        const {id, value} = event.target;

        // because we're not returning anything, we use ( brackets )
        setHero((prevHero) => ({
            // ... take all the values out of this object and put in new object
            ...prevHero,
            // this line overrides the previous credentials
            [id]: value,
        }));
    };

      const handleSubmit = async (event) => {
        event.preventDefault();

        if (loggedIn) {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}hero/${id}/`,
              {
                method: "put",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(hero),
              }
            );
            if (!response.ok) {
              throw new Error(await response.text());
            }
            location.reload();
          } catch (err) {
            console.error(err);
            alert(`Error: ${err.message}`);
            }
          } else {
            // redirect to login page
            navigate(`/login`);
          }
          };

    return (
      <>
      {loggedIn?
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            // value={heroData.name}
          />
        </div>
        <div>
          <label htmlFor="bio_text">Short tagline (max 200 characters):</label>
          <input
            type="text"
            id="bio_text"
            onChange={handleChange}
            // value={heroData.bio_text}
          />
        </div>
        <div>
        <label htmlFor="bio_pic">Profile image:</label>
          <input
            type="url"
            id="bio_pic"
            onChange={handleChange}
            // value={heroData.bio_pic}
          />
        </div>
        <div>
        <label htmlFor="bio_url">Biography:</label>
          <input
            type="url"
            id="bio_url"
            onChange={handleChange}
            // value={heroData.bio_url}
          />
        </div>
        <button className="btn" type="submit">
          Edit hero card
        </button>
      </form>
      : (<p>Log in to edit hero card</p>) }
      </>
    );
  }
  
  export default EditHeroForm;