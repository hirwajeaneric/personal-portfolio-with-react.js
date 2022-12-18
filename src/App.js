import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
          element={<Home/>} 
          errorElement={<ErrorPage />}
        />
        <Route 
          path='/about' 
          element={<AboutMe />} 
          errorElement={<ErrorPage />} 
        />
        <Route 
          path='/projects' 
          element={<Projects />} 
          errorElement={<ErrorPage />} 
        />
        <Route 
          path='/contact' 
          element={<ContactMe />} 
          errorElement={<ErrorPage />} 
        />
        <Route 
          path='/project:id' 
          element={<ProjectDetails />} 
          errorElement={<ErrorPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
