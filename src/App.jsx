import { useState, useEffect } from 'react';
import './App.css';
import TemperatureModal from './TemperatureModal.jsx';
import Sidebar from './Sidebar.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import MyGrowboxes from './MyGrowboxes.jsx';

function App() {
  

  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [minMaxTemperatures, setMinMaxTemperatures] = useState({
    maxTemperature: 42,
    currentTemperature: 35,
    minTemperature: 29,
  });

  /*function simulateTemperature (currentTemperature) {
    currentTemperature = currentTemperature + Math.random()*0.1 + Math.random()*(-0.1);
  }*/


  useEffect(() => {
    const p = document.querySelector("#current-temperature");
    const thermometerPaths = document.querySelectorAll(".thermometer");
    if (minMaxTemperatures.currentTemperature > minMaxTemperatures.maxTemperature || minMaxTemperatures.currentTemperature < minMaxTemperatures.minTemperature){
      p.style.color = "red";
      thermometerPaths.forEach(path => path.setAttribute("fill", "red"));
    } else{
      p.style.color = "#4DA52F";
      thermometerPaths.forEach(path => path.setAttribute("fill", "#4DA52F"));
    }
  }, [minMaxTemperatures])

  return (
  <div className='app'>
    <div className='header'>
    <div className='hamburger-menu' onClick={() => setOpenSidebar(true)}></div>
    <div className='current-crop'>Tomatoes</div>
    <div className='turn-off-button' onClick={() => setMinMaxTemperatures({
      maxTemperature: minMaxTemperatures.maxTemperature,
      currentTemperature: minMaxTemperatures.currentTemperature + 1,
      minTemperature: minMaxTemperatures.minTemperature,
    })}></div>
    </div>

    <div className='app-body'> 
    <div className="container">
      <p className="title">temperature</p>

      <div className='temperature display' onClick={() => {setOpenModal(true); console.log(openModal)}}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 24 24">
      <g>
        <path className='thermometer' d="M13 15.071V9.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v5.571c-.86.224-1.5 1-1.5 1.929 0 1.103.896 2 2 2s2-.897 2-2c0-.929-.64-1.705-1.5-1.929z" fill="#4DA52F"></path>
        <path className='thermometer' d="M16 13.459V5.5C16 3.57 14.43 2 12.5 2S9 3.57 9 5.5v7.959A4.937 4.937 0 007.5 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.39-.578-2.639-1.5-3.541zM12.5 20c-1.654 0-3-1.346-3-3a2.99 2.99 0 011.5-2.583V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v8.917A2.99 2.99 0 0115.5 17c0 1.654-1.346 3-3 3z" fill="#4DA52F"></path>
      </g>
      </svg>
      <p id='current-temperature'>{minMaxTemperatures.currentTemperature}</p>
      <div className="temperature-limits">
        <p className="higher limit">{minMaxTemperatures.maxTemperature}</p>
        <p className="lower limit">{minMaxTemperatures.minTemperature}</p>
      </div>
      </div>
    </div>
    
    <div className="container">
      <p className="title">light</p>
      <div className='temperature display'>
      </div>
    </div>

    <div className="container">
      <p className="title">soil moisture</p>
      <div className='temperature display'>
      </div>
    </div>

    <div className="container">
      <p className="title">air humidity</p>
      <div className='temperature display'>
      </div>
    </div>
    </div>
    <TemperatureModal
    openModal={openModal}
    setOpenModal={setOpenModal}
    temperatureLimits={minMaxTemperatures}
    setTemperatureLimits={setMinMaxTemperatures}/>

    <Sidebar
    openSidebar={openSidebar}
    setOpenSidebar={setOpenSidebar}/>

    
  </div>
  )
  
}



export default App;
