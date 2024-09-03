import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ViewEmployee.css'
import { Link } from 'react-router-dom';

function ViewEmployee() {
  const [employee, setEmployee] =useState([]);

  function getEmployee(){
    axios.get(`http://localhost:9096/employee_details/allEmployeeDetails`).then(
      response=>{
        setEmployee(response.data)
        console.log(response)
       
      })
    .catch(
      error=>console.log(error)
    )
}
useEffect(()=>getEmployee(),[])

return (
  <div className='pt-3'>
    <h1 className='text-center fs-3 text-warning bg-dark'>
  All Employee data of a store..!&nbsp;
  <i class="bi bi-bag-fill text-warning"></i>
    </h1>
  <table border={1} className='bg-info text-dark table table-dark table-striped text-center' >
    <thead>
      <th>Sr.No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Occupation</th>
      <th>Salary</th>
      <th>Age</th>
      <th>Profile Image</th>
     
     </thead>
     
     <tbody> 
      {
        
        employee.map(
          (emp,index)=><tr key={index}>
            <td>{emp.employeeId}</td>
              <td>{emp.firstName}</td>
               <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.occupation}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td> 
               <td>{emp.userType}</td> 
<td>
  <img src={`data:image/jpeg;base64,${emp.profileImage}`} width={75} height={75} className='profile'></img>
</td>
               </tr>
          
        )}  
      
     </tbody>
     
  </table>
  </div>
  
  )
}

export default ViewEmployee