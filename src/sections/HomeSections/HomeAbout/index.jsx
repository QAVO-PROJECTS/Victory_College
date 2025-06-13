import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.scss';
import image from "/src/assets/Group13.png";
import { useNavigate } from "react-router-dom";

function HomeAbout() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,       // animation duration in ms
            once: true,          // whether animation should happen only once
            mirror: false,       // whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <div id="home-about">
            <div className="container">
                <div className="row">
                    <div
                        className="col-6 col-md-12 col-sm-12 col-xs-12"
                        data-aos="fade-right"
                    >
                        <div className="image">
                            <h3 data-aos="zoom-in">Bir Addımda Təhsil İmkanını Yaxala!</h3>
                            <img src={image} alt="Victory Colleges" data-aos="fade-up" />
                        </div>
                    </div>
                    <div
                        className="col-6 col-md-12 col-sm-12 col-xs-12"
                        data-aos="fade-left"
                    >
                        <div className="content">
                            <h3 data-aos="fade-down">Bir Addımda Təhsil İmkanını Yaxala!</h3>
                            <p data-aos="fade-up" data-aos-delay="200">
                                Victory Colleges olaraq məqsədimiz yalnız bilik vermək deyil, eyni zamanda səni
                                ilhamlandırmaq, dəstəkləmək və gələcəyini inamla qurmaq üçün gücləndirməkdir. Bu yol
                                fərdi inkişaf, əzm və yönlü dəstəklə mümkün olur – və biz bu yolculuqda sənə bələdçilik
                                etmək üçün buradayıq.
                            </p>
                            <button
                                onClick={() => navigate("/form")}
                                data-aos="flip-up"
                                data-aos-delay="400"
                            >
                                Məlumat Al
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
