import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './assets/logo/logo.png'
import { Canvas } from '@react-three/fiber';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <header className="App__header">
      <img src={logo} alt="logo" className="App__logo"/>
    </header>

    {/* <Canvas shadows> */}
      <App />
    {/* </Canvas> */}

  </React.StrictMode>
);

