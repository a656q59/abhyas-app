import React from 'react';
import {useForm} from 'react-hook-form';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import data from '../data.json'
import FileUpload from '../components/FileUpload';


function JobApplication(props) {
    const {register,handleSubmit,reset} = useForm();

    const {id} = useParams();
    const k=data.find(d=>{
      if(d.id===parseInt(id)) return d;
    })


   

   


    return (<>
                <Banner name={k.name}/>

                <div className="row  mb-3">
                 <div className="col-md-2"></div>
                    <div className="col-md-8 fs-5 p-0">
                        <Link to="/" className='text-decoration-none text-danger'>Job Listing</Link>
                        <span className="fw-bold">	&nbsp; &gt; &nbsp;</span> 
                        <Link to={`/${id}`} className='text-decoration-none text-danger'>Job details</Link> 
                        <span className="fw-bold">	&nbsp; &gt; &nbsp;</span>  
                        <span className="text-muted">Job application</span>
                    </div>
                </div>

                <div className='container'>

                        <div className='fs-4 fw-semibold'>Autofill Application</div>
                        <div className='fs-5 mb-4'> Upload your resume/cv in seconds with the autofill option.</div>
                        <input type="file" className="mb-4" id="file" {...register('file')}/>                        

                        <div className='fs-4 fw-semibold'>Basic Information</div>
                        <div className='fs-5'>Please read this before filling out this form. We have several categories as follows:-</div>
                        <div className="fs-5">1. <span className="fw-semibold">Student Internship</span>- For high school students/ college students- min duration 1 month</div>
                        <div className="fs-5"> 2. <span className="fw-semibold">Graduate Internship</span>- For Graduates /Job Seekers- min duration 3 month</div>
                        <div className="fs-5 mb-5"> 3. <span className="fw-semibold">Returnship</span>- People who have completed internships with us in past/ have career break- min duration 3 month</div>

                    

                    <form  className="fs-5" onSubmit={handleSubmit(data=>{
                        console.log(data)
                        reset({ firstname: '', lastname:'',mobile:'',email:'',currentEmployer:'',expectedSalary:'',currentSalary:'' })})}>
                        <div className="mb-3 flex-column ">
                            <label htmlFor="firstname" className="form-label ">First Name</label>
                            <input {...register('firstname')} id="firstname" className="form-control w-75" type="text" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input {...register('lastname')} id="lastname" className="form-control w-75 " type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input {...register('mobile')} id="mobile" className="form-control w-75 " type="number" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input {...register('email')} id="email" className="form-control w-75 " type="email" />
                        </div>

                        {/* PROFESSIONAL DETAILS */}
                            <div className="fs-5 fw-semibold mb-3">Professional Details</div>
                        <div className="mb-3">
                            <label htmlFor="currentEmployer" className="form-label">Current Employer</label>
                            <input {...register('currentEmployer')} id="currentEmployer" className="form-control w-75 " type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="expectedSalary" className="form-label">Expected Salary</label>
                            <input {...register('expectedSalary')} id="expectedSalary" className="form-control w-75 " type="number" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="currentSalary" className="form-label">Current Salary</label>
                            <input {...register('currentSalary')} id="currentSalary" className="form-control w-75 " type="number" />
                        </div>



                        {/* Address Information */}


                        <div className="fs-5 fw-semibold mb-3">Address Information</div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City *</label>
                            <input {...register('city')} id="city" className="form-control w-75 " type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="postCode" className="form-label">Zip/Postal Code *</label>
                            <input {...register('postCode')} id="postCode" className="form-control w-75 " type="number" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">Country *</label>
                            <input {...register('state')} id="state" className="form-control w-75 " type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State *</label>
                            <input {...register('state')} id="state" className="form-control w-75 " type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Street *</label>
                            <input {...register('street')} id="street" className="form-control w-75 " type="text" />
                        </div>







                        <div className="d-flex flex-row justify-content-center w-75">
                            <button className="btn btn-outline-secondary fs-4 me-3 " type="submit"><Link to={`/${id}`} className='text-decoration-none text-dark'>Cancel</Link></button>
                            <button className="btn btn-lg btn-danger " type="submit">Submit Application</button>
                        </div>
                    </form>
                </div>
        </>
    );
}

export default JobApplication;