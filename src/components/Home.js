import { useEffect } from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Recommendations from './pages/Recommendations';
import OnlineReservation from './pages/OnlineReservation';
import {MdKeyboardArrowDown} from 'react-icons/md';

import HistoryCol1 from '../assets/imgs/historycol1.jpg';
import Col2 from '../assets/imgs/col2.jpg';


function Home() {

  useEffect(() => {
    Aos.init({});
},[]);

  return (
    <div className='home'>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="top">
              <h1 className="title">
                CONTEMPORARY JAPANESE CUISINE
              </h1> 
              <div className="btns">
                <Link className="reserv-link" to='/reservations'>
                  MAKE A RESERVATION
                </Link>
                <Link className='view-locations-link' to='/contact'>VIEW ALL LOCATIONS</Link>
              </div>
          </div>

          <div className='bottom'>
            <MdKeyboardArrowDown className='icon'/> SCROOL DOWN
          </div>
        </div>
      </section>

      {/* FOUNDED HISTORY */}
      <section className="founded-year">
        <div className="container">
            <div className="col">
                <h3 className="heading">
                    FOUNDED IN 1998
                </h3>
                <h1 className="title">
                A Sophisticated Interpretation Of Traditional Japanese Cuisine
                </h1>
                <img
                    className='sushi-img' src={HistoryCol1} alt="sushi" 
                    data-aos='fade-up' 
                    data-aos-duration="1000" 
                    data-aos-once="true" 
                    />
            </div>
            <div className="col">
                <img 
                    className='crab-img' src={Col2} alt="crab" 
                    data-aos='fade-up' 
                    data-aos-duration="1000" 
                    data-aos-once="true" 
                />
            </div>
        </div>
      </section>
    
      <Recommendations/>
      <OnlineReservation/>
    </div>
  )
}

export default Home