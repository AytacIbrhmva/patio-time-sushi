import React from 'react';
import { Link } from 'react-router-dom';
import SushiNewsletter from './pages/SushiNewsletter';
import './styles/Shop.css';
import {AiFillStar} from 'react-icons/ai';
import { product } from './product/ProductList';


function Shop() {
  return (
    <div className='shop'>
      {/* hero */}
      <div className="hero">
        <div className="shop-nav">
          <Link className='nav-link' to='/'>Home </Link>
          <span className="slash">/</span>
          <Link className='nav-link' to='/shop'>Shop</Link>
        </div>
        <h1>Shop</h1>
      </div>
      {/* main */}
      <div className="container">

        {/* sorting */}
        <div className="sorting">
           <h3 className='desc'>Showing all 8 results</h3>
           <select className='sort-type' name="" id="">
            <option value="0">Default sorting</option>
            <option value="1">Sort by popularity</option>
            <option value="2">Sort by average rating</option>
            <option value="3">Sort by latest</option>
            <option value="4">Sort by price: low to high</option>
            <option value="5">Sort by price: high to low</option>
           </select>
        </div>

       {/* cards */}
        <div className="shop-cards">
          {product.map((product) =>(
            <div className="card" key={product.id}>
              <Link to={`/shop/product/${product.id}`} className='link'>
                <div 
                className="card-img-top" 
                style={{backgroundImage: `url(${product.bgImg})` }}
                >
                  <span className={product.sale == 'Sale' ? 'sale': ''}>{product.sale}</span>
                  <Link to='/home/cart' className='add-link'>add to cart</Link>           
                </div>
              </Link>
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <label htmlFor="prices" className="prices">
                  <span className='old-price'>{product.oldPrice}</span> 
                  {product.price}
                </label>
                {product.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
        <SushiNewsletter />
    </div>
  )
}

export default Shop