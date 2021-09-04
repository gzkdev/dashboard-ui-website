import { FaFire, FaArrowRight, FaStream, FaBookmark, FaCog } from "react-icons/fa"

function SideBarNav() {
    return (
        <nav className="app-sidebar-nav">
            <ul>
                <li>MENU</li>
                <li>
                    <div className="icon-box">
                        <FaFire></FaFire></div> Discover
                </li>
                <li>
                    <div className="icon-box">
                        <FaArrowRight></FaArrowRight></div> Trending
                </li>
                <li>
                    <div className="icon-box">
                        <FaStream></FaStream></div> Playlist
                </li>
                <li>
                    <div className="icon-box">
                        <FaBookmark></FaBookmark></div> Bookmark
                </li>
                <li>
                    <div className="icon-box">
                        <FaCog></FaCog></div> Settings
                </li>
                <li>
                    <label htmlFor="toggle">
                        <input type="checkbox" name="toggle" id="toggle" />
                        <span className="slider"></span>
                    </label>&nbsp;Toggle theme
                </li>
            </ul>
        </nav>
    )
}

export default SideBarNav
