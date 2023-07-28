import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Shoes } from './components/Shoes';
import { Bag } from './components/Bag';
import { Mens } from './components/Mens';
import { Womens } from './components/Womens';
import { Watches } from './components/Watches';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className='main'>
      
      <Routes>
      
        <Route path="/" element={<Shoes/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/bags" element={<Bag/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/watches" element={<Watches/>}/>

      </Routes>

      
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default App;
