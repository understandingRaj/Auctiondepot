import React, { useEffect } from 'react'
import './CSS/accessorieshome.css'
import Accessories from './Accessories'

const AccessoriesHome = () => {
    useEffect(()=>{
        document.title="Buy Smartphones & Accessories";
      })
    return (
        <>
            <div className='main-content' style={{ paddingTop: "8rem", overflowX: 'hidden' }}>
                <div className='cars-bothside'>
                    <div className='col-right'>
                        <Accessories />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccessoriesHome