import { useState } from 'react';
import './App.css';
import './MyGrowboxes.css';
import { Blant } from './Blant';
import { AddGrowboxModal } from './AddGrowboxModal' 
import { Link } from 'react-router-dom';

export function MyGrowboxes() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [addGrowboxModalOpen, setAddGrowboxModalOpen] = useState(false);
  const [growboxList, setGrowboxList] = useState([]);

  //you need a GrowboxContainer component

  return (
  <main className="MyGrowboxes">
    <header className='header'>
      <div className='hamburger-menu' onClick={() => setOpenSidebar(true)}></div>
    </header>
    <div className="my-growboxes-container">
      <Link to="/MyGrowboxes/Tomato" className="growbox-item one">
      tomato
      </Link>

      <button className="growbox-item growbox-add" onClick={() => setAddGrowboxModalOpen(true)}>
      +
      </button>
    </div>

    <AddGrowboxModal
    addGrowboxModalOpen={addGrowboxModalOpen}
    setAddGrowboxModalOpen={setAddGrowboxModalOpen}/>

    <Blant
    openSidebar={openSidebar}
    setOpenSidebar={setOpenSidebar} />
  </main>
  )
}