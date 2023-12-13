import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const DisplayOneConcert = (props) => {
    const {id} = useParams();
    const [oneConcert, setOneConcert] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/indie/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneConcert(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <div className='text-center'>
            <h1>{oneConcert.artistName}</h1>
            <hr />
            <p className='fw-semibold p-1'>Venue Name: 
                <span className='fw-normal'> {oneConcert.venueName}</span>
            </p>
            <p className='fw-semibold p-1'>Location: 
                <span className='fw-normal'> {oneConcert.location}</span>
            </p>
            <p className='fw-semibold p-1'>Performance Date: 
                <span className='fw-normal'>{oneConcert.performanceDate}</span>
            </p>
            <p className='fw-semibold p-1'>Description: 
                <span className='fw-normal'> {oneConcert.description}</span>
            </p>
            <p>
                <a href="#">Find Tickets</a>
            </p>
            <h5>
                Does something look off?
                <a className='text-primary fw-semibold' onClick={() => navigate(`/indie/edit/${oneConcert._id}`)}> Edit this concert.</a>
            </h5>
            <p className='fw-semibold'>
                Share with friends!
                <br />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={instagram} alt="instagram" />
            </p>
        </div>
    )
}

export default DisplayOneConcert;