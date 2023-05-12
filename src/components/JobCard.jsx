import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({id,name,type,remote }) {

    return (
        
            <div className='w-100 text-left border  my-3 p-3 '>

                <Link className="text-decoration-none" to={`/${id}`}> <h5 className="job-title"> {name}</h5>  </Link>
                <div className='mb-2'>Job-Type:{type}</div>
                <div>Remote job: {remote}</div>
            </div>
      
    );
}

export default JobCard;