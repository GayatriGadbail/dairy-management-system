import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
function Header() {
  return (

    <div>
         <nav className="d-flex bg-primary">
         <img src={logo} width={80} height={80}/> 
          <div className='w-50'>
          
           <h3 className="text-white ms-3 ">Welcome to Dairy<br/> Management System</h3>
           </div>
           <div className='w-50 text-end mt-3'>
           <Link className='btn btn-primary   me-4 fs-5 p-1 ' to={'/home'} >Home</Link>
           <Link className='btn btn-primary  me-4 fs-5 p-1' to={'/about'}>About</Link>
           <Link className='btn btn-primary  me-4 fs-5 p-1' to={'/contact'}>ContactUs</Link>
           <Link className='btn btn-primary  me-4 fs-5 p-1' to={'/review'}>Review</Link>
           <Link className='btn btn-primary  me-4 fs-5 p-1' to={'/signIn'}>SignIn </Link>
           <Link className='btn btn-primary  me-4 fs-5 p-1' to={'/search'}><i class="bi bi-search"></i> </Link>
           </div>
           </nav>
    </div>

  )
}

export default Header