import { FaPlay } from 'react-icons/fa'
import Image from '../assets/images/fourteen.jpg';

function MainPageRecommendedSection() {
    return (
        <section className="app-recommended-section">
            <h2 className="section-heading">Last Watched</h2>
            <div className="app-recommended-section-ctn">
                <p className="app-recommended-section-title">Effective copy for UX designers <span>continue</span> </p>
                <div className="app-recommended-box">
                    <a href="/">
                        <img src={Image} alt="" className="app-img" />
                    </a>
                    <button className="img-play-ctrl">
                        <FaPlay></FaPlay>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainPageRecommendedSection
