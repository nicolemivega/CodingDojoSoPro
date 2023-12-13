import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterLogin() {

    const [data, setData] = useState({
        name: '',
        genre: '',
        regemail: '',
        regpassword: '',
        loginemail: '',
        loginpwd: ''
    })

    const submitRegHandler = (e) => {
        e.preventDefault()
    }

    const submitLoginHandler = (e) => {
        e.preventDefault();
            axios.get('/')
    }

    return (
        <div>
            <div>
                <form className='register' onSubmit={submitRegHandler}>
                    <label>Artist/Band Name:</label>
                    <input type="text" placeholder='enter artist/band name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                    <br />
                    <label>Genre:</label>
                    <select name="genre" id="genre" placeholder='choose one' value={data.genre} onChange={(e) => setData({...data, genre: e.target.value})}>
                        <option value="Other">Other</option>
                        <option value="AfroBeats">Afro Beats</option>
                        <option value="Alternative">Alternative</option>
                        <option value="Blues">Blues</option>
                        <option value="Country">Country</option>
                        <option value="Covers">Covers</option>
                        <option value="Electronic">Dance/Electronic</option>
                        <option value="HipHop">Hip Hop</option>
                        <option value="Funk">Funk</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Latin">Latin</option>
                        <option value="Metal">Metal</option>
                        <option value="Pop">Pop</option>
                        <option value="Punk">Punk</option>
                        <option value="Classical">Opera/Classical</option>
                        <option value="RNB">R&B/Soul/Neo-Soul</option>
                        <option value="Rock">Rock</option>
                        <option value="World">World</option>
                    </select>
                    <br />
                    <label>Email:</label>
                    <input type="text" placeholder='enter email' value={data.regemail} onChange={(e) => setData({...data, regemail: e.target.value})}/>
                    <br />
                    <label>Password:</label>
                    <input type="text" placeholder='enter password' value={data.regpassword} onChange={(e) => setData({...data, regpassword: e.target.value})}/>
                    <br />
                    <button type='submit'>Register</button>
                </form>
            </div>
            <div>
            <form className='login' onSubmit={submitLoginHandler}>
                <label>Email:</label>
                <input type="text" placeholder='enter email' value={data.loginemail} onChange={(e) => setData({...data, loginemail: e.target.value})}/>
                <br />
                <label>Password:</label>
                <input type="text" placeholder='enter password' value={data.loginpwd} onChange={(e) => setData({...data, loginpwd: e.target.value})}/>
                <br />
                <button type='submit'>Log In</button>
            </form>
        </div>
    </div>
    )
}
