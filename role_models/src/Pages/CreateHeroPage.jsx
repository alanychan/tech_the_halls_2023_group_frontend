// Components
import CreateHeroForm from "../Components/CreateHeroForm/CreateHeroForm";

function CreateHero() {
    return (
        <div className="page-container">
            <h1>Create a new hero card</h1>
            <CreateHeroForm />
            {/* <p>Already have an account? <a href="/login">Log in here!</a></p> */}
        </div>
    )
}

export default CreateHero;