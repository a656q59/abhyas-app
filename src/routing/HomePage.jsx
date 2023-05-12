import React from 'react';
import data from '../data.json'
import JobCard from '../components/JobCard';

function HomePage(props) {

    console.log(data);


    return (
        <div className='container border border-primary'>
            {data.map(d=>(
                <JobCard key={d.id} {...d}/>
            ))}
        </div>
    );
}

export default HomePage;


//id={d.id} name={d.name} type={d.type} remote={d.remote}