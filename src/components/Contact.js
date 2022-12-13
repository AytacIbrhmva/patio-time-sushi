import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import validationSchema from './pages/FormValidation';

import { Link } from 'react-router-dom';
import SushiNewsletter from './pages/SushiNewsletter';
import './styles/Contact.css';

function Contact() {

  const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema,
  })

  return (
    <div className='contact'>
      <div className="container">
        <h1 className="contact-title">Locations</h1>
        {/* cards */}
        <div className="contact-cards">
          <div className="card">
            <img src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/geraldine-lewa-qJ_hJ_-dkfA-unsplash-683x1024.jpg" alt="interior" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-heading">AMERICA</h4>
              <h1 className="card-title">New York</h1>
              <p className="address">
                212 Madison Ave, New York, NY 10016
              </p>
              <a className='email' href="malito:booking@patiotime.com">booking@patiotime.com</a>
              <a className="tel" href="tel:+390551234567">+39 055 123 4567</a>
              <a className='cta' target='_blank' href='https://www.google.com/maps/place/Barbican+Centre/@51.5205487,-0.0936463,18z/data=!4m13!1m7!3m6!1s0x48761ca98744377d:0x9e296ec2b218ce78!2sSilk+St,+London,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.5198778!4d-0.0916239!3m4!1s0x48761b56fb64b275:0xc756e26675d21f40!8m2!3d51.5202077!4d-0.0937864'>
                GET DIRECTIONS
              </a>
            </div>
          </div>
          <div className="card">
            <img src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/kris-sevinc-NVX55qVyEkE-unsplash-683x1024.jpg" alt="interior" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-heading">JAPAN</h4>
              <h1 className="card-title">Kyoto</h1>
              <p className="address">
                212 Madison Ave, New York, NY 10016
              </p>
              <a className='email' href="malito:booking@patiotime.com">booking@patiotime.com</a>
              <a className="tel" href="tel:+390551234567">+39 055 123 4567</a>
              <a className='cta' target='_blank' href='https://www.google.com/maps/place/Barbican+Centre/@51.5205487,-0.0936463,18z/data=!4m13!1m7!3m6!1s0x48761ca98744377d:0x9e296ec2b218ce78!2sSilk+St,+London,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.5198778!4d-0.0916239!3m4!1s0x48761b56fb64b275:0xc756e26675d21f40!8m2!3d51.5202077!4d-0.0937864'>
                GET DIRECTIONS
              </a>
            </div>
          </div>
          <div className="card">
            <img src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/yu-BLV9FXiw9lw-unsplash-683x1024.jpg" alt="interior" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-heading">AMERICA</h4>
              <h1 className="card-title">Las Vegas</h1>
              <p className="address">
                212 Madison Ave, New York, NY 10016
              </p>
              <a className='email' href="malito:booking@patiotime.com">booking@patiotime.com</a>
              <a className="tel" href="tel:+390551234567">+39 055 123 4567</a>
              <a className='cta' target='_blank' href='https://www.google.com/maps/place/Barbican+Centre/@51.5205487,-0.0936463,18z/data=!4m13!1m7!3m6!1s0x48761ca98744377d:0x9e296ec2b218ce78!2sSilk+St,+London,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.5198778!4d-0.0916239!3m4!1s0x48761b56fb64b275:0xc756e26675d21f40!8m2!3d51.5202077!4d-0.0937864'>
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="contact-us">
        <div className="col">
          <h4 className="heading">GENERAL INQUIRIES</h4>
          <h1 className="title">Contact Us</h1>
          <p className="desc">
            For general inquiries please kindly complete the form, or email: info@patiotime.com <br /><br />
            Reserve by email: booking@patiotime.com <br /><br />
            Tel: +39 055 1234567 <br /><br />
            <span className='bold'>Opening hours:</span> <br />
            Mon – Thu: 10.00 am – 01:00 am <br />
            Fri – Sun: 10:00 am – 02:00 am <br />
          </p>
          <Link className='cta' to='/reservations'>MAKE A RESERVATION</Link>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit} className='contact-form' action="">
              <label htmlFor="name">Your name</label>
              <input 
              name='name' 
              onChange={handleChange}
              onBlur={handleBlur}
              type="text" />
              
              {errors.name && touched.name && <div className='error'>{errors.name}</div>}

              <label htmlFor="email">Your email</label>
              <input 
              name='email' 
              onChange={handleChange}
              onBlur={handleBlur}
              type="email" />

              {errors.email && touched.email && <div className='error'>{errors.email}</div>}

              <label htmlFor="subject">Subject</label>
              <input 
              name='subject' 
              onChange={handleChange}
              onBlur={handleBlur}
              type="text" />

              {errors.subject && touched.subject && <div className='error'>{errors.subject}</div>}

              <label htmlFor="message">Your message (optional)</label>
              <textarea 
              name="message" 
              onChange={handleChange}
              onBlur={handleBlur}
              id="" cols="30" rows="4"></textarea>

              {errors.message && touched.message && <div className='error'>{errors.message}</div>}

            <button type='submit' className="cta">SUBMIT</button>
            </form>
        </div>
      </div>
      
      <SushiNewsletter />
    </div>
  )
}

export default Contact