import React, {useEffect} from 'react';
import '../styles/Recommendations.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Recommendations = () => {

    useEffect(() => {
        Aos.init({});
    },[]);

  return (
    <section className="recommendations">
        <h4 className="recommend-heading"> RECOMMENDATIONS</h4>
        {/* selected menus */}
        <h1 className='recommend-title'>Selected Menus</h1>
        {/* recommendations menus */}
        <div className="recommend-menus">
            <div className="container">
                <div className="col">
                    <h3 className='menu-type'>LUNCH SPECIAL</h3>
                    <h5 className='menu-times'>11:30 am to 2:30 pm</h5>
                    <ul className="menu-list">
                        <li className='menu-item'>
                            <h3 className='meal-name'>Salmon Sashimi 
                                <span className='line'></span>
                                $26
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                        <li className='menu-item'>
                            <h3 className='meal-name'>Yellow Tail Sashim
                                <span className='line'></span>
                                $21
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                        <li className='menu-item'>
                            <h3 className='meal-name'>The Izakaya Oyster
                                <span className='line'></span>
                                $12
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li> 
                        <li className='menu-item'>
                            <h3 className='meal-name'>Grilled Mackerel
                                <span className='line'></span>
                                $16
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h3 className='menu-type'>DINNER SPECIAL</h3>
                    <h5 className='menu-times'>5:30 pm to 10 am</h5>
                    <ul className="menu-list">
                        <li className='menu-item'>
                            <h3 className='meal-name'>Addictive Cucumber
                                <span className='line'></span>
                                $8
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                        <li className='menu-item'>
                            <h3 className='meal-name'>Tofu & Sesame Hot Pot
                                <span className='line'></span>
                                $18
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                        <li className='menu-item'>
                            <h3 className='meal-name'>Parmigiano Ramen
                                <span className='line'></span>
                                $18
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li> 
                        <li className='menu-item'>
                            <h3 className='meal-name'>Sake Steamed Clams
                                <span className='line'></span>
                                $16
                            </h3>
                            <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* menus end */}

        {/* a la carte*/}
        <div className="la-carte">
            <div className="col">
                <img className='col-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/cody-chan-FyerbLWRr2M-unsplash-780x1170.jpg" alt="" />
            </div>
            <div className="col">
                <div className="col-text">
                    <h4 className='col-heading'>À LA CARTE</h4>
                    <h1 className='col-title'>View Full Menus</h1>
                    <p className='col-desc'>
                        We serve food, harmony, and laughter. Making delicious food and providing a wonderful eating experience.
                    </p>
                    <Link className='cta' to='/menus'>BROWSE MENUS</Link>
                </div>
            </div>
            <div className="col">
                <img className='col-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mae-mu-GFhqNX1gE9E-unsplash-780x1170.jpg" alt="" />
            </div>
        </div>
        
        {/* popular */}
        <div className="popular">
            <div className="col">
                <div className="col-text">
                    <h4 className='col-heading'>THE MOST POPULAR</h4>
                    <h1 className='col-title'>Chef Selection</h1>
                    <p className='col-desc'>
                        We present delicious and enticing dishes with high-quality ingredients. There is no set protocol for ordering from the menu.
                    </p>
                    <Link className='cta' to='/menus'>LEARN MORE</Link>
                </div>
            </div>
            <div className="col"
                data-aos='fade-up' 
                data-aos-duration="1000" 
                data-aos-once="true" 
            >
                <img className='col-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/marina-grynykha-hbcKVe0_Jg8-unsplash-780x1170.jpg" alt="" />
            </div>
            <div className="col"
                data-aos='fade-up' 
                data-aos-duration="1500" 
                data-aos-once="true" 
            >
                <img className='col-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mae-mu-en4qp-aK1h4-unsplash-780x1170.jpg" alt="" />
            </div>
         </div>

        {/* quiet space */}
         <div className="quiet-space">
            <div className='container'>
                <div className="col"
                    data-aos='fade-up' 
                    data-aos-duration="1000" 
                    data-aos-once="true"
                >
                    <img alt="sushi" className="sushi-img"  src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/geraldine-lewa-axgXb6_Tz3I-unsplash-600x900.jpg" />
                </div>
                <div className="col">
                    <div className="col-text">
                        <h4 className='col-heading'>
                            BEAUTIFUL QUIET SPACE
                        </h4>
                        <h1 className="col-title">
                            Perfect Dining <br /> Experience
                        </h1>
                        <p className="col-desc">
                            We are located in an excellent location in the center of the city, quiet in the <br /> middle of the hustle and bustle. Enjoy your meal time in a comfortable <br /> environment. We can’t wait to serve you at our restaurant.
                        </p>
                        <Link className='cta' to='/contact'>HOW TO GET HERE</Link>
                    </div>
                    <img className='flower-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/cyprien-delaporte-RonGQFUO54o-unsplash-600x450.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1500" 
                            data-aos-once="true" 
                        />
                </div>
            </div>
         </div>
    </section>
  )
}

export default Recommendations