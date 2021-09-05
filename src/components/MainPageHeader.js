import { FaChevronDown, FaBell, FaBars, FaSearch } from 'react-icons/fa'

function MainPageHeader({ toggleMenu }) {

    function handleChange() {
        toggleMenu(() => "app-sidebar active");
    }

    return (
        <div className="app-header">
            <div className="app-header-menu-toggle" onClick={handleChange}><FaBars ></FaBars></div>
            <form autoComplete="off" className="app-header-form">
                <div className="app-header-form-ctn">
                    <FaSearch className="app-header-search-icon"></FaSearch>
                    <input type="search" name="search" id="search" placeholder="search for courses" />
                </div>
            </form>
            <div className="app-header-profile-box">
                <button>
                    <div className="app-header-profile-img"></div>
                    <span className="app-header-profile-name">Dhey</span>&nbsp;
                    <FaChevronDown></FaChevronDown>
                </button>
                <button><FaBell></FaBell></button>
            </div>
        </div >
    )
}

export default MainPageHeader
