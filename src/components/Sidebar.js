import { FaTimes } from 'react-icons/fa'
import SideBarNav from "./SideBarNav"

function Sidebar({ toggleState, toggleMenu }) {
    function handleChange() {
        toggleMenu(() => "app-sidebar");
    }

    return (
        <div className={toggleState}>
            <div className="app-sidebar-ctn">
                <div className="app-sidebar-menu-toggle" onClick={handleChange}><FaTimes ></FaTimes></div>
                <div className="app-sidebar-logo-box">ULearn</div>
                <SideBarNav></SideBarNav>
            </div>
        </div>
    )
}

export default Sidebar
