import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ViewAllConcerts = (props) => {
    const navigate = useNavigate();
    const [allConcerts, setAllConcerts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/indie')
            .then((res) => {
                setAllConcerts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/indie/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAllConcerts((allConcerts) => allConcerts.filter((concert) => concert._id !== id));
            navigate('/indie/home');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className='container-lg p-3 text-center bg-info-subtle border rounded-1'>
            <h1 className='display-3 ft-bold text-body-emphasis'>Support Your Local Artists!</h1>
            <h2 className='h3 fw-light lh-base fst-italic'>Find concerts and other performances by local artists near you below.</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Artist/Band</th>
                        <th scope='col'>Genre</th>
                        <th scope='col'>Venue</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Concert Date</th>
                        <th scope='col'> </th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allConcerts.map( (concert) => {
                            return(
                                <tr className='table table-striped' key={concert._id}>
                                    <td>{concert.artistName}</td>
                                    <td>{concert.genre}</td>
                                    <td>{concert.venueName}</td>
                                    <td>{concert.location}</td>
                                    <td>{concert.performanceDate}</td>
                                    <td><button className='btn btn-info fw-bold' onClick={() => navigate(`/indie/${concert._id}`)}>Details</button></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteHandler(concert._id)}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <button onClick={() => navigate('/indie/add')}>Wanna add a concert?</button>
        </div>
    )
}

export default ViewAllConcerts;
