import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/Subnavbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faCarSide, faChargingStation, faMobileScreen, faMotorcycle, faPalette, faRadio } from '@fortawesome/free-solid-svg-icons';
import FAQ from './FAQ';
const Subnavbar = () => {
    // State to track dropdown visibility
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);

    const handleContactScroll = (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('contact');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // Toggle dropdown visibility
    const handleCategoriesClick = () => {
        setIsDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility
    };
    // Handle dropdown link click to close the dropdown
    const handleDropdownLinkClick = () => {
        setIsDropdownVisible(false); // Close the dropdown when a link is clicked
    };
    const handleFaqClick = () => {
        setIsFaqVisible(!isFaqVisible); // Toggle the dropdown visibility
    };
    return (
        <><div className='subnavbar'>
            <div className='subnavbar_left'>
                <ul>
                    <li><NavLink onClick={handleCategoriesClick}><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16"
								fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                                <path
									d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                            </svg> Categories</NavLink>
                        {isDropdownVisible && (
                            <div className="dropdown-box">
                                <div className='automobile'>
                                    <h6>Buy Automobile</h6>
                                    <ul>
                                        <li>
                                            <NavLink to="/cars" onClick={handleDropdownLinkClick}>
                                                <FontAwesomeIcon icon={faCarSide} /></NavLink>
                                            <span>Car</span>
                                        </li>
                                        <li>
                                            <NavLink to="/bike" onClick={handleDropdownLinkClick}>
                                                <FontAwesomeIcon icon={faMotorcycle} /></NavLink>
                                            <span>Bike</span></li>
                                        <li>
                                            <NavLink to="/cycle" onClick={handleDropdownLinkClick}>
                                                <FontAwesomeIcon icon={faBicycle} /></NavLink>
                                            <span>Cycle</span>
                                        </li>
                                        <li>
                                            <NavLink to="/scooter" onClick={handleDropdownLinkClick}>
                                                <FontAwesomeIcon icon={faMotorcycle} /></NavLink>
                                            <span>Scooter</span>
                                        </li>
                                        <li>
                                            <NavLink to="/electric" onClick={handleDropdownLinkClick}>
                                                <FontAwesomeIcon icon={faChargingStation} /></NavLink>
                                            <span>Electric Car</span>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <h6>Smartphones & Accessories</h6>
                                    <ul>
                                        <li><NavLink to="/accessories" onClick={handleDropdownLinkClick}><FontAwesomeIcon icon={faMobileScreen} /></NavLink><span>Smartphones & Accessories</span></li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <h6>Buy Paintings</h6>
                                    <ul  >
                                        <li><NavLink to="/art" onClick={handleDropdownLinkClick}><FontAwesomeIcon icon={faPalette} /></NavLink><span>Paintings/Art</span></li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <h6>Antiques</h6>
                                    <ul>
                                        <li><NavLink to="/antiques"onClick={handleDropdownLinkClick}><FontAwesomeIcon icon={faRadio} /> </NavLink><span>Antiques</span></li>
                                    </ul>
                                </div>
                            </div>
                    )}</li>
                </ul>

            </div>
            <div className='subnavbar_right'>
                <ul>
                    <li><NavLink>Winners List</NavLink></li>
                    <li><NavLink to="#contact" onClick={handleContactScroll}>Contact Us</NavLink></li>
                    <li><NavLink onClick={handleFaqClick}>FAQS</NavLink>
                    {
                        isFaqVisible && (
                         <FAQ/>
                        )
                    }
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Subnavbar