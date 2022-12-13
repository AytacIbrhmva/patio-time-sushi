import React, {useEffect, useState} from 'react';
import Logo from '../assets/imgs/logo.png';
import {NavLink, Link} from 'react-router-dom';
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaShoppingBag} from 'react-icons/fa';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdLocationPin} from 'react-icons/md';
import {TbMenu} from 'react-icons/tb';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail, AiOutlineClose} from 'react-icons/ai';
import './styles/Navbar.css'

function Navbar() {


    // hide on scroll
    const [visibility, setVisitbility] = useState({
        show:true,
        scrollPos: 0,
    })

    const handleScroll = () => {
        setVisitbility({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > visibility.scrollPos,
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[visibility])

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    // sidebar 
    const [toggle, setToggle] = useState(false);
    const open = () => setToggle(!toggle);

    const [dropdown, setDropdown] = useState(false)

  return (
    <>    
    <nav className="navbar" id={visibility.show ? 'show' : 'hide'}>       
       <div className="container">     
            <img  className='nav-brand'  src='https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/pt-logo.png' alt="logo" />
            {/* menu */}
            <ul className="nav-menu">
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>Home</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/about'>About</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/menus'>Menus</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/reservations'>Reservations</NavLink> 
                </li>                
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/contact'>Contact</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/news'>News</NavLink> 
                </li>
                <li className='nav-item dropdown'>
                    <NavLink  className='nav-link' to='/shop'>
                        Shop
                        <MdKeyboardArrowDown className='arrow-down-icon'/>
                    </NavLink> 
                    <ul className='dropdown-menu '>
                        <li className='dropdown-item'>
                            <NavLink to='/home/cart' className='dropdown-link'>Cart</NavLink>
                        </li>
                        <li className='dropdown-item'>
                            <NavLink to='/home/checkout' className='dropdown-link'>Checkout</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* social medias */}
            <div className="nav-icons-right">
                <div className="social-medias">
                    <FaFacebookF className='social-media-icon' />
                    <FaYoutube className='social-media-icon'/>
                    <FaTwitter className='social-media-icon'/>
                    <FaInstagram className='social-media-icon'/> 
                </div>  
                <Link to='/home/cart'><FaShoppingBag className='shop-icon'/> </Link> 
                <TbMenu onClick={open} className='menu-icon' />              
            </div>
       </div>




        {/* SIDEBAR */}
        <div className={toggle ? 'sidebar x-1' : 'sidebar x-0'}>
            <div className="header">
                <img  className='nav-brand'  src='https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/pt-logo.png' alt="logo" />
                <AiOutlineClose onClick={open} className='menu-close-icon' />
            </div>
            <div className="divider"></div>   
            {/* menu */}
            <ul className="nav-menu">
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/'>Home</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/about'>About</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/menus'>Menus</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/reservations'>Reservations</NavLink> 
                </li>                
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/contact'>Contact</NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink onClick={open} className="nav-link" to='/news'>News</NavLink> 
                </li>
                <li className='nav-item dropdown'>
                    <div className='link-container'>
                        <NavLink onClick={open} className="nav-link" to='/shop'>
                            Shop
                        </NavLink> 
                        <MdKeyboardArrowDown onClick={() => setDropdown(!dropdown)} className='arrow-icon'/>
                    </div>
                    <ul className={dropdown ? 'dropdown-menu d-block' : 'dropdown-menu d-none'}>
                        <li className='dropdown-item'>
                            <NavLink to='/home/cart' className='dropdown-link'>Cart</NavLink>
                        </li>
                        <li className='dropdown-item'>
                            <NavLink to='/home/checkout' className='dropdown-link'>Checkout</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
            {/* social medias */}
            <div className="nav-icons-bottom">
                <div className="social-medias">
                    <FaFacebookF className='social-media-icon' />
                    <FaYoutube className='social-media-icon'/>
                    <FaTwitter className='social-media-icon'/>
                    <FaInstagram className='social-media-icon'/> 
                </div>               
            </div>

            {/* copyright */}
            <div className="copyright">
            © Copyright PatioTime WordPress Theme for Restaurant & Cafe.
            </div>
            <div className="divider"></div>
            {/* footer */}
            <div className="footer">
                <a href='https://www.google.com/maps/place/Barbican+Centre/@51.5205487,-0.0936463,18z/data=!4m13!1m7!3m6!1s0x48761ca98744377d:0x9e296ec2b218ce78!2sSilk+St,+London,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.5198778!4d-0.0916239!3m4!1s0x48761b56fb64b275:0xc756e26675d21f40!8m2!3d51.5202077!4d-0.0937864'>
                    <MdLocationPin className='icon' />
                    212 Madison Ave, New York, NY 10016
                </a>
                <a href="tel:055-325-16-16">
                    <BsFillTelephoneFill className='icon' />
                    (055) 325 16 16
                </a>
                <a href="malito:booking@patiotime.com">
                    <AiOutlineMail className='icon' />
                    booking@patiotime.com
                </a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar