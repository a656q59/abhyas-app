import React from 'react';

function Banner({name}) {
    return (
        <div className='text-center h-75 border py-5 mb-3'>
            <div className="banner-title fs-4">MTAB Technology Center P Ltd | Graduate Internship</div>
            <div className="banner-title fs-2">{name}</div>
            <div>Remote Job | Posted on 05/10/2023</div>
        </div>
    );
}

export default Banner;