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
                    const radius = 500;              // Yarıçap (px)
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
                <button className="nav prev"
                        onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}>
                    ←
                </button>
                <div className="card-content">
                    <h3>{testimonials[active].name}</h3>
                    <span className="country">{testimonials[active].country}</span>
                    <p className="text">{testimonials[active].text}</p>
                </div>
                <button className="nav next" onClick={() => go((active + 1) % testimonials.length)}>
                    →
                </button>
            </div>
        </section>
    );
}
