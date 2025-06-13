import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';
import StudentCard from "../../../components/UserComponents/StudentCard";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import desktopBack     from "/src/assets/background.png";
import mobileBackDefault  from "/src/assets/mobile-default.png";
import mobileBackExpanded from "/src/assets/mobile-expanded.png";

const students = Array(8).fill(0); // replace with actual data

function HomeStudents() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
        // initialize AOS
        AOS.init({
            duration: 600,
            once: true,
        });

        const handleResize = () => {
            const mobile = window.innerWidth <= 576;
            setIsMobile(mobile);
            setVisibleCount(mobile ? 4 : students.length);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showMore = () => setVisibleCount(prev => Math.min(prev + 4, students.length));
    const showLess = () => setVisibleCount(4);

    const baseHeight = 220;
    const backHeight = isMobile
        ? `${baseHeight * (visibleCount / 4)}px`
        : 'auto';
    const backImageSrc = !isMobile
        ? desktopBack
        : visibleCount > 4
            ? mobileBackExpanded
            : mobileBackDefault;

    return (
        <div id="home-student">
            <div className="container">
                <div className="head" data-aos="fade-down">
                    <h2>Onlar Bacardı – Növbə Səndədir!</h2>
                    <div className="icon" data-aos="zoom-in" data-aos-delay="100">
                        <svg /* ... */>…</svg>
                    </div>
                </div>

                <div className="student">
                    <div className="row">
                        {students.slice(0, visibleCount).map((_, idx) => (
                            <div className={"col-3 col-md-6 col-sm-6 col-xs-6"} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <StudentCard />
                            </div>
                        ))}
                    </div>

                    {isMobile && visibleCount < students.length && (
                        <div className="button-wrap" data-aos="fade-up" data-aos-delay="400">
                            <button className="load-more" onClick={showMore}>
                                Daha çox <FaArrowDown />
                            </button>
                        </div>
                    )}
                    {isMobile && visibleCount > 4 && (
                        <div className="button-wrap" data-aos="fade-up" data-aos-delay="400">
                            <button className="load-less" onClick={showLess}>
                                Daha az <FaArrowUp />
                            </button>
                        </div>
                    )}

                    <div
                        className="back"
                        style={{ height: backHeight }}
                        data-aos="fade-in"
                        data-aos-delay="200"
                    >
                        <img src={backImageSrc} alt="background" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeStudents;
