import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
 const  {register,handleSubmit,reset} = useForm();
  const   [employeeImage,setEmployeeImage]=useState(null);

const saveEmpoyee=(employee)=>{
  console.log(employee)

  const formData=new FormData();
  formData.append("Employeejson", JSON.stringify(employee));
  formData.append("ProfileImage", employeeImage);
  axios.post('http://localhost:9096/employee_details/employee',formData).then(
    res=>{ if(res.status===201)alert("Employee Registered..!")}
  )
  .catch(error=>console.log(error));
}

 function onUploadEmpPhoto(event)
{
  setEmployeeImage(event.target.files[0]);
}

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit(saveEmpoyee)} className='border border-secondary w-50 p-3 mt-2 bg-success-subtle  '>
      <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter First Name:-</label>
        <input type='text' className='form-control' id="efn" {...register('firstName')} placeholder='Enter First Name:-'></input>
      </div>
      
      <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter Last Name:-</label>
        <input type='text' className='form-control' id="efn" {...register('lastName')} placeholder='Enter Last Name:-'></input>
      </div>

      <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter Email:-</label>
        <input type='text' className='form-control' id="efn" {...register('email')} placeholder='Enter Email:-'></input>
      </div>

      <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter Occupation:-</label>
        <input type='text' className='form-control' id="efn" {...register('occupation')} placeholder='Enter Occupation:-'></input>
      </div>
      
       <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter Salary:-</label>
        <input type='number' className='form-control' id="efn" {...register('salary')} placeholder='Enter Salary:-'></input>
      </div>

      <div className='form-container p-2'>
        <label className="form-label" htmlFor="efn">Enter Age:-</label>
        <input type='number' className='form-control' id="efn" {...register('age')} placeholder='Enter Age:-'></input>
      </div>
      
      <div className='form-container p-2'>
      <select className="form-select" aria-label="Default select example" {...register('userType')}>
      <option defaultValue>Employee Designation</option>
      <option value={'ADMIN'}>Admin</option>
      <option value={'CENTER_HEAD'}>Center_Head</option>
      <option value={'FARMER'}>Farmer</option>

</select>
    </div>

    <div className='form-container p-2'>
        <label className="form-label" htmlFor="efnImg">Upload Employee Photo:-</label>
        <input type='file' className='form-control' id="efnImg" placeholder='Enter Age:-' onClick={e=>onUploadEmpPhoto(e)}></input>
      </div>

     
     <button className="btn btn-outline-success w-100 mt-4">Submit</button>
      </form>
    </div>
  )
}

export default AddEmployee