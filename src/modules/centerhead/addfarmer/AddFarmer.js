import axios from 'axios';
import { useState } from 'react';

import { useForm } from 'react-hook-form'

function AddFarmer() {

       const{register,handleSubmit,reset} =useForm()
       const [farmerImage,setfarmerImage]=useState(null);
       const [cowImage,setCowImage]=useState(null);
       const [buffaloImage,setBuffaloImage]=useState(null);
      
       const saveFarmerDetails=(farmer)=>{
        console.log(farmer)

       const formData = new FormData();
       formData.append("farmerJson",JSON.stringify(farmer));
       formData.append("farmerAdhar",farmerImage);

       axios.post('http://localhost:9091/InsertFarmer',formData).then(
        res=>{if(res.status===201)alert("Farmer Inserted")}
            )
            .catch( error=>(console.log(error))
       )
    }
    function UploadFarmerImage(event)
        {
            setfarmerImage(event.target.files[0]);
        }
     function UploadCowImage(event)
        {
            setCowImage(event.target.files[1]);
        }
     function UploadBuffaloImage(event)
        {
            setBuffaloImage(event.target.files[2]);
        }
  return (
    <div>
      
        <h4 className='text-white mt-2 text-center bg-primary '>  
            Add Farmer</h4>
        <form onSubmit={handleSubmit(saveFarmerDetails)} className='border border-primary bg-secondary  pt-3 ps-5 pe-5 mt-2  '>
            <div className='mt-2'>
            <label className='text-white fs-5' htmlFor='fn'>Enter Farmer Name</label>
            <input type='text' className='form-control' id='fn' {...register('farmerName')}  />
            </div>
            <div className='mt-2'>
            <label className='text-white fs-5' htmlFor='address'>Enter Farmer Address</label>
            <input type='text' className='form-control' id='address'{...register('address')} />
            </div>
            <div className='mt-2'>
            <label className='text-white fs-5' htmlFor='age'>Enter Farmer Age</label>
            <input type='text' className='form-control' id='age' {...register('age')}/>
            </div>
            <div className='mt-2'>
            <label className='text-white fs-5' htmlFor='mail'>Enter Farmer Email</label>
            <input type='text' className='form-control' id='mail' {...register('mail')}/>
            </div>
            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='adhar'>Upload Adhar card</label>
                <input type='file' className='form-control' id='adhar' {...register('adhar')} onClick={e=>UploadFarmerImage(e)}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='cb'>Enter cow bread</label>
                <input type='text' className='form-control' id='cb' {...register('CowDetails.cowBreed')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='cage'>Enter cow Age</label>
                <input type='text' className='form-control' id='cage' {...register('CowDetails.cowAge')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='cno'>Enter cow Number</label>
                <input type='text' className='form-control' id='cno' {...register('CowDetails.cowNumber')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='cmilk'>Average milk quantity</label>
                <input type='text' className='form-control' id='cmilk' {...register('CowDetails.averageMilkQuantity')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='cimage'>Upload cow Image</label>
                <input type='file' className='form-control' id='cimage' {...register('CowDetails.cowImage')} onClick={e=>UploadCowImage(e)}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='bb'>Enter buffalo bread</label>
                <input type='text' className='form-control' id='bb' {...register('BuffaloDetails.buffaloBread')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='bage'>Enter buffalo Age</label>
                <input type='text' className='form-control' id='bage' {...register('BuffaloDetails.buffaloAge')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='bno'>Enter buffalo Number</label>
                <input type='text' className='form-control' id='bno' {...register('BuffaloDetails.buffaloNumber')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='bmilk'>Average milk quantity</label>
                <input type='text' className='form-control' id='bmilk' {...register('BuffaloDetails.averageMilkQuantity')}/>
            </div>

            <div className='mt-2'>
                <label className='text-white fs-5' htmlFor='bimage'> Upload buffalo Image</label>
                <input type='file' className='form-control' id='bimage' {...register('BuffaloDetails.buffaloImage')} onClick={e=>UploadBuffaloImage(e)}/>
            </div>


            <div className='mt-3'>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                <button type="submit" className='btn btn-outline-primary text-white fs-4 w-75'>
               
                     AddFarmer</button>
            </div>
        </form>
    </div>
  )
}

export default AddFarmer