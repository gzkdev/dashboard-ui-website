import MainPageHeader from "./MainPageHeader"
import MainPageRecommendedSection from "./MainPageRecommendedSection"
import MainPageTrendingSection from "./MainPageTrendingSection"

function MainPageSection({ toggleMenu, toggleState }) {
    return (
        <main className="app-main-section">
            <MainPageHeader toggleMenu={toggleMenu} toggleState={toggleState}></MainPageHeader>
            <MainPageRecommendedSection></MainPageRecommendedSection>
            <MainPageTrendingSection></MainPageTrendingSection>
        </main>
    )
}

export default MainPageSection
