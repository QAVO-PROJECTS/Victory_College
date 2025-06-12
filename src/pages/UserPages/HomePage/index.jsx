import './index.scss'
import HomeBanner from "../../../sections/HomeSections/HomeBanner/index.jsx";
import HomeAbout from "../../../sections/HomeSections/HomeAbout/index.jsx";
import HomeStudents from "../../../sections/HomeSections/HomeStudents/index.jsx";
import HomeAdvantage from "../../../sections/HomeSections/HomeAdvantage/index.jsx";
import TestimonialSlider from "../../../components/Slider/index.jsx";
function HomePage() {
    return (
        <div className={"home_page"}>
            <HomeBanner />
            <HomeAbout/>
            <HomeStudents/>
            <HomeAdvantage/>
            <TestimonialSlider/>

        </div>
    );
}

export default HomePage;