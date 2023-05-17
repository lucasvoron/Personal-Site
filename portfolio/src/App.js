import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Information from './pages/Information.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Coursework from './pages/Coursework.js';
import Projects from './pages/Projects.js';
import Leadership from './pages/Leadership.js';
import Awards from './pages/Awards.js';
import NotFound from './pages/404.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router basename='/'>
    <Navbar />
    <Routes>
        <Route path='/' element={<Information />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/coursework' element={<Coursework/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/leadership' element={<Leadership/>} />
        <Route path='/awards' element={<Awards/>} />
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </Router>
  );
}

export default App;

