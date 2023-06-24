import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './components/pages/Articles';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';
import  Post from './components/pages/post'
import Author from './components/pages/author';


function App() { 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/author' element ={<Author/>}/>
          <Route exact path="/post" element={<Post/>} />
          <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
