import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar ({openSidebar, setOpenSidebar}) {

    return (
    <div className={openSidebar ? "sidebar-overlay open" : "sidebar-overlay"} onClick={() => setOpenSidebar(false)}>
    <nav className={openSidebar ? "sidebar open" : "sidebar"} onClick={(e) => e.stopPropagation()}>
      <ul className="nav-menu-items">
        <li className="my-growboxes">My Growboxes</li>
        <li className="settings">Settings</li>
      </ul>
    </nav>
    </div>
    )
}

export default Sidebar