import {useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../styles/OnlineReserv.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


const OnlineReservation = () => {

    useEffect(() => {
      Aos.init({});
  },[]);


  return (
    <section className="online-reserv">
        <div className="container"
          data-aos='fade-up' 
          data-aos-duration="1000" 
          data-aos-once="true" 
        >
            <h3 className="heading">DINE AT PATIO.TIME</h3>
            <h1 className="title">Online Reservations</h1>
            <p className="desc">
              Focus on the inheritance and sharing of Japanese cuisine, restore the taste of the 
              ingredients, and explore all kinds of delicious possibilities.
            </p>
            <Link className='cta' to='reservations'>MAKE A RESERVATION</Link>
        </div>
    </section>
  )
}

export default OnlineReservation