import React from 'react';
import data from '../data.json'
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner';

function JobPage(props) {
    const {id} = useParams();
   const k=data.find(d=>{
     if(d.id===parseInt(id)) return d;
   })
   console.log(k);

    return (<div>
        
            <Banner name={k.name}/>
            <div className="row  mb-3">
              <div className="col-md-2"></div>
                <div className="col-md-8  fs-5 "><Link to="/" className='text-decoration-none text-danger'>Job Listing</Link><span className="fw-bold">	&nbsp; &gt; &nbsp;</span><span className="text-muted">Job details</span></div>
            </div>
            <div className='container-fluid fs-5'>
              <div className="row">
              <div className="col-md-2"></div>
                <div className="col-md-8 p-4  border-top">
                    <div className="title fw-bold fs-4 my-5">Job Description</div>
                    <div className='mb-4'>This is a remote position</div>
                    <div className="fw-bold mb-5">Are you a Student looking out for an Internship Opportunity, Apply for the Abhyaz Internships....</div>
                    <div className="description mb-5">{k.description}</div>
                    <div className='mb-5 fw-semibold fs-5'>Core Functional Responsibilities</div>
                    <ul className='mb-4'>
        
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    </ul>
                    <div className='fs-5 fw-semibold mb-2'>About Abhyaz Internships:</div>
                    <div className='fs-5'>Abhyaz Internships are a 4-8 weeks remote opportunity designed to develop your professional acumen while you work on critical real time projects. You are expected to spend 10 to 15 hrs a week. Our team of mentors and industry professionals guide you through every step of the project for you to gain valuable hands on exposure.  We publish your work results in your online portfolio, allowing you to strengthen your professional resume and social media profiles, while showcasing your work to best position your talents for future opportunities.The outcomes will be byte-sized projects that will have to be delivered every week. Your outcomes will be reviewed and graded by peers and your supervisors. Interns who excel in their project may offered a full-time job with the company.</div>
                    <div className='fs-5 fw-semibold my-4'>Requirements</div>
                    <div className='fs-5 mb-3'>If you are ready to start your Operations career and to gain real time experience while you are studying - then definitely apply.</div>
                    <ul>
                        <li> Bachelor’s degree in Marketing or Business Administration    </li>
                        <li>Excellent English communication (verbal and written)    </li>
                        <li>Generating , qualifying, processing and following up on the leads for external sales team    </li>
                        <li>Collaborate work with the sales, marketing team to develop lead generation strategies    </li>
                        <li>Initiate any lead/ demand generation strategies    </li>
                        <li>Get involved in new business pitches with sales team    </li>
                    </ul>
                    <div className="btn btn-lg btn-danger mt-3"><Link className="text-white text-decoration-none "to={`/${id}/apply`}>I'm interested</Link></div>
                </div>
                <div className="col-md-2 border">
                    <div className='fs-4 fw-semibold my-4'>Job Information </div>
                    <div className='fs-5'>Salary</div>
                    <div className='mb-4'> Based on the Outcomes</div>   
                    <div className='fs-5'>   Evaluation Process start on</div>
                    <div className='mb-4'>    05/16/2023</div>
                    <div className='fs-5'>Industry</div>    
                    <div className='mb-4'>Advertising</div>    
                    <div className='fs-5'> Work Experience</div>   
                    <div className='mb-4'>    0-1 year</div> 
                    <div className='fs-5'>  Application Closing Date </div>  
                    <div className='mb-4'>05/16/2023 </div>   
                    <div className='fs-5'>Date of Joining</div>    
                    <div className='mb-4'> 05/22/2023 </div>   
                    <div className='fs-5'>Shift Timings  </div>   
                    <div className='mb-4'> 1:00 PM - 6:00 PM</div>  
                        Remote Job

                </div>
              </div>
            </div>
    </div>
    );
}

export default JobPage;