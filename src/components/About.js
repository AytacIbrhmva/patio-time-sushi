import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/About.css';
import SushiNewsletter from './pages/SushiNewsletter';

function About() {
  return (
    <div className='about'>
        {/* hero */}
        <div className="hero">
            <h1>About us</h1>
        </div>

        {/* founded year */}
        <section className='founded-year'>
            <div className="container">           
                {/* imgs */}
                <div className="col">                  
                    <div className="col-imgs">
                        <img 
                            className='sushi-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/geraldine-lewa-axgXb6_Tz3I-unsplash-600x900.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1500" 
                            data-aos-once="true" 
                        />
                        <img 
                            className='crab-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/cody-chan-tBUr0aIibHc-unsplash-600x900.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1000" 
                            data-aos-once="true" 
                        />
                    </div>
                </div>
                {/* text */}
                <div className="col">
                    <div className="col-text">
                        <h3 className="heading mr-180">
                            FOUNDED IN 1998
                        </h3>
                        <h1 className="title">
                            A Sophisticated Interpretation Of Traditional Japanese Cuisine
                        </h1>
                        <p className="desc">
                            A distinctive, well-preserved and comfortable space, high- 
                            quality products, authentic cuisine, food and drinks are 
                            done flawlessly.
                            <br /> <br /> 
                            We continue to be one of the top Japanese restaurants in 
                            America, attracting countless food lovers from all over the 
                            world. Our one-of-a-kind menu includes authentic tapas- 
                            style Japanese dishes and homemade desserts.
                        </p>
                    </div>
                </div>            
            </div>
        </section> 

        {/* where began */}
        <section className="where-began">
            <div className="container">
                {/* text */}
                <div className="col">
                    <div className="col-text">
                        <h3 className="heading mr-160">
                            WHERE IT ALL BEGAN
                        </h3>
                        <h1 className="title">
                            Our History & Food Philosophy
                        </h1>
                        <p className="desc">
                            We are located in an excellent location in the center of the
                            city, quiet in the middle of the hustle and bustle. Enjoy 
                            your meal time in a comfortable environment. We can’t 
                            wait to serve you at our restaurant.
                            <br /><br />
                            We present delicious and enticing dishes with high-quality 
                            ingredients. There is no set protocol for ordering from the menu.
                        </p>
                    </div>
                </div>
                {/* imgs */}
                <div className="col">
                    <div className="col-imgs">
                        <img className='chief-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/tran-gia-tu-3EzCJozHHL0-unsplash-550x619.jpg" 
                            alt="meal"
                            data-aos='fade-up' 
                            data-aos-duration="1000" 
                            data-aos-once="true" 
                        />
                        <img className='light-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/geraldine-lewa-qJ_hJ_-dkfA-unsplash-370x555.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1500" 
                            data-aos-once="true" 
                        />
                    </div>
                </div>
            </div>
        </section>
        
        {/*chefs img */}
        <div className="chefs-img"></div>

        {/* enjoy our food */}
        <section className="enjoy-our-food">
            <div className="container">
                {/* text */}
                <div className="col">
                    <div className="col-text">
                        <h3 className="heading mr-70">
                            ENJOY OUR SIGNATURE FOOD
                        </h3>
                        <h1 className="title">
                            Excellent Ingredients & Authentic Japanese Cuisine
                        </h1>
                        <p className="desc">
                            Featuring carefully selected nigiri sushi and side dishes 
                            created meticulously by the owner chef. Come to enjoy 
                            premium quality food at this elegant restaurant.
                            <br /><br />
                            And don’t miss out on the latest seasonal dishes!
                        </p>
                        <Link className='cta' to='/about'>VIEW MENUS</Link>
                    </div>
                </div>

                {/* imgs */}
                <div className="col">
                    <div className="col-imgs">
                        <img className='sushi-california-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/marina-grynykha-hbcKVe0_Jg8-unsplash-550x825.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1000" 
                            data-aos-once="true" 
                        />
                        <img className='sushi-wasabi-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/cath-smith-U3FD3M8mCC0-unsplash-370x555.jpg" 
                            alt="meal"
                            data-aos='fade-up' 
                            data-aos-duration="1500" 
                            data-aos-once="true" 
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* join us */}
        <section className="join-us">
            <div className="container">
                {/* imgs */}
                <div className="col">
                    <div className="col-imgs">
                        <img className='smoothie-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mae-mu-GFhqNX1gE9E-unsplash-370x555.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1500" 
                            data-aos-once="true" 
                        />
                        <img className='ramen-img' 
                            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/insung-yoon-S14EkQbYVnQ-unsplash-550x825.jpg" 
                            alt="meal" 
                            data-aos='fade-up' 
                            data-aos-duration="1000" 
                            data-aos-once="true" 
                        />
                    </div>
                </div>
                {/* text */}
                <div className="col">
                    <div className="col-text">
                        <h3 className="heading mr-160">
                            JOIN US AT PATIO.TIME
                        </h3>
                        <h1 className="title">
                            We Are Hiring!
                        </h1>
                        <p className="desc">
                            We are looking for chefs and service staff at Patio.Time 
                            Sushi and our other branches. Please call or email for 
                            details.
                        </p>
                        {/* jobs table */}
                        <table className="jobs-table">
                            <tr>
                                <td className='id'>01.</td>
                                <td className='job'>Sushi Chef - New York</td>
                            </tr>
                            <tr>
                                <td className='id'>02.</td>
                                <td className='job'>Waiter - New York</td>
                            </tr>
                            <tr>
                                <td className='id'>03.</td>
                                <td className='job'>Receptionist - Kyoto</td>
                            </tr>
                        </table>
                        <Link className='cta' to='/about'>SEND RESUME & APPLY NOW</Link>
                    </div>
                </div>
            </div>
        </section>
       
      <SushiNewsletter />
    </div>
  )
}

export default About