import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import '../CSS/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById('aboutus');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();
  const handleHomeScroll = (event) => {
    event.preventDefault();
    navigate('/'); // Prevent page refresh and stay on the same route
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };
  
  return (
    <>
        <div className='Navbar' id='Navbar'>
            <div className='logo nav_left'>
           <NavLink to="/" onClick={handleHomeScroll}><img src='./img/logo.png' alt='Not found'/></NavLink> 
            </div>
            <div className='nav_right'>
            <ul>
                <li><NavLink to="/"  onClick={handleHomeScroll}>Home</NavLink></li>
                <li><NavLink to="#footer" onClick={handleScroll}>About Us</NavLink></li>
                <li><NavLink to="/">Sell/Purchase</NavLink></li>
                <li><NavLink to="/"><FontAwesomeIcon icon={faCartShopping} /> Cart</NavLink></li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar