import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainRoute from './routes/MainRoute.tsx';
import LoginRoute from './routes/LoginRoute.tsx';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginRoute />}
        />
        <Route 
           path="/"
           element={<MainRoute />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
