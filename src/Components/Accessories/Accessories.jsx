import React from 'react'
import './CSS/rightsidebar.css'
import { accessories } from './AccessoriesAPI'

const Accessories = () => {
    return (

        <><div className='rightsidebar Accessories'>
            <ul>

                {
                    accessories.map((e) => {
                        return (
                            <>
                                <li key={e.id}> 
                                 <div className="card" style={{}}>
                                    <img src={e.carimg} className="card-img-top" alt="Not Found" />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.title}</h5>
                                        <p className="card-text">{e.price}</p>
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

export default Accessories 