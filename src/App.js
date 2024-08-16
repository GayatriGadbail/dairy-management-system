
import './App.css';
import About from './templates/about/About';
import ContactUs from './templates/contactus/ContactUs';
import Header from './templates/header/Header';
import Home from './templates/home/Home';
import Login from './templates/login/Login';

function App() {
  return (
    <div className="App">
    <div><Header/></div>
    <div><Home/></div>
    <div><ContactUs/></div>
    <div><About/></div>
    <div><Login/></div>
    </div>
  );
}

export default App;
