import {useEffect} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../styles/SushiNewsletter.css'

const SushiNewsletter = () => {
  return (
    <div className="sushi-newsletter">
        <div className="container"
            data-aos='fade-up' 
            data-aos-duration="1500" 
            data-aos-once="true" 
        >
            <h1 className="title">Sushi Newsletter</h1>
            <p className="desc">
                If you would like to stay connected and be the first to know about our news, events, and exclusive offers, please 
                sign up for our newsletter. You can opt out at any time by clicking unsubscribe on the newsletter.
            </p>
            <div className="email-container">
                <input className='email-input' type="email" placeholder='Your Email Address'/>
                <AiOutlineArrowRight className='icon'/>   
            </div>
            <div className="checkbox-container">
                <input className='checkbox' type='checkbox'/>
                <label htmlFor="">I agree to the Privacy Policy</label>
            </div>
        </div>
    </div>
    
  )
}

export default SushiNewsletter