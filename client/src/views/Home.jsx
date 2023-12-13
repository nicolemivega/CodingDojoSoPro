import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IndieHome from '../src/views/IndieHome';
import ViewAllConcerts from './components/ViewAllConcerts';
import axios from 'axios';
import AddConcert from './components/AddConcert';
import EditConcert from './components/EditConcert';
import { useEffect, useState } from 'react';


const Home = (props) => {
    const [allConcerts, setAllConcerts] = useState([]);
    const [concert, setConcert] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/indie')
            .then(res => setAllConcerts(res.data))
            .catch((err) => console.log(err));
    })

    return (
        <>
        <NavBar />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndieHome />} />
                <Route path='/indie/home' element={<ViewAllConcerts allConcerts={allConcerts} setAllConcerts={setAllConcerts} />} />
                <Route path='/indie/add' element={<AddConcert />} />
                <Route path='/indie/edit/:id' element={<EditConcert />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home;
