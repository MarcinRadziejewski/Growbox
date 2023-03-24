import React from "react";
import Sidebar from './Sidebar.jsx';
import './MyGrowboxes.css';

function MyGrowboxes(){
return (
<div className="my-growboxes">
  <div className='header'>
    <div className='hamburger-menu' onClick={() => setOpenSidebar(true)}></div>
  </div>
</div>
);
}

export default MyGrowboxes;