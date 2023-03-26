import LoginForm from "../Components/LoginForm/LoginForm.jsx"

function LoginPage() {

    return (
        <div className="page-container">
            <h1>Login Page</h1>
            <LoginForm />
            <p>Want your profile to be displayed on Tech Diversity but don't have an account? <a href="/create-profile">Set up your your Profile here!</a></p>
            <p>Please make sure you meet the requirements for our community</p>
        </div>
    );
}

export default LoginPage;