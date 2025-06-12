// TestimonialSlider.jsx
import{useState, useEffect, useRef} from 'react';
import './index.scss';
import image from "/src/assets/aea4cffa4597b4e10ba34611af39b83d5ade2c32.jpg";

const testimonials = [
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'anar M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'ilqar M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'zakir M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },
    {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    }, {
        name: 'Aytac M',
        country: 'Azərbaycan',
        img: image,
        text: `Victory Colleges-də SAT hazırlığına başladıqdan sonra həm düşüncə tərzim,
           həm də test strategiyalarım tamamilə dəyişdi. Müəllimlərin yanaşması fərdi idi
           və zəif tərəflərim üzərində xüsusi işlədilər. Nəticədə 1400+ bal topladım!.`
    },


    /* …add as many as you need… (at least 10 for the full arc) */
];

export default function TestimonialSlider() {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const timer = useRef(null);

    // Her 10 saniyede bir otomatik geçiş
    useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            const next = (active + 1) % testimonials.length;
            setActive(next);
            setAnimKey(k => k + 1);
        }, 10000);
        return () => clearTimeout(timer.current);
    }, [active]);

    const go = i => {
        clearTimeout(timer.current);
        setActive(i);
        setAnimKey(k => k + 1);
    };

    return (
        <section className="testimonial-slider">
            <h2 className="slider-title">Tələbələrimiz Nə Deyir</h2>
            <p className="slider-sub">
                Xidmətimizin Səviyyəsi Və Təqdim Etdiyimiz Keyfiyyət Barədə Real Müştəri Rəyləri
            </p>

            <div className="avatars-arc">
                {testimonials.map((t, i) => {
                    const angle = (i - active) * 20; // İki avatar arası açıyı ayarla
                    const radius = 400;              // Yarıçap (px)
                    return (
                        <div
                            key={i}
                            className={`avatar-item ${i === active ? 'active' : ''}`}
                            style={{
                                transform: `
                   rotate(${angle}deg)
 translateY(${radius}px)
                  rotate(${-angle}deg)
                `
                            }}
                            onClick={() => go(i)}
                        >
                            <img src={t.img} alt={t.name}/>
                            {i === active && (
                                <svg key={animKey} className="progress-ring" viewBox="0 0 100 100">
                                    <circle className="ring" cx="50" cy="50" r="45"/>

                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="testimonial-card">

                <div className="card-content">
                    <div className={"card-head"}>
                        <div className={"image-name"}>
                            <img src={testimonials[active].img} alt={testimonials[active].name} />
                            <div>
                                <h3>{testimonials[active].name}</h3>
                                <span className="country">{testimonials[active].country}</span>
                            </div>
                        </div>
                        <div className={"buttons-nav"}>
                            <button className="nav prev"
                                    onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M5.74225 11.1797L10.265 6.65696C10.35 6.57203 10.4651 6.52432 10.5852 6.52432C10.7053 6.52432 10.8205 6.57203 10.9055 6.65696C10.9904 6.74188 11.0381 6.85707 11.0381 6.97717C11.0381 7.09727 10.9904 7.21246 10.9055 7.29738L7.15426 11.0477L16.9171 11.0477C17.0371 11.0477 17.1521 11.0953 17.237 11.1801C17.3218 11.265 17.3694 11.38 17.3694 11.5C17.3694 11.6199 17.3218 11.7349 17.237 11.8198C17.1521 11.9046 17.0371 11.9522 16.9171 11.9522L7.15426 11.9522L10.9055 15.7025C10.9904 15.7874 11.0381 15.9026 11.0381 16.0227C11.0381 16.1428 10.9904 16.258 10.9055 16.3429C10.8205 16.4279 10.7053 16.4756 10.5852 16.4756C10.4651 16.4756 10.35 16.4279 10.265 16.3429L5.74225 11.8202C5.70013 11.7782 5.66671 11.7282 5.64391 11.6733C5.62111 11.6183 5.60937 11.5594 5.60937 11.5C5.60937 11.4405 5.62111 11.3816 5.64391 11.3266C5.66671 11.2717 5.70013 11.2218 5.74225 11.1797Z" fill="black"/>
                                </svg>
                            </button>
                            <button className="nav next" onClick={() => go((active + 1) % testimonials.length)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path d="M16.6564 11.8198L12.1336 16.3426C12.0487 16.4275 11.9335 16.4752 11.8134 16.4752C11.6933 16.4752 11.5781 16.4275 11.4932 16.3426C11.4083 16.2576 11.3606 16.1424 11.3606 16.0223C11.3606 15.9022 11.4083 15.7871 11.4932 15.7021L15.2444 11.9518L5.48154 11.9518C5.36159 11.9518 5.24655 11.9042 5.16173 11.8194C5.07691 11.7345 5.02926 11.6195 5.02926 11.4996C5.02926 11.3796 5.07691 11.2646 5.16173 11.1797C5.24655 11.0949 5.36159 11.0473 5.48154 11.0473L15.2444 11.0473L11.4932 7.29699C11.4083 7.21206 11.3606 7.09688 11.3606 6.97678C11.3606 6.85667 11.4083 6.74149 11.4932 6.65656C11.5781 6.57164 11.6933 6.52393 11.8134 6.52393C11.9335 6.52393 12.0487 6.57164 12.1336 6.65656L16.6564 11.1793C16.6986 11.2214 16.732 11.2713 16.7548 11.3262C16.7776 11.3812 16.7893 11.4401 16.7893 11.4996C16.7893 11.559 16.7776 11.618 16.7548 11.6729C16.732 11.7278 16.6986 11.7778 16.6564 11.8198Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p className="text">{testimonials[active].text}</p>
                </div>

            </div>
        </section>
    );
}
