import React from 'react'
import  imglist  from './HomeAPI'
import './CSS/Shopby.css'
import { NavLink } from 'react-router-dom'
const ShopbyCategory = (props) => {

    return (
        <>
        
        <div className='shopby container'>
        <h1>Shop By Category</h1>
            <ul>
            {
                imglist.map((e) => {
                return (
                    <li key={e.id}><div className="card" style={{}}>
                      <NavLink to={e.link}> <img src={e.imgurl} className="card-img-top" alt="..."/></NavLink> 
                            <div className="card-body">
                             <p className="card-text"><b><NavLink to={e.link}>{e.imgcap}</NavLink> </b></p>
                            </div>
                    </div></li>
                    
                )
            })

            }
            </ul>
        </div>
            
        </>
    )
}

export default ShopbyCategory