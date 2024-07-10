
import { BrowserRouter, Form, Route,Routes } from 'react-router-dom';
// import './App.css';
import Newsafar from './pages/Newsafar';
import Formsafar from './pages/Formsafar'; 
import Booking from './pages/Booking';
import Forget  from './pages/Forget';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Newsafar/>}/>

        <Route path='formsafar' element={<Formsafar/>}/>
         <Route path='Booking' element={<Booking/>}/>
         <Route path='' element={<Forget/>}/>
      </Routes>
      </BrowserRouter>
  
 
   </div>
  );
}

export default App;



