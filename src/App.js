

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import MainSection from './Components/MainSection';
import CarsHome from './Components/Cars/CarsHome';
import BikeHome from './Components/Bike/BikeHome';
import ScooterHome from './Components/Scooter/ScooterHome';
import ElectricHome from './Components/Electric/ElectricHome';
import CycleHome from './Components/Cycle/CycleHome';
import AccessoriesHome from './Components/Accessories/AccessoriesHome';
import ArtHome from './Components/Art/ArtHome';
import AntiquesHome from './Components/Antiques/AntiquesHome';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Navbar/Header';
function App() {
  return (
  <>
  <BrowserRouter>
  <ScrollToTop/>
  <Header/>
   <Routes>
    <Route path='/' Component={MainSection}/>
    <Route path='/cars' Component={CarsHome}/>
    <Route path='/bike' Component={BikeHome}/>
    <Route path='/scooter' Component={ScooterHome}/>
    <Route path='/electric' Component={ElectricHome}/>
    <Route path='/cycle' Component={CycleHome}/>
    <Route path='/accessories' Component={AccessoriesHome}/>
    <Route path='/art' Component={ArtHome}/>
    <Route path='/antiques' Component={AntiquesHome}/>
  </Routes>
  <Footer/>
  </BrowserRouter>  
  </>
  );
}

export default App;
