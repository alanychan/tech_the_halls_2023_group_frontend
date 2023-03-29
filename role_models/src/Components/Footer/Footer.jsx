import { Link } from "react-router-dom";
import facebook from '../../assets/Images/Facebook_logo.png';
import instagram from '../../assets/Images/Instagram_logo.png';
import linkedIn from '../../assets/Images/LinkedIn_logo.png';
import website from '../../assets/Images/Website_logo.png';
import slack from '../../assets/Images/Slack_logo.png';

import './Footer.css'

function Footer() {
    const today = new Date();

    return (
        <footer>
            <div className="left-side">
                <div className="top-left">
                    <h3 className="left-title">
                        Tech &#60;Div&#62;ersity
                    </h3>

                    <p>Our definition of women includes transgender and cisgender, all those who experience or have experienced oppression as women, including non-binary and gender non-conforming people and all those who identify as women. </p>
                    <br></br>
                    <p>We acknowledge the traditional owners of the lands on which we live, work and learn and pay our respects to their elders past, present and emerging.</p>
                    <br></br>
                </div>
                <div className="bottom-left">
                    <p>Copyright {today.getFullYear()}</p>
                </div>
            </div>




            <div className="right-side">

                <h3 className="right-title">
                    Connect with us
                </h3>
                <div className="socials_containers">
                    <Link to="https://shecodes.com.au" target="_blank">
                        <img src={website} className="social-logo" />
                    </Link>

                    <Link to="https://www.facebook.com/shecodesaustralia/" target="_blank">
                        <img src={facebook} className="social-logo" />
                    </Link>

                    <Link to="https://www.instagram.com/shecodesaus/?hl=en" target="_blank">
                        <img src={instagram} className="social-logo" />
                    </Link>

                    <Link to="https://www.linkedin.com/company/shecodesaustralia/?originalSubdomain=au" target="_blank">
                        <img src={linkedIn} className="social-logo" />
                    </Link>

                    <Link to="https://shecodesaus.slack.com/ssb/redirect" target="_blank">
                        <img src={slack} className="social-logo" />
                    </Link>
                </div>

                {/* <p className="social-logo">IG</p>
                    <p className="social-logo">FB</p>
                    <p className="social-logo">LI</p> */}
            </div>


        </footer>
    )
}

export default Footer;