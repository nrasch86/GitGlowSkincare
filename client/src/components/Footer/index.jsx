
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://twitter.com/GitGlowSkinCare" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        </a>
        <a href="https://instagram.com/gitglowskincare" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
        </a>
      </div>
      <div className="brand">
        GitGlow Skincare est. 2024
      </div>
    </footer>
  );
};

export default Footer;
