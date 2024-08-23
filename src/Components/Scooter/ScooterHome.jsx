import React, { useEffect } from 'react'
import './CSS/scooterhome.css'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const ScooterHome = () => {
    useEffect(()=>{
        document.title="Buy Scooters";
      })
    return (
        <>
            <div className='main-content' style={{ paddingTop: "8rem", overflowX: 'hidden' }}>
                <div className='cars-bothside'>

                    <div className='col-left' >
                        <LeftSidebar />
                    </div>
                    <div className='col-right'>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScooterHome