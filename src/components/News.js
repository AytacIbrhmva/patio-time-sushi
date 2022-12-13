import React from 'react';
import { Link } from 'react-router-dom';
import SushiNewsletter from './pages/SushiNewsletter';
import './styles/News.css';

function News() {
  return (
    <div className='news'>
      {/* hero */}
      <div className="hero">
        <h1>NEWS</h1>
      </div>
      {/* main */}
      <div className="container">
        <div className="news-cards">
          <div className="card">
            <Link className='card-top' to='/love-and-food'>
              <img className="card-img-top" src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/kouji-tsuru-j1-ANUxWJh4-unsplash-1200x800.jpg" alt="meal" />
            </Link>
            <div className="card-body">
              <h4 className="card-heading">
                MAY 26, 2022 . <span  className='text-orange'>NEWS</span>
              </h4>
              <h1 className="card-title">
              Love and food: It is all about spice
              </h1>
              <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean vulputate eleifend tellus. Aenean leo 
              ligula, porttitor …
              </p>
              <Link className='card-cta' to='/love-and-food'>READ MORE</Link>
            </div>
          </div>
          <div className="card">
            <Link className='card-top' to='/love-and-food'>
              <img className="card-img-top" src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/jakub-dziubak-iOHJKJqO6E0-unsplash-2-1200x719.jpg" alt="meal" />
            </Link>
            <div className="card-body">
              <h4 className="card-heading">
                MAY 25, 2022 . <span  className='text-orange'>NEWS</span>
              </h4>
              <h1 className="card-title">
              Food is the foundation of true happiness
              </h1>
              <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,  
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean vulputate eleifend tellus. Aenean leo 
              ligula, porttitor …
              </p>
              <Link className='card-cta' to='/love-and-food'>READ MORE</Link>
            </div>
          </div>
          <div className="card">
            <Link className='card-top' to='/love-and-food'>
              <img className="card-img-top" src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/moiz-k-malik-RAVnYBC-pug-unsplash-1200x675.jpg" alt="meal" />
            </Link>
            <div className="card-body">
              <h4 className="card-heading">
                MAY 24, 2022 . <span  className='text-orange'>NEWS</span>
              </h4>
              <h1 className="card-title">
              Wonderful Eating Experience
              </h1>
              <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,  
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean vulputate eleifend tellus. Aenean leo 
              ligula, porttitor …
              </p>
              <Link className='card-cta' to='/love-and-food'>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
      <SushiNewsletter />
    </div>
  )
}

export default News