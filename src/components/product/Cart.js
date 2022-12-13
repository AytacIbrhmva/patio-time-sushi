import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/product style/Cart.css';
import {AiOutlineClose} from 'react-icons/ai';

const Cart = (props) => {
  const [count, setCount] = useState(1);


  return (
    <div className='cart'>
        <div className="hero">
            <div className="hero-nav">
                <Link className='nav-link' to='/'>Home </Link>
                <span className="slash">/</span>
                <Link className='nav-link' to='/home/cart'>Cart</Link>
            </div>
            <h1>Cart</h1>
        </div>
        {/* product table */}
        <div className='product-table'>
          <div className="container">
            {/* desktop */}
            <table className='desktop-table'>
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>subtotal</th>
                </tr>  
              </thead>
              {/* body */}
              <tbody>
                <tr>
                  <td>
                    <AiOutlineClose className='close-icon' />
                    <Link to='/shop/rise-miso-soup'>
                      <img className='product-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mgg-vitchakorn-zXNC_lBBVGE-unsplash-300x300.jpg" alt="" />
                    </Link>
                  </td>
                  <td className='name'>Rice & Miso Soup</td>
                  <td className='price'>$6.00</td>
                  <td> 
                    <div className="counter-btns">
                      <button onClick={() => setCount(count == 1 ? 1 : count - 1)} className='btn minus'>-</button>
                      <button className='btn count'>{count}</button>
                      <button onClick={() => setCount(count == 20 ? 20 : count + 1)} className='btn plus'>+</button>
                    </div>
                  </td>
                  <td>$24.00</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineClose className='close-icon' />
                    <Link to='/shop/rise-miso-soup'>
                      <img className='product-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/mgg-vitchakorn-zXNC_lBBVGE-unsplash-300x300.jpg" alt="" />
                    </Link>
                  </td>
                  <td className='name'>Rice & Miso Soup</td>
                  <td className='price'>$6.00</td>
                  <td> 
                    <div className="counter-btns">
                      <button onClick={() => setCount(count == 1 ? 1 : count - 1)} className='btn minus'>-</button>
                      <button className='btn count'>{count}</button>
                      <button onClick={() => setCount(count == 20 ? 20 : count + 1)} className='btn plus'>+</button>
                    </div>
                  </td>
                  <td>$24.00</td>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <td>
                    <form action="">
                      <input type="text" placeholder='Coupon code' />
                      <button className='submit-btn'>apply coupon</button>
                    </form>
                   
                  </td>
                  <td>
                    <button className='cta'>Update Cart</button>
                  </td>
                </tr>
              </tfoot>
            </table>
            {/* tablet end */}

            {/* tablet */}
            <table className='tablet-table'>
              
              {/* product */}
              <div className="product"> 
                <AiOutlineClose className='close-icon' />
                {/* t body */}
                <tbody>                  
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>subtotal</th>
                  </tr>  

                  <tr>
                    <td className='name'>Rice & Miso Soup</td>
                    <td className='price'>$6.00</td>
                    <td> 
                      <div className="counter-btns">
                        <button onClick={() => setCount(count == 1 ? 1 : count - 1)} className='btn minus'>-</button>
                        <button className='btn count'>{count}</button>
                        <button onClick={() => setCount(count == 20 ? 20 : count + 1)} className='btn plus'>+</button>
                      </div>
                    </td>
                    <td>$24.00</td>
                  </tr>
                </tbody>       
              </div>
              {/* product end */}

              {/* t foot */}
              <tfoot>
                <tr>
                  <td>
                    <form action="">
                      <input type="text" placeholder='Coupon code' />
                      <button className='submit-btn' >apply coupon</button>
                    </form>
                  
                  </td>
                  <td>
                    <button className='cta'>Update Cart</button>
                  </td>
                </tr>
              </tfoot>
            </table>
            {/* tablet end */}

          </div>
        </div>
        {/* product table end */}

        {/* cart totals */}
        <div className="cart-totals">
          <div className="container">
            <h3 className='title'>Cart totals</h3>
            {/* total price */}
            <div className="total-price">
              <div className="row">
                <div className="col">Subtotal</div>
                <div className="col">$180.00</div>
              </div>
              <div className="row">
                <div className="col">Total</div>
                <div className="col">	$180.00</div>
              </div>
            </div>
            {/* total price end */}
            <button className="cta">proceed to checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cart