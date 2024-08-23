import React from 'react';
import './CSS/rightsidebar.css';
import { cars } from './CarsAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faGear, faLocationDot, faRoad } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

const RightSidebar = ({ filters }) => {
    const filteredCars = cars.filter((car) => {
        return (
            (filters.condition ? car.condition.toLowerCase() === filters.condition : true) &&
            (filters.category ? car.category === filters.category : true) &&
            (filters.location ? car.location === filters.location : true) &&
            (filters.color ? car.color === filters.color : true) &&
            (filters.fuel ? car.fuel === filters.fuel : true)
        );
    });

    return (
        <div className='rightsidebar'>
            {filteredCars.length > 0 ? (
                <ul>
                    {filteredCars.map((e) => (
                        <li key={e.id}>
                            <div className="card">
                                <img src={e.carimg} className="card-img-top" alt="Car" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.price}</p>
                                </div>
                                <div className='icons'>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <span>{e.road}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span>{e.location}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>{e.model}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faGasPump} />
                                            <span>{e.fuel}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faGear} />
                                            <span>{e.type}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <div className='notfound'>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702354-3119143.png'  alt='Not Found'/>
                        
                    </div>
                    <h4 style={{display:"flex",justifyContent:"center"}}>Temporary Not Available</h4>
                </div>
            )}
        </div>
    );
};

export default RightSidebar;
