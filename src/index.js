import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Canvas } from '@react-three/fiber';
import 'bootstrap/scss/bootstrap.scss';
import NavBar from './components/Navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
    
    <header className="App__header">
      {/* <NavBar/> */}
    </header>
    
    <Canvas shadows>
      <App />
    </Canvas>

  </React.StrictMode>
);

