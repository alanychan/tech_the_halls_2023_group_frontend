import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import Dropdown from "react-dropdown-select";
//Component
// import QuestionsAnswersForm from "./QuestionsAnswersForm";

function UpsertProfileForm({ user: userData, isCreateProfile: stateCreateProfile }) {

  
  //State  
  const [user , setUser] = useState({
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    username: userData?.username || "",
    email: userData?.email || "",
    password: userData?.password || null,
    
    blog: userData?.blog || null,
    city: userData?.city || null,
    country: userData?.country || null,
    featured: userData?.featured || false,
    is_active: userData?.is_active || false,
    is_published: userData?.is_published || false,
    job_title: userData?.job_title || null,
    linkedin: userData?.linkedin || null,
    profile_pic: userData?.profile_pic || null,
    pronouns: userData?.pronouns || null,
    tagline: userData?.tagline || null,
    twitter: userData?.twitter || null,
    video: userData?.video || null,

    categories:[],
    user_answers: []
  });

  useEffect(() => {
    setUser(prevUser => ({
      ...prevUser,
      ...userData
    }));
  }, [userData]);

  const authToken = window.localStorage.getItem("token");
 
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  let [error, setError] = useState(null);
  const errorStyle = {
    color: 'red',
    fontSize: 'smaller',
    padding: '0 0 10px 10px',
  };
  
  const selectPronouns = useMemo(()=> [
    { label: "She/Her", value: "She/Her"},
    { label: "They/Them", value: "They/Them"},
    { label: "Custom", value: "Custom"}
  ], []);

   
  console.log('initial state userData:', userData)
  console.log('initial state user:', user)
  console.log("authToken:" , authToken)
  console.log('stateCreateProfile:', stateCreateProfile)

  
  const handleChange = useCallback((event) => {
    console.log(">handleChange>", user);
    
    const { id, value } = event.target;

    setUser((prevUser) => ({
        ...prevUser,
        [id]:value,
    }));
  }, []);

  const handleDropdownChange = useCallback((selected, id) => {
    setUser((prevUser) => ({
          ...prevUser,
          [id]: selected[0] ? selected[0]?.value : null
    }));
  }, []);
  

  const postData = async () => {
    console.log("postData: ",  JSON.stringify(user), "< end postData.");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}users/`,
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      return response.json();
    } 
    catch (err) {
      console.error(err);
      setError(`Error: ${err.message}`);
    };
  }
  
  const updateData = async () => {
    console.log("postData:",  JSON.stringify(user), "<< end postData. user id:", user.id);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      return response.json();
    } 
    catch (err) {
        console.error(err);
        setError(`Error: ${err.message}`);
    };
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (stateCreateProfile) {        
        await postData();
      } else {
        await updateData();
      }

      // event.target.submit();
    } catch (err) {
      console.error(err);
      setError(`Error: ${err.message}`);
    };

  };

  return (
    <>
    <div className="form-container">
      <form onSubmit={handleSubmit}>      
        <div>
          <p className="error">{error && error}</p>
          <p>* Indicates required</p>
        </div>
        <div>
          <label htmlFor="first_name">First Name *</label>
          {/* display error message if first_name is missing */}
          {!stateCreateProfile ? user.first_name === '' && <span style={errorStyle}>Please enter your first name</span> : null}
          <input
              type="text"
              id="first_name"
              onChange={handleChange}
              placeholder="First Name"
              required
              value={user.first_name ?? userData?.first_name}
              />
        </div>
        <div>
          <label htmlFor="last_name">Last Name *</label>
          {/* display error message if last_name is missing */}
          {!stateCreateProfile ? user.last_name === '' && <span style={errorStyle}>Please enter your last name</span> : null}
          <input
              type="text"
              id="last_name"
              onChange={handleChange}
              placeholder="Last Name"
              required
              value={user.last_name ?? userData?.last_name}
            />
        </div>
        <div>
          <label htmlFor="username">Username *</label>
          {/* display error message if username is missing */}
          {!stateCreateProfile ? user.username === '' && <span style={errorStyle}>Please enter a username</span> : null}
          <input
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="Username"
              required
              value={user.username ?? userData?.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          {/* display error message if email is missing */}
          {!stateCreateProfile ? user.email === '' && <span style={errorStyle}>Please enter your email address</span> : null}
          <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="youremail@email.com"
              required
              value={user.email ?? userData?.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          {/* display error message if password is missing */}
          {!stateCreateProfile ? user.password === '' && <span style={errorStyle}>Please enter a password</span> : null}
          <input
              type="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"
              required
              value={user.password ?? userData?.password}
          />
        </div>
        
          <div>
              <label htmlFor="pronouns">Pronouns</label>
              <Dropdown 
                    id="pronouns"
                    options={selectPronouns} 
                    onChange={(selected) => handleDropdownChange(selected, "pronouns")}
                    value={user.pronouns ?? userData?.pronouns}
                    // placeholder={user.pronouns ?? userData?.pronouns}
                />
          </div>

          <div>
              <label htmlFor="profile_pic">Profile Photo</label>
              <input
                  type="text"
                  id="profile_pic"
                  onChange={handleChange}
                  placeholder="Profile Photo"
                  value={user.profile_pic ?? userData?.profile_pic}
              />
          </div>
          <div>
              <label htmlFor="tagline">Tagline</label>
              <input
                  type="text"
                  id="tagline"
                  onChange={handleChange}
                  placeholder="Tagline"
                  value={user.tagline ?? userData?.tagline}
              />
          </div>
          <div>
              <label htmlFor="blog">Blog</label>
              <input
                  type="text"
                  id="blog"
                  onChange={handleChange}
                  placeholder="BLog"
                  value={user.blog || userData?.blog}
              />
          </div>
          <div>
              <label htmlFor="city">City</label>
              <input
                  type="text"
                  id="city"
                  onChange={handleChange}
                  placeholder="City"
                  value={user.city ?? userData?.city}
              />
          </div>
          <div>
              <label htmlFor="country">Country</label>
              <input
                  type="text"
                  id="country"
                  onChange={handleChange}
                  placeholder="Country"
                  value={user.country ?? userData?.country}
              />
          </div>
          <div>
              <label htmlFor="job_title">Job Title</label>
              <input
                  type="text"
                  id="job_title"
                  onChange={handleChange}
                  placeholder="Job Title"
                  value={user.job_title ?? userData?.job_title}
              />
          </div>
          <div>
              <label htmlFor="linkedin">Linkedin</label>
              <input
                  type="text"
                  id="linkedin"
                  onChange={handleChange}
                  placeholder="Linkedin"
                  value={user.linkedin ?? userData?.linkedin}
              />
          </div>
          <div>
              <label htmlFor="twitter">Twitter</label>
              <input
                  type="text"
                  id="twitter"
                  onChange={handleChange}
                  placeholder="Twitter"
                  value={user.twitter ?? userData?.twitter}
              />
          </div>
          <div>
              <label htmlFor="video">Video</label>
              <input
                  type="text"
                  id="video"
                  onChange={handleChange}
                  placeholder="Video"
                  value={user.video ?? userData?.video}
              />
          </div>
          {/* <div><QuestionsAnswersForm/></div> */}
          <div>
            {user.user_answers.map((user_answers, key)=>{
              return (
                  <li key={key}>
                  <label htmlFor="answers">{user_answers.question}</label>
                  <textarea
                      id="answers"
                      // onChange={handleChange}
                      rows={5}
                      cols={48}
                      value={user_answers?.answer}
                  />
                  </li>
                );
            })}
          </div>
        <button type="submit" className="btn">
            {!stateCreateProfile ? 'Update' : 'Create'} Profile!
        </button>
      </form>
    </div>
    </>
  );
}

export default UpsertProfileForm;