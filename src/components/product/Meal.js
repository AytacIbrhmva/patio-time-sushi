import {useEffect, useState} from 'react';
import SushiNewsletter from '../pages/SushiNewsletter';
import { Link, useParams } from 'react-router-dom';
import '../styles/product style/BeefNigiri.css';
import {AiFillStar} from 'react-icons/ai';

import { product } from './ProductList';


const BeefNigiri = (props) => {

    const [count, setCount] = useState(1);

    const [desc, setDesc] = useState(true);

    const {id} = useParams();

    const [aboutProduct, setProduct] = useState('');

    useEffect(() => {
        setProduct(product[id-1])
    })

    console.log(product[id-1].name);
  

    

  return (
    <div className='beef-nigiri'>
        <div className="hero">
            <div className="hero-nav">
                <Link className='nav-link' to='/'>Home </Link>
                <span className="slash">/</span>
                <Link className='nav-link' to='/shop'>Shop</Link>
                <span className="slash">/</span>
                <Link className='nav-link' to='/shop/beef-nigiri'>{aboutProduct.name}</Link>
            </div>
            <h1>Shop</h1>
        </div>
        {/* add to cart */}
       <div className="add-to-cart">
        <div className="container">
            <div className="img-container">
                <img  className='meal-img'
                src={aboutProduct.bgImg} alt="meal" />
            </div>
            <div className="adding">
                <h1 className="title">{aboutProduct.name}</h1>
                
                <div className="rating">
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <p className="customer-review">(1 customer review)</p>
                </div>
                <label className="prices">
                    <span className="old-price">{aboutProduct.oldPrice}</span>
                    {aboutProduct.price}
                </label>
                <p className="desc">
                Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et  
                dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo
                duo dolores et ea rebum.
                </p>
                <div className="counter-btns">
                    <button onClick={() => setCount(count == 1 ? 1 : count - 1)} className='btn minus'>-</button>
                    <button className='btn count'>{count}</button>
                    <button onClick={() => setCount(count == 20 ? 20 : count + 1)} className='btn plus'>+</button>
                    <Link to='/home/cart' className='btn cta'>
                        <span>ADD TO CART</span> 
                    </Link>
                </div>
                <label className="category" htmlFor="">
                    <span className='bold'>CATEGORY:</span> {aboutProduct.category}
                </label>
                <label className="tags" htmlFor="">
                    <span className='bold'>TAGS:</span> {aboutProduct.tags}
                </label>
            </div>
        </div>
       </div>
       
        {/* description */}
        <div className="beef-nigiri-desc-reviews">
            <div className="container">
                <div className="titles">
                    <h4 onClick={() => setDesc(true)} className={desc ? 'active-title' : 'title'}>Description</h4>
                    <h4 onClick={() => setDesc(false)} className={desc ? 'title' : 'active-title'}>Reviews (1)</h4>
                </div>
                <div className="divider"></div>
                {/* description */}
                <div className={desc ? 'beef-nigiri-desc' : 'd-none'}>
                    <p className="desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis  
                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
                    pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
                    pretium. Integer tincidunt.
                    <br /> <br />
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    </p>
                </div>
                {/* reviews */}
                <div className={desc ? 'd-none' : 'beef-nigiri-reviews'}>
                    <div className="review">
                        {/* left */}
                        <img className="review-img-left" src="https://secure.gravatar.com/avatar/649ef892740ec6dff5e02eaf51ab82ed?s=60&d=mm&r=g" alt=""  />
                        {/* right */}
                        <div className="review-right">
                            <div className="header">
                                <label className="name">Jamie Milson</label>  
                                <label className="date">– SEPTEMBER 21, 2022</label>
                            </div>
                            
                            <p className="comment">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet <br /> 
                            nec, vulputate eget, arcu.
                            </p>
                            <div className="rating">
                                <AiFillStar className='star'/>
                                <AiFillStar className='star'/>
                                <AiFillStar className='star'/>
                                <AiFillStar className='star'/>
                                <AiFillStar className='star'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SushiNewsletter />
    </div>
  )
}

export default BeefNigiri