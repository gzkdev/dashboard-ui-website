import { FaPlay } from 'react-icons/fa'
import content from "../AppContents"

function MainPageTrendingSection() {
    return (
        <section className="app-main-trending">
            <h3 className="section-heading">Popular Courses</h3>
            <div className="app-main-trending-ctn">
                {content.map((content, index) =>
                    <div key={index} className="app-main-trending-box">
                        <div className="app-main-trending-img-box">
                            <div className="img-ctn"></div>
                            <div className="img-play-ctrl">
                                <FaPlay></FaPlay>
                            </div>
                        </div>
                        <div className="app-main-trending-text-box">
                            <div className="app-main-trending-tutor-box">
                                <div className="tutor-img-box"></div><h5>{content.channel}</h5>
                            </div>
                            <span>{content.title}</span>
                            <div className="app-main-trending-stat-box">
                                <span>{content.views} views</span>
                                <span>{content.time}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MainPageTrendingSection

