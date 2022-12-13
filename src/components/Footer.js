import {useEffect} from 'react';
import './styles/Footer.css';
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaShoppingBag} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
      Aos.init({});
  },[]);

  return (
    <footer>
        <div 
          className="container"
          data-aos='zoom-in' 
          data-aos-duration="1000" 
          data-aos-once="true" 
        >
            <img className='footer-logo' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/sushi-logo-new.png" alt="" />
            <p className='adress'>212 Madison Ave, New York, NY 10016</p>
            <div className="mails">
              <a href="malito:contact@patiotime.com">contact@patiotime.com</a>
              <div className='line'></div>
              <a className='footer-contact' href="malito:booking@patiotime.com">booking@patiotime.com</a>
            </div>
            <a href="tel:055-325-16-16">(055) 325 16 16</a>
            <div className="footer-icon">
              <FaFacebookF className='social-media-icon' />
              <FaYoutube className='social-media-icon'/>
              <FaTwitter className='social-media-icon'/>
              <FaInstagram className='social-media-icon'/>
            </div>
        
        </div>
    </footer>
  )
}

export default Footer