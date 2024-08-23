import React, { useEffect } from 'react'
import './CSS/arthome.css'
import Art from './Art'

const ArtHome = () => {
    useEffect(()=>{
        document.title="Buy Paintings";
      })
    return (
        <>
            <div className='main-content' style={{ paddingTop: "8rem", overflowX: 'hidden' }}>
                <div className='cars-bothside'>
                    <div className='col-right'>
                        <Art />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtHome