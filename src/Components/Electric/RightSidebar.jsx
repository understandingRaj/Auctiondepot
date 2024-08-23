import React from 'react'
import '../Scooter/CSS/rightsidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faGear, faLocationDot, faRoad } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { electric } from './ElectricAPI'

const RightSidebar = () => {
    return (

        <><div className='rightsidebar scooter'>
            <ul>

                {
                    electric.map((e) => {
                        return (
                            <>
                                <li key={e.id}> 
                                 <div className="card" style={{}}>
                                    <img src={e.carimg} className="card-img-top" alt="Not Found" />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.title}</h5>
                                        <p className="card-text">{e.price}</p>
                                    </div>
                                    <div className='icons'>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faRoad} /><span>{e.road }</span></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faLocationDot} /><span>{e.location}</span></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faCalendarDays} /><span>{e.model}</span></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faGasPump} /><span>{e.fuel}</span></li>
                                        <li className="list-group-item"> <FontAwesomeIcon icon={faGear} /><span>{e.type}</span></li>
                                    </ul>
                                    </div>
                                </div></li>
                            </>
                        )
                    })
                }

            </ul>
        </div>
        </>
    )
}

export default RightSidebar