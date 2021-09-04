import SideBarNav from "./SideBarNav"

function Sidebar({ toggleState }) {
    return (
        <div className={toggleState}>
            <div className="app-sidebar-ctn">
                <div className="app-sidebar-logo-box">ULearn</div>
                <SideBarNav></SideBarNav>
            </div>
        </div>
    )
}

export default Sidebar
