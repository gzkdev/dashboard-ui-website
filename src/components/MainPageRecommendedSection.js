import { FaPlay } from 'react-icons/fa'

function MainPageRecommendedSection() {
    return (
        <section className="app-recommended-section">
            <h3 className="section-heading">Last Watched</h3>
            <div className="app-recommended-section-ctn">
                <div className="app-recommended-box">
                    <div className="img-play-ctrl">
                        <FaPlay></FaPlay>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPageRecommendedSection
