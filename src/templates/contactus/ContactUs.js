import React from 'react'
import { useForm } from 'react-hook-form';

function ContactUs() {
   const{register,handleSubmit,reset,setValue,formState:{errors}}=useForm();

   function submit(sub)
   {
    alert("Form submitted..!")
      console.log(sub);
   }


  return (
    <nav className=''>
   <div className='d-flex justify-content-center '>
  <div className='w-50 border border-black mt-3 p-3 bg-dark' >
    <h1 className='text-light border border-black bg-info fs-3 ' >
      <i className="bi bi-telephone-fill"></i>&nbsp;
      Have Question?<br></br>
        Get In Touch
    </h1>
    
    <form onSubmit={handleSubmit(submit)}>
      <div className='p-3 '>
       <lable for="firstName" className='text-light fs-5 form-label'>Enter First Name:-</lable>
       <input type="text" className='form-control'  id="firstName" {...register("firstname")}></input>
      </div>
      
      <div className='p-3'>
       <lable for="lastName" className='text-light fs-5 form-label'>Enter Last Name:-</lable>
       <input type="text" className='form-control' id="lastName" {...register("lastname")}></input>
      </div>

      <div className='p-3'>
        <label for="email" className='text-light fs-5 form-label'>Enter Your Email:-</label>
        <input type="text" className='form-control' id="email" {...register("email")}></input>
      </div>

      <div className='p-3'>
        <label for="contact" className='text-light fs-5 form-label'>Enter Mobile Number:-</label>
        <input type="text" className='form-control' id="contact" {...register("mobileno")} ></input>
      </div>

      
      <div className='p-3'>
        <label for="addr" className='text-light fs-5 form-label'>Enter Your Address:-</label>
        <input type="text" className='form-control s-40' id="addr" {...register("address")}></input>
      </div>

      <div className='p-3'>
        <label for="msg" className='text-light fs-5 form-label'>Enter Your Message:-</label>
        <input type="text" className='form-control' id="msg" {...register("message")}></input>
      </div>

      <div className='text-center'>
        <button type='submit' className='btn btn-primary w-25'>submit</button>
      </div>
    </form>
  </div>
  <div className=''>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.535485382519!2d73.93909467496246!3d18.504688482585774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3ff55d2f943%3A0x90c17d27c2323701!2sAmul%20Milk%26Milk%20Products(SOHAM%20MILK%20SUPPLIERS)!5e0!3m2!1sen!2sin!4v1723893756710!5m2!1sen!2sin" className=''></iframe>
 </div>
   </div>
   </nav>

  )
}

export default ContactUs