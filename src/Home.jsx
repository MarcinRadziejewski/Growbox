import { useState } from 'react';
import './App.css'
import { Blant } from './Blant'

export function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
  <main className="home">
    <div className='header'>
      <div className='hamburger-menu' onClick={() => setOpenSidebar(true)}></div>
    </div>

    <Blant
    openSidebar={openSidebar}
    setOpenSidebar={setOpenSidebar} />
  </main>
  )
}