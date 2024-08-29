import React from 'react'
import './SignIn.js'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignIn() {
  const {register,handleSubmit}=useForm();
  const navigate=useNavigate();

  const getFormData= data=>{
    let {userName,password}=data
      axios.get(`http://localhost:9096/employee_details/getEmployee/${userName}/${password}`)
      .then(response=>{
        if(response.status===200)
        {
            let employeeJson=JSON.stringify(response.data)
            localStorage.setItem('employee',employeeJson);
            navigate("/dash")
        }
        else alert("Somthing went wrong");
      })
      .catch(error=>{
        console.log(error)
        alert(error.response.data.message)
      })
  }

  return (
    <div  className='d-flex justify-content-center'>
         
        <form onSubmit={handleSubmit(getFormData)} className='w-50 mt-5 border border-danger p-5 bg-secondary'>
            <h1 className="text-center text-white mb-4 ">Login </h1>
            <input type='text' className='form-control mb-4 ' {...register('userName')} 
            placeholder='Enter Username' />
            <input type='text' className='form-control mb-4' {...register('password')} 
            placeholder='Enter Password' />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button type='submit'className='w-75  text-success fs-4 '> Login</button>
        </form>
    </div>
  )
}

export default SignIn