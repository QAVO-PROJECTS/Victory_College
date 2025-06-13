import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.scss';
import AdvantageCardDark from "../../../components/UserComponents/AdvantageCardDark";
import AdvantageCardWhite from "../../../components/UserComponents/AdvantageCardWhite";
import AdvantageCardDark2 from "../../../components/UserComponents/AdvantageCardDark2";
import AdvantageCardWhite2 from "../../../components/UserComponents/AdvantageCardWhite2";
import image from "/src/assets/Group 22.svg";
import image2 from "/src/assets/Group 26.png";
import image3 from "/src/assets/Group 25.png";
import image4 from "/src/assets/team.png";
import { useNavigate } from "react-router-dom";

function HomeAdvantage() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const arr = [
        {
            img: image,
            desc1: "Etibarlı və sistemli tədris mühitinin təmin edilməsi",
            desc2: "Zəngin tədris materialları və resurs bazası",
        },
        {
            img: image2,
            desc1: "Uğurlu nəticələrlə sübut olunmuş nailiyyətlər",
            desc2: "Peşəkar və təcrübəli müəllim heyəti",
        },
        {
            img: image3,
            desc1: "Etibarlı və sistemli tədris mühitinin təmin edilməsi",
            desc2: "Peşəkar SAT hazırlığının həyata keçirilməsi",
        },
        {
            img: image4,
            desc1: "Fərdi yanaşma və mentorluq dəstəyi",
            desc2: "Hər ay ödənişsiz sınaq imtahanlarının təşkili",
        }
    ];

    return (
        <div id="homeAdvantage">
            <div className="container">
                <div className="head" data-aos="fade-down">
                    <h3>Victory Colleges-də Təhsilin Üstünlükləri</h3>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className={'col-6 col-md-12 col-sm-12 col-xs-12'} data-aos="fade-right">
                            <AdvantageCardDark
                                img={arr[0].img}
                                desc1={arr[0].desc1}
                                desc2={arr[0].desc2}
                            />
                        </div>
                        <div className={'col-6 col-md-12 col-sm-12 col-xs-12'} data-aos="fade-left" data-aos-delay="100">
                            <AdvantageCardWhite
                                img={arr[1].img}
                                desc1={arr[1].desc1}
                                desc2={arr[1].desc2}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={'col-6 col-md-12 col-sm-12 col-xs-12'} data-aos="fade-right" data-aos-delay="200">
                            <AdvantageCardWhite2
                                img={arr[2].img}
                                desc1={arr[2].desc1}
                                desc2={arr[2].desc2}
                            />
                        </div>
                        <div className={'col-6 col-md-12 col-sm-12 col-xs-12'} data-aos="fade-left" data-aos-delay="300">
                            <AdvantageCardDark2
                                img={arr[3].img}
                                desc1={arr[3].desc1}
                                desc2={arr[3].desc2}
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/form")}
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    Müraciət et
                </button>
            </div>
        </div>
    );
}

export default HomeAdvantage;
