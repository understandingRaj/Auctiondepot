
import React, { useEffect } from 'react'
import LiveAuctions from './LiveAuctions'
import ShopbyCategory from './ShopbyCategory'
import UpcomingAuctions from './UpcomingAuctions'
import Contact from './Contact'
import Carousel from './Carousel'

const MainSection = () => {
  useEffect(()=>{
    document.title="AuctionDepot";
  })
  return (
    <>
        <Carousel/>
        <ShopbyCategory/>
        <LiveAuctions/>
        <UpcomingAuctions/>
        <Contact/>
    </>
  )
}

export default MainSection