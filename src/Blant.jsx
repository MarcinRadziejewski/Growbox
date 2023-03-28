import { Link } from "react-router-dom";
import './Sidebar.css'

export function Blant( { openSidebar, setOpenSidebar } ) {
    return (<div className={openSidebar ? "sidebar-overlay open" : "sidebar-overlay"} onClick={() => setOpenSidebar(false)}>
    <nav className={openSidebar ? "sidebar open" : "sidebar"} onClick={(e) => e.stopPropagation()}>
      <ul className="nav-menu-items">
        <li className="my-growboxes"><Link to="/MyGrowboxes">MyGrowboxes</Link></li>
        <li className="settings">Settings</li>
      </ul>
    </nav>
    </div>)
}