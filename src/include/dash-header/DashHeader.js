import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './DashHeader.css'

function DashHeader() {
    const[employee,setEmployee]=useState({})
    useEffect(()=>{
        let employeeJson=localStorage.getItem('employee');
        let employee=JSON.parse(employeeJson);
        setEmployee(employee);
    },[])
  return (
    <nav className='navbar navbar-danger bg-success'>
    <div className='d-flex ms-4 '>
      <img src={`data:/jpeg;base64,${employee.profileImage}`} className='img'/>

      <span className='ms-5'>
        <p className='text-white fs-3 m-0'>  {employee.firstName}</p>
        <p className='text-white  m-0'>{employee.userType}</p> 
        </span> 
       
        
      
    </div>
    <Link className='btn btn-outline-light me-4' to={'/'}>SignOut</Link> 
    </nav>
  )
}

export default DashHeader