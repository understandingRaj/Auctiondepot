import React, { useEffect, useState } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import './CSS/carhome.css'

const CarsHome = () => {
  const [filters, setFilters] = useState({
    condition: '',
    category: '',
    location: '',
    color: '',
    fuel: ''
  });
  useEffect(()=>{
    document.title="Buy Cars";
  })
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
 
  return (
    <>
      <div className='main-content' style={{paddingTop:"8rem",overflowX:'hidden'}}>
        <div className='cars-bothside'>
         
            <div className='col-left' >
              <LeftSidebar onFilterChange={handleFilterChange} />
            </div>
            <div className='col-right'>
              <RightSidebar filters={filters} />

            </div>
          </div>
        </div>
     
    </>
  )
}

export default CarsHome