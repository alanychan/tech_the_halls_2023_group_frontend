import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import CreateProfileForm from "../Components/CreateProfileForm/CreateProfileForm";
import UpsertProfileForm from "../Components/UpsertProfileForm/UpsertProfileForm";

function EditProfilePage() {
  const authToken = window.localStorage.getItem("token");
  const [user, setUser] = useState([]);

  //Hooks
  const { id } = useParams();

  useEffect( () => {
    const fetchUser = async () => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}users/${id}`
          );
          const data = await res.json();
          setUser(data);
        } catch (err) {
            console.log(err);
        }
      };
      fetchUser();
    }, []);

  return (
      <div className="page-container">
          <h1>Update your Profile!</h1>
          <UpsertProfileForm user={user} isCreateProfile={false}/>
      </div>
  ); 
}

export default EditProfilePage;