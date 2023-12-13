import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IndieHome from '../src/views/IndieHome';
// import RegisterLogin from './components/RegisterLogin';
import ViewAllConcerts from './components/ViewAllConcerts';
import axios from 'axios';
import AddConcert from './components/AddConcert';
import EditConcert from './components/EditConcert';
import { useState } from 'react';
import DisplayOneConcert from './components/DisplayOneConcert';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  const [allConcerts, setAllConcerts] = useState([]);

  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<IndieHome />} />
          <Route path='/indie/:id' element={<DisplayOneConcert />} />
          <Route path='/indie/home' element={<ViewAllConcerts allConcerts={allConcerts} setAllConcerts={setAllConcerts} />} />
          <Route path='/indie/add' element={<AddConcert allConcerts={allConcerts} setAllConcerts={setAllConcerts} />} />
          <Route path='/indie/edit/:id' element={<EditConcert />} />
        </Routes>
    </>
  )
}

export default App;
