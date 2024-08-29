import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
                {label:'Add Buffalow', path:'add-buffalow'}
            ]
        }
    ]

    useEffect(()=>{
        let employeeJson =localStorage.getItem('employee');
        let employee =JSON.parse(employeeJson);
        setUserType(employee.userType);
    },[])

  return (
    <div className='d-flex flex-column nav'>
        {
                (userType)? previleges[0][userType].map((previleg,index)=>{
                    return <Link className='btn btn-primary' key={index} to={previleg.path}>{previleg.label}</Link>
                }):<h3>Login Again</h3>
        }
       
    </div>
  )
}

export default Sidenav