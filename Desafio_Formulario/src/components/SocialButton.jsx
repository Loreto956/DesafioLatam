import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const SocialButton = ({ icons = ['facebook', 'linkedin', 'github'], onClick }) => {
    return (
      <div className="d-flex justify-content-center">
        {icons.map((icon, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary m-2 iconSocialBlock p-2 m-2 rounded-circle`}
            onClick={() => onClick(icon)}
          >
            <FontAwesomeIcon icon={getFontAwesomeIcon(icon)} />
          </button>
        ))}
      </div>
    );
  };
  
  const getFontAwesomeIcon = (icon) => {
    switch (icon) {
      case 'facebook':
        return faFacebook;
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
      default:
        return null;
    }
  };
  
  export default SocialButton;