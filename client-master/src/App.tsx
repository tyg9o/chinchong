import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header';
import HomePage from './features/home/HomePage';

function App() {
  
  return (
    <>
      <Header/>
      <HomePage />
    </>
  );
}

export default App;
