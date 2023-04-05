// Components
// import CreateProfileForm from "../Components/CreateProfileForm/CreateProfileForm";
import UpsertProfileForm from "../Components/UpsertProfileForm/UpsertProfileForm";

function CreateProfile() {
    return (
        <div className="page-container">
            <h1>Set up your Profile!</h1>
            <UpsertProfileForm isCreateProfile={true}/>
            {/* <CreateProfileForm isCreateProfile={true}/> */}
            <p>Already have an account? <a href="/login">Log in here!</a></p>
        </div>
    )
}

export default CreateProfile;