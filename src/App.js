
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Menus from './components/Menus';
import Reservations from './components/Reservations';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Shop from './components/Shop';


import Cart from './components/product/Cart';
import Checkout from './components/product/Checkout';

import Meal from './components/product/Meal';



function App() {



  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/menus' exact element={<Menus/>}/>
          <Route path='/reservations' exact element={<Reservations/>}/>
          <Route path='/news' exact element={<News/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='/shop' exact element={<Shop/>}/>
          
          <Route path='/home/cart' exact element={<Cart />} />
          <Route path='/home/checkout' exact element={<Checkout />} />

          <Route path='/shop/product/:id' element={<Meal />} />

         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
