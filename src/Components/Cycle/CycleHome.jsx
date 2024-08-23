import React, { useEffect } from 'react'
import './CSS/cyclehome.css'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const CycleHome = () => {
    useEffect(()=>{
        document.title="Buy Cycles";
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

export default CycleHome