import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="left-side">
                <div className="top-left">
                    <h3 className="left-title">
                        Website Name
                    </h3>
                    <p>Some info</p>
                    <p>Some more info</p>
                </div>
                <div className="bottom-left">
                    <p>Other details</p>
                </div>
            </div>
            <div className="right-side">
                <Link to="" />
                <p className="social-logo">IG</p>
                <p className="social-logo">FB</p>
            </div>
        </footer>
    )
}

export default Footer;