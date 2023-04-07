import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function CreateHeroForm() {
    const authToken = window.localStorage.getItem("token");
    const [loggedIn] = useOutletContext();

    // State
    const [hero, setHero] = useState({
      "name": "",
      "bio_text": "",
      "bio_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC611GAbv5wr3eYiZ_SibGkcthY90jbQZFg&usqp=CAU",
      "bio_url": "https://shecodes.com.au/",
      "featured": true,
      "date_created": new Date(),
    });
   
    // Hooks
    const navigate = useNavigate();

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
              `${import.meta.env.VITE_API_URL}hero/`,
              {
                method: "post",
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
            placeholder="Enter their first and last name"
          />
        </div>
        <div>
          <label htmlFor="bio_text">Short tagline (max 200 characters):</label>
          <input
            type="text"
            id="bio_text"
            onChange={handleChange}
            placeholder="Describe their achievements"
          />
        </div>
        <div>
        <label htmlFor="bio_pic">Profile image:</label>
          <input
            type="url"
            id="bio_pic"
            onChange={handleChange}
            placeholder="Enter an image URL"
          />
        </div>
        <div>
        <label htmlFor="bio_url">Biography:</label>
          <input
            type="url"
            id="bio_url"
            onChange={handleChange}
            placeholder="Enter a link to their biography"
          />
        </div>
        <button className="btn" type="submit">
          Create a hero card
        </button>
      </form>
      : (<p>Log in to create a hero card</p>) }
      </>
    );
  }
  
  export default CreateHeroForm;