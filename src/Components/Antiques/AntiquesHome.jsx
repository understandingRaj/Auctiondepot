import React, { useEffect } from 'react'
import './CSS/antiqueshome.css'
import Antiques from './Antiques'


const AntiquesHome = () => {
    useEffect(()=>{
        document.title="Buy Antiques";
      })
    return (
        <>
            <div className='main-content' style={{ paddingTop: "8rem", overflowX: 'hidden' }}>
                <div className='cars-bothside'>
                    <div className='col-right'>
                        <Antiques />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AntiquesHome