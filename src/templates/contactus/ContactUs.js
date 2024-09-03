import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ContactUs() {
   const{register,handleSubmit,reset,setValue,formState:{error}}=useForm();
   

  function saveUser(user)
  {
    axios.post('http://localhost:5000/user',user).then(
      response=>{
        if(response.status==201){
          alert("product is successfully stored..!")
          reset();
        }
      else{
        alert("something went wrong..!")
      }
      }
    ).catch(error=>{
      console.log(error)
      alert("something went wrong..!")
    })
  }

 


  return (
    <nav className=''>
       <div className='bg-secondary text-light fs-3 '>
      <h1 className='text-center'>Contact-Us</h1>
     </div>

    <div className='w-50 '>
    </div>
      <div className='d-flex justify-content-center '>
      <div className='w-50 border border-black mt-3 p-4 bg-primary-subtle color-primary' >
    <h1 className='text-dark border border-black  bg-light fs-3  text-center  ' >
    <i className="bi bi-telephone-fill " ></i>&nbsp;
        Have Question?<br></br>
        Get In Touch
    </h1>
    
    <form onSubmit={handleSubmit(saveUser)}>
      <div className='p-3 '>
       <lable for="firstName" className='text-dark fs-5 form-label'>Enter First Name:-</lable>
       <input type="text" className='form-control'  id="firstName" placeholder='Enter First Name' {...register("firstname")}></input>
      </div>
      
      <div className='p-3'>
       <lable for="lastName" className='text-dark fs-5 form-label'>Enter Last Name:-</lable>
       <input type="text" className='form-control' id="lastName" placeholder='Enter Last Name' {...register("lastname")}></input>
      </div>

      <div className='p-3'>
        <label for="email" className='text-dark fs-5 form-label'>Enter Your Email:-</label>
        <input type="text" className='form-control' id="email" placeholder='Enter Your Email'{...register("email")}></input>
      </div>

      <div className='p-3'>
        <label for="contact" className='text-dark fs-5 form-label'>Enter Mobile Number:-</label>
        <input type="text" className='form-control' id="contact" placeholder='Enter Mobile Number' {...register("mobileno")} ></input>
      </div>

      
      <div className='p-3'>
        <label for="addr" className='text-dark fs-5 form-label'>Enter Your Address:-</label>
        <input type="text" className='form-control s-40' id="addr" placeholder='Enter Your Address'{...register("address")}></input>
      </div>

      <div className='p-3'>
        <label for="msg" className='text-dark fs-5 form-label'>Enter Your Message:-</label>
        <input type="text" className='form-control' id="msg" placeholder='Enter Your Message' {...register("message")}></input>
      </div>

      <div className='text-center '>
        <button type='submit' className='btn btn-outline-secondary w-100'>submit</button>
      </div>
    </form>
  </div>

  <div className='w-400 p-5'>
  <h1 className='fs-4 justify-content-center' ><i className="bi bi-geo-alt-fill text-primary"></i>  
  Address:-
  <br></br>
  DP Rd, Shri Swami Samarth Nagar, Malwadi, Hadapsar, Pune, Maharashtra pincode-411028</h1>
  <br></br>

  <h1 className='fs-4 color-primary' ><i className="bi bi-telephone-inbound-fill text-primary"></i> Call Us:-
    <br></br>
  +91 8643267894, 9345674326, 9745235689</h1>
    <br></br>

  <h1 className='fs-4'><i className="bi bi-envelope-fill text-primary"></i>Email:-
  <br></br>
  amulproduuct123@gmail.com
  <br></br>
  amulmilk678@gmail.com
  </h1>
  <br></br> 
  <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.535485382519!2d73.93909467496246!3d18.504688482585774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3ff55d2f943%3A0x90c17d27c2323701!2sAmul%20Milk%26Milk%20Products(SOHAM%20MILK%20SUPPLIERS)!5e0!3m2!1sen!2sin!4v1723893756710!5m2!1sen!2sin" className='w-50 h-50'></iframe>
  
</div>
</div>
</nav>

  )
}

export default ContactUs