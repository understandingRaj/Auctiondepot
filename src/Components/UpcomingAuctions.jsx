import React from 'react'
import { Upcoming } from './HomeAPI'

const UpcomingAuctions = () => {
  return (
    <>
    <div className='live-auctions '>
    <h1 className='container'style={{marginTop:"5rem"}}>Upcoming Auctions</h1>
    <ul>

   
    { Upcoming.map((e)=>{
        return(
            <li key={e.id}><div className="card" style={{width: "18rem", height:"30rem" }}>
            <img src={e.imgurl} className="card-img-top" alt="..." style={{}}/>
            <div className="card-body">
                <h5 className="card-title">{e.imgcap}</h5>
                <p className="card-text">{e.mrp}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{color:"orange",fontWeight:"600"}} >Auction ID. BB12345</li>
                <li className="list-group-item" style={{backgroundColor:"#ddd",fontWeight:500,letterSpacing:3}}>
                Opens After 2 days
                </li>
            </ul>
           
        </div>
        </li>)
    })
        
    }
    </ul>
        

    </div>
</>
  )
}

export default UpcomingAuctions