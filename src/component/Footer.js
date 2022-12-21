import youtube from "../img/youtube.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import './Footer.css'
const Footer = () => {
    return (
      <div className="footerdiv">
        <h4>Aynur Muradxanova  &copy; 2022</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com" target={"_blank"}>
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target={"_blank"}>
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target={"_blank"}>
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  export default Footer;