import React from 'react'
import './CSS/leftsidebar.css'

const LeftSidebar = () => {
  // const styles={
  //   display: window.innerWidth >320 ? "none":"block",
  // }
  return (
    <>
      <div className='leftsidebar' >
        <div className='condition'>
          <h2>Condition</h2>
          <label>Used</label> <input type='radio' name='condition' />
          <label>New</label> <input type='radio' name='condition' />
        </div>
        <hr/>
        <div className='category'>
          <h2>Category</h2>
          <ul>
          <li> <input type='radio' name='category' /> <label>All Scooters</label>          </li>
          <li> <input type='radio' name='category' /><label> Vintage Scooter</label></li>
          </ul>
        </div>
        <hr/>
        <div className='Location'>
          <h2>Location</h2>
          <ul>
            <li><input type='radio' name='location' /><label>Pune</label> </li>
            <li><input type='radio' name='location' /><label>Punjab</label> </li>
            <li><input type='radio' name='location' /><label>Lucknow</label> </li>
            <li> <input type='radio' name='location' /><label>Delhi</label></li>
            <li><input type='radio' name='location' /><label>Mumbai</label> </li>
            <li> <input type='radio' name='location' /><label>Jaipur</label></li>
            <li><input type='radio' name='location' /><label>Kolkata</label> </li>
            <li><input type='radio' name='location' /><label>Noida</label> </li>
            <li><input type='radio' name='location' /><label>Chandigarh</label> </li>
            <li><input type='radio' name='location' /><label>Ludhiana</label> </li>
            <li> <input type='radio' name='location' /><label>Patna</label></li>
            <li> <input type='radio' name='location' /><label>Agra</label></li>
          </ul>
        </div>
        <hr/>
        <div className='color'>
          <h2>Exterior Color</h2>
          <ul>
            <li><div className='black'></div> </li>
            <li><div className='white'></div></li>
            <li><div className='blue'></div></li>
            <li><div className='red'></div></li>
            <li><div className='silver'></div></li>
          </ul>
        </div>
        <hr/>
        <div className='fuel'>
          <h2>Fuel Type</h2>
          <ul>
            <li><input type='radio' name='fuel' /><label>Petrol</label></li>
            <li> <input type='radio' name='fuel' /><label>Hybrid</label></li>
            <li> <input type='radio' name='fuel' /><label>Electric</label></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LeftSidebar