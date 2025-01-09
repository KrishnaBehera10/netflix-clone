import "./Footer.css";
import fb from "../../assets/Logo/facebook_icon.png";
import instagram from "../../assets/Logo/instagram_icon.png";
import youtube from "../../assets/Logo/youtube_icon.png";
import twitter from "../../assets/Logo/twitter_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={fb} alt="fb" />
        <img src={instagram} alt="in" />
        <img src={youtube} alt="yt" />
        <img src={twitter} alt="tw" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift Cards</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact US</li>
      </ul>
      <p className="copyright-text">@ 1997-2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
