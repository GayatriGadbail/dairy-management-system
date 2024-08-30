import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidenav.css'

function Sidenav() {
    const[userType,setUserType]=useState();
    let previleges=[
        {
            "ADMIN":[
                {label:'Add Employee',path:'add-employee'},
                {label:'View Employee', path:'view-employee'}
            ],
            "FARMER":[
                {label:'Add Cow', path:'add-cow' },
                {label:'View Cow', path:'view-cow' },
                {label:'Add Buffalow', path:'add-buffalo'},
                {label:'View Buffalow', path:'view-buffalo'}
            ],
            "CENTER_HEAD":[
                {label:'Add Farmer', path:'add-farmer'},
                {label:'Inventory', path:'inventory'},
                {label:'Delivery', path:'delivery' },
                {label:'Purchase', path:'purchase'},
                {label:'Invoice', path:'invoice'},
                {label:'Billing', path:'billing'},
                {label:'Order', path:'order'},
                {label:'Payment', path:'payment'}
            ]
        }
    ]

    useEffect(()=>{
        let employeeJson =localStorage.getItem('employee');
        let employee =JSON.parse(employeeJson);
        setUserType(employee.userType);
    },[])

  return (
    <div className='d-flex flex-column pt-2 ps-2 pe-2  bg-secondary '>
        {
                (userType)? previleges[0][userType].map((previleg,index)=>{
                    return <Link className='btn btn-outline-primary text-white mb-3' key={index} to={previleg.path}>{previleg.label}</Link>
                }):<h3>Login Again</h3>
        }
       
    </div>
  )
}

export default Sidenav