import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import { useState, useEffect } from 'react';
import Homepage from './Homepage';
import NotFound from './404';
import Login from './login';
import Signup from './signup';
import UserAccountManagement from './useraccount';
import RecipeComponent from './reciperesult';
import TopNavBar from './top-nav-bar';

function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/reciperesult" element={<RecipeComponent />} />
          <Route path="/useraccount" element={<UserAccountManagement />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
