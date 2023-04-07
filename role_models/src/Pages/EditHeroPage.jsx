// Components
import EditHeroForm from "../Components/EditHeroForm/EditHeroForm";

function EditHero() {
    return (
        <div className="page-container">
            <h1>Edit a hero card</h1>
            <EditHeroForm />
            {/* <p>Already have an account? <a href="/login">Log in here!</a></p> */}
        </div>
    )
}

export default EditHero;