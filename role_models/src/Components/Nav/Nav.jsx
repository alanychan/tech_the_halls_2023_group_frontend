import { Link } from "react-router-dom";
import './Nav.css'
function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }
    return (
        <nav>
            <div id="logo">
                <img src="https://i.postimg.cc/3Jy2bvqq/Updated-Tech-Diversity-logo.png" alt="logo" />
            </div>
            <div id="menu-link">
                <Link to="/">Home</Link>
            </div>
            {/* <div id="profile-page">
            <Link to="/profile-page">Profile</Link>
            </div> */}
            <div id="login-btn">
                {!loggedIn && <Link to="/login" className="btn login-btn">Log In</Link>}
                {loggedIn && <button onClick={handleClick} className="btn login-btn">Log Out</button>}
            </div>
        </nav>
    );
}
export default Nav;

