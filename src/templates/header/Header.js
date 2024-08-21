import React from 'react'

function Header() {
  return (
    <div>
        <div className="d-flex justify-content-around  bg-primary">
           <h3 className="">Welcome to Dairy<br/> Management System</h3>
           <button className='btn btn-warning btn mt-3 fs-5 p-1' >Home</button>
           <button className='btn btn-warning btn mt-3 fs-5 p-1'>About</button>
           <button className='btn btn-warning btn mt-3 fs-5 p-1'>ContactUs</button>
           <button className='btn btn-warning btn mt-3 fs-5 p-1'>Review</button>
           <button className='btn btn-warning btn mt-3 fs-5 p-1'>SignIn </button>
          
           </div>
          
        </div>
  )
}

export default Header