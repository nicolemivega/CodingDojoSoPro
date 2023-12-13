import React from 'react'
import { Link } from 'react-router-dom';

function IndieHome() {

    return (
        <div className='container-lg p-3 text-center bg-info-subtle border rounded-1'>
            <h1 className='display-1 ft-bold text-body-emphasis'>Welcome to Indie Stage</h1>
            <h3 className='h3 fw-light lh-base fst-italic'>Testing! Testing! Is this thing on?</h3>
            <div className='p-3 text-med-end'>
                <p className='fw-medium blockquote'>Welcome to Indie Stage, a platform for growing independent artists and fans to share upcoming concerts and performances with faithful listeners and music explorers alike. Concertgoers can browse for local artists, purchase tickets, and share on social media.</p>
            </div>
            <div className='container text-center'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <h3>Artists, take the stage! &#127908;</h3>
                        <p className='text-primary'><Link to={'/indie/add'} >Add a Concert/Performance</Link></p>
                    </div>
                    <div className='col'>
                        <h3>Concertgoers, take a look! &#128064;</h3>
                        <p className='text-primary'><Link to={'/indie/home'} >View All Upcoming Concerts</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default IndieHome;