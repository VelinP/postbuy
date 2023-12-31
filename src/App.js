import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Shoes } from './components/Shoes';
import { Bag } from './components/Bag';
import { Watches } from './components/Watches';
import { Details } from './components/Details';



function App() {
  
  return (
    <>
    <Navbar/>
      <div className='main'>
      
        <Routes>
          <Route path="/" element={<Shoes/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/bags" element={<Bag/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/watches" element={<Watches/>}/>
          <Route path="/offers/:id/details" element={<Details/>}/>

        </Routes>

      </div>
    </>
  );
}

export default App;
