import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Information from './pages/Information.js';
import Idea from './pages/Idea.js';
import Tutorial from './pages/Tutorial.js';
import FAQ from './pages/FAQ.js';
import NotFound from './pages/404.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Information />} />
        <Route path='/idea' element={<Idea/>} />
        <Route path='/tutorial' element={<Tutorial/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </Router>
  );
}

export default App;

