import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Dashboard/Login';
import Main from './pages/Main';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Main/>} >
          <Route path='' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactMe />} />
          <Route path='/project:id' element={<ProjectDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path='/dash' element={<Dashboard />}>
          <Route path='signin' element={<Login />} />
          <Route path='' element={<Main />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
