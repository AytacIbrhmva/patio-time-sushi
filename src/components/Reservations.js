import React from 'react';
import ReactCalendar from './calendar/ReactCalendar';
import SushiNewsletter from './pages/SushiNewsletter';
import './styles/Reservations.css';

function Reservations() {
  return (
    <div className='reservations'>
      <div className="container">
        <div className="imgs">
          <div className="col">
            <img className='left-img'
            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/george-kedenburg-iii-jso_yKod6-c-unsplash-1024x683.jpg" 
            alt="meal" />
          </div>
          <div className="col">
            <img className='right-top-img'
            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/food-photographer-david-fedulov-2zcNfPQHlkU-unsplash-600x400.jpg" 
            alt="meal" />
            <img className='right-bottom-img'
            src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mahmoud-fawzy-EqoCUzG9200-unsplash-600x450.jpg" 
            alt="meal" />
          </div>
        </div>

        <div className="online-reservation">
          <div className="col">
            <h4 className="heading">ONLINE RESERVATION</h4>
            <h1 className="title">Book A Table</h1>
            <p className="desc">
              Closed Sunday night, Mondays & Tuesdays. Due to the vast amount of no-shows, all bookings 
              must now be secured with a credit card which will be charged $20 if you do not show up for 
              your booking.
              <br /><br />
              Unique Short Tasting Lunch Menu available from Thursday to Sunday!
              <br /><br />
              6-Course Tasting Menu ($120/PP)
              <br />
              *Course Menu Changes Depending on Market*
            </p>
          </div>
          <div className="col">
            <select className='address' name="" id="">
              <option value="0">Select a restaurant</option>
              <option value="1">Patio.Time New York</option>
              <option value="2">Patio.Time Kyoto</option>
              <option value="3">Patio.Time Las Vegas</option>
            </select>

            <select className='person-count' name="" id="">
              <option value="0">1 Person</option>
              <option value="1">2 Person</option>
              <option value="2">3 Person</option>
              <option value="3">4 Person</option>
              <option value="4">5 Person</option>
              <option value="5">6 Person</option>
              <option value="6">7 Person</option>
              <option value="7">8 Person</option>
            </select>

            {/* <select className='calendar-option' name="" id="">
              <option value="0">
                <ReactCalendar />
              </option>
            </select> */}

            <select className='time' name="" id="">
              <option value="0">12:00 am</option>
              <option value="1">12:30 am</option>
              <option value="2">1:00 am</option>
              <option value="3">1:30 am</option>
              <option value="4">2:00 am</option>
              <option value="5">2:30 am</option>
              <option value="6">3:00 am</option>
              <option value="7">3:30 am</option>
            </select>

            <div className="cta">BOOK NOW</div>
          </div>
        </div>
      </div>
      
      <SushiNewsletter />
    </div>
  )
}

export default Reservations