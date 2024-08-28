import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Visitor from './include/visitor/Visitor';
import Dashboard from './include/dashboard/Dashboard';


function App() {
  return (
   <div>
   <BrowserRouter>
    
      <Routes>
          <Route path='/*' element={<Visitor/>} /> 
          <Route path='/dash/*' element={<Dashboard/>} />
       </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
