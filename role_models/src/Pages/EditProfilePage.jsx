import CreateProfileForm from "../Components/CreateProfileForm/CreateProfileForm";
import UpsertProfileForm from "../Components/UpsertProfileForm/UpsertProfileForm";

function EditProfilePage() {

    return (
        <div className="page-container">
            <h1>Update your Profile!</h1>
            <UpsertProfileForm />
        </div>
    );
}

export default EditProfilePage;