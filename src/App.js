import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/MainPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Route path='/'>
      <MainPage />
      </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
