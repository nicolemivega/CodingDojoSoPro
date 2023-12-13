import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditConcert = (props) => {

    const {id} = useParams();
    const [concert, setConcert] = useState({
        artistName: "",
        genre: "",
        venueName: "",
        location: "",
        performanceDate: "",
        description: ""
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/indie/${id}`)
            .then((res) => {
                console.log(res.data);
                setConcert(res.data);
            })
            .catch((err) => {
                console.log(err.res);
                setErrors(err.response.data.errors);
            });
    }, [id]);

    const changeHandler = (e) => {
        setConcert({...concert, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/indie/${id}`, concert)
            .then((res) => {
                console.log(res);
                navigate('/indie/home');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div className='container'>
            <h1 className='text-center p-3'>Edit Concert/Performance</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className='needs-validation p-2'>
                    <label className='p-2 form-label'>Artist Name: </label>
                    <input type="text" onChange={changeHandler} value={concert.artistName} name='artistName' />
                    {
                        errors.artistName?
                        <p className='alert alert-danger' role='alert'>{errors.artistName.message}</p>:
                        null
                    }
                    <br />
                    <label className='p-2 form-label'>Genre:</label>
                    <select name="genre" id="genre" onChange={changeHandler} value={concert.genre}>
                        <option value="alternative">Alternative</option>
                        <option value="blues">Blues</option>
                        <option value="classical">Classical/Opera</option>
                        <option value="country">Country</option>
                        <option value="covers">Covers</option>
                        <option value="dance">Dance</option>
                        <option value="electronic">Electronic</option>
                        <option value="folk">Folk</option>
                        <option value="funk">Funk</option>
                        <option value="hiphop">Hip Hop</option>
                        <option value="inspirational">Inspirational/Christian</option>
                        <option value="jazz">Jazz</option>
                        <option value="latin">Latin</option>
                        <option value="metal">Metal</option>
                        <option value="pop">Pop</option>
                        <option value="punk">Punk</option>
                        <option value="rnb">R&B/Neo-Soul</option>
                        <option value="reggae">Reggae/Ska</option>
                        <option value="world">World</option>
                        <option value="other">Other</option>
                    </select>
                    {
                        errors.genre?
                        <p className='alert alert-danger' role='alert'>{errors.genre.message}</p>:
                        null
                    }
                    <br />
                    <label className='p-2 form-label'>Venue Name:</label>
                    <input type="text" onChange={changeHandler} value={concert.venueName} name='venueName' />
                    {
                        errors.venueName?
                        <p className='alert alert-danger' role='alert'>{errors.venueName.message}</p>:
                        null
                    }
                    <br />
                    <label className='p-2 form-label'>Location (City, State):</label>
                    <input type="text" onChange={changeHandler} value={concert.location} name='location' />
                    {
                        errors.location?
                        <p className='alert alert-danger' role='alert'>{errors.location.message}</p>:
                        null
                    }
                    <br />
                    <label className='p-2 form-label'>Performance Date:</label>
                    <input type="date" onChange={changeHandler} value={concert.performanceDate} name='performanceDate' />
                    {
                        errors.performanceDate?
                        <p className='alert alert-danger' role='alert'>{errors.performanceDate.message}</p>:
                        null
                    }
                    <br />
                    <button className='submit-concert btn btn-primary' type='submit'>Update Concert</button>
                </div>
            </form>
        </div>
    )
}

export default EditConcert;