import { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import Dropdown from "react-dropdown-select";

function CreateProfileForm({isCreateProfile: stateCreateProfile}) {
 
  //State
  const [user , setUser] = useState({
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    password: null,
    /**the below fields are not required on create. */
    blog: null,
    city: null,
    country: null,
    featured: false,
    is_published: false,
    job_title: null,
    linkedin: null,
    profile_pic: null,
    pronouns: null,
    tagline: null,
    twitter: null,
    video: null,
    categories: null,
    user_answers: null
  });

  const errorStyle = {
    color: 'red',
    fontSize: 'smaller',
    padding: '0 0 10px 10px',
  };

  //Hooks 
  const navigate = useNavigate();
  const navigateToLogin = () => {
      navigate('/login');
  };


  const handleChange = (event) => {
    
    const { id, value } = event.target;

    setUser((prevUser) => ({
        ...prevUser,
        [id]:value,
    }));
   
  };

  const postData = async () => {
    
    console.log("postData: ",  JSON.stringify(user), "< end postData.");

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}users/`,
      {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return response.json();
  };


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    
    try {
      postData().then((response) =>{
        console.log("handleSubmit postData:", response, "<_end.");
        navigate("/");
      });       
        
    } catch (err) {
      console.error(err);
    };    

  };

  return (
    <>
    <div className="form-container">
      <form onSubmit={handleSubmit}>      
        <div>
          <p>* Indicates required</p>
        </div>
        <div>
          <label htmlFor="first_name">First Name *</label>
          {/* display error message if first_name is missing */}
          {user.first_name === '' && <span style={errorStyle}>Please enter your first name</span>}
          <input
              type="text"
              id="first_name"
              onChange={handleChange}
              placeholder="First Name"
              required
              />
              
          </div>
        <div>
          <label htmlFor="last_name">Last Name *</label>
          {/* display error message if last_name is missing */}
          {user.last_name === '' && <span style={errorStyle}>Please enter your last name</span>}
          <input
              type="text"
              id="last_name"
              onChange={handleChange}
              placeholder="Last Name"
              required
          />
        </div>
        <div>
            <label htmlFor="username">Username *</label>
            {/* display error message if username is missing */}
            {user.username === '' && <span style={errorStyle}>Please enter a username</span>}
            <input
                type="text"
                id="username"
                onChange={handleChange}
                placeholder="Username"
                required
            />
        </div>
        <div>
            <label htmlFor="email">Email *</label>
            {/* display error message if email is missing */}
            {user.email === '' && <span style={errorStyle}>Please enter your email address</span>}
            <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="youremail@email.com"
                required
            />
        </div>
        <div>
            <label htmlFor="password">Password *</label>
            {/* display error message if password is missing */}
            {user.password === '' && <span style={errorStyle}>Please enter a password</span>}
            <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
                required
            />
        </div>
        <button type="submit" className="btn">
            Create Profile!
        </button>
      </form>
    </div>
    </>
  );
}

export default CreateProfileForm;