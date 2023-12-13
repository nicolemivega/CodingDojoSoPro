import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddConcert = (props) => {

    const navigate = useNavigate();
    const [concert, setConcert] = useState({
        artistName: "",
        genre: "",
        venueName: "",
        location: "",
        performanceDate: "",
        description: ""
    })
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setConcert({...concert, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/indie', concert)
            .then((response) => {
                console.log(response);
                navigate('/indie/home');
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='container'>
            <h1 className='text-center p-3'>Add a New Concert/Performance</h1>
            <hr />
            <div className=''>
                <form className='needs-validation p-2' onSubmit={submitHandler}>
                    <div>
                        <label className='p-2 form-label'>Artist/Band Name:</label>
                        <input type="text" onChange={changeHandler} value={concert.artistName} name='artistName' />
                        {
                            errors.artistName?
                            <p className='alert alert-danger' role='alert'>{errors.artistName.message}</p>:
                            null
                        }
                        <br />
                        <label className='p-2'>Genre:</label>
                        <select name="genre" id="genre" onChange={changeHandler} defaultValue="Choose a genre..." value={concert.genre}>
                            <option value="Alternative">Alternative</option>
                            <option value="Blues">Blues</option>
                            <option value="Classical">Classical/Opera</option>
                            <option value="Country">Country</option>
                            <option value="Covers">Covers</option>
                            <option value="Dance">Dance</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Folk">Folk</option>
                            <option value="Funk">Funk</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Inspirational">Inspirational/Christian</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Latin">Latin</option>
                            <option value="Metal">Metal</option>
                            <option value="Pop">Pop</option>
                            <option value="Punk">Punk</option>
                            <option value="R&B">R&B/Neo-Soul</option>
                            <option value="Reggae">Reggae/Ska</option>
                            <option value="World">World</option>
                            <option value="Other">Other</option>
                        </select>
                        {
                            errors.genre?
                            <p className='alert alert-danger ' role='alert'>{errors.genre.message}</p>:
                            null
                        }
                        <br />
                        <label className='p-2'>Venue Name:</label>
                        <input type="text" onChange={changeHandler} value={concert.venueName} name='venueName' />
                        {
                            errors.venueName?
                            <p className='alert alert-danger ' role='alert'>{errors.venueName.message}</p>:
                            null
                        }
                        <br />
                        <label className='p-2'>Location (City, State):</label>
                        <input type="text" onChange={changeHandler} value={concert.location} name='location' />
                        {
                            errors.location?
                            <p className='alert alert-danger ' role='alert'>{errors.location.message}</p>:
                            null
                        }
                        <br />
                        <label className='p-2'>Performance Date:</label>
                        <input type="date" onChange={changeHandler} value={concert.performanceDate} name='performanceDate' />
                        {
                            errors.performanceDate?
                            <p className='alert alert-danger ' role='alert'>{errors.performanceDate.message}</p>:
                            null
                        }
                        <br />
                        <button className='submit-form btn btn-primary' type='submit'>Add Concert</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddConcert;