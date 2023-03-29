// Components
import CreateProfileForm from "../Components/CreateProfileForm/CreateProfileForm";

function CreateProfile() {
    return (
        <div className="page-container">
            <h1>Set up your Profile!</h1>
            <CreateProfileForm />
            <p>Already have an account? <a href="/login">Log in here!</a></p>
        </div>
    )
}

export default CreateProfile;