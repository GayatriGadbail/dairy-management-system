import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './templates/header/Header';
import ContactUs from './templates/contactus/ContactUs';

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
     <Header/>
     <ContactUs/>

     </BrowserRouter>
     

    </div>
  );
}

export default App;