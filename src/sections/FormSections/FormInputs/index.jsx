import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

import frame from '/src/assets/Frame50.png';
import frame2 from '/src/assets/Frame50Blue.png';
import image from '/src/assets/2e3a97a1912299a934a643055768d2db1138202b.png';
import back from "/src/assets/Circles.png";

import { usePostFormsMutation } from '../../../services/userApi.jsx';
import showToast from "../../../components/ToastMessage.js";

function FormInput() {
    const [postForms] = usePostFormsMutation();
    const [fullName, setFullName] = useState('');
    const [classNumber, setGrade] = useState('');
    const [phoneNumber, setContactNumber] = useState('');
    const [parentFullName, setParentName] = useState('');
    const [parentPhoneNumber, setParentContact] = useState('');

    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const clearForm = () => {
        setFullName('');
        setGrade('');
        setContactNumber('');
        setParentName('');
        setParentContact('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('fullName', fullName);
        data.append('classNumber', classNumber);
        data.append('phoneNumber', phoneNumber);
        data.append('parentFullName', parentFullName);
        data.append('parentPhoneNumber', parentPhoneNumber);

        try {
            await postForms(data).unwrap();
            showToast("Müraciət uğurlu oldu", "success");
            clearForm();
        } catch (err) {
            console.error(err);
            showToast("Müraciət uğursuz oldu", "error");
        }
    };

    return (
        <div id="form-input">
            <div className="container">
                <form
                    className="form-input"
                    onSubmit={handleSubmit}
                    data-aos="fade-right"
                >
                    <div className="form-group">
                        <div className="forms" data-aos="fade-up" data-aos-delay="100">
                            <div className="frame"><img src={frame} alt="frame" /></div>
                            <label>Ad, Soyad <span>*</span></label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms" data-aos="fade-up" data-aos-delay="200">
                            <div className="frame2"><img src={frame2} alt="frame blue" /></div>
                            <label>Neçənci sinifdə təhsil alırsınız? <span>*</span></label>
                            <input
                                type="text"
                                value={classNumber}
                                onChange={e => setGrade(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms" data-aos="fade-up" data-aos-delay="300">
                            <div className="frame"><img src={frame} alt="frame" /></div>
                            <label>Əlaqə nömrəniz <span>*</span></label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={e => setContactNumber(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms" data-aos="fade-up" data-aos-delay="400">
                            <div className="frame2"><img src={frame2} alt="frame blue" /></div>
                            <label>Valideynin adı və soyadı <span>*</span></label>
                            <input
                                type="text"
                                value={parentFullName}
                                onChange={e => setParentName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms" data-aos="fade-up" data-aos-delay="500">
                            <div className="frame"><img src={frame} alt="frame" /></div>
                            <label>Valideynin əlaqə nömrəsi <span>*</span></label>
                            <input
                                type="tel"
                                value={parentPhoneNumber}
                                onChange={e => setParentContact(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div
                        className="buttons"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <button
                            type="button"
                            className="clear"
                            onClick={clearForm}
                        >
                            Formu təmizləyin
                        </button>
                        <button
                            type="submit"
                            className="submit"
                        >
                            Təqdim edin
                        </button>
                    </div>
                </form>

                <div
                    className="row"
                    data-aos="fade-left"
                    data-aos-delay="300"
                >
                    <div className="col-2 col-md-12">
                        <div className="image">
                            <h2>Təhsildə Zəmanət, Gələcəkdə Uğur!</h2>
                            <img src={image} alt="decoration" />
                        </div>
                    </div>
                    <div className="col-9 col-md-12">
                        <div className="content">
                            <h2>Təhsildə Zəmanət, Gələcəkdə Uğur!</h2>
                            <p>
                                Victory Colleges sizə yalnız dərs keçmir – biz gələcəyinizin uğurla formalaşması üçün zəmanət veririk.
                                Keyfiyyətli təhsil sistemi, hər bir şagirdə uyğunlaşdırılmış fərdi yanaşma və müasir pedaqoji
                                metodlarla tələbələrimizin akademik və şəxsi inkişafını təmin edirik. Bizim məqsədimiz yalnız yüksək
                                nəticə deyil, həm də sabaha inamla addımlayan, özünə güvənən fərdlər yetişdirməkdir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="back"
                data-aos="fade-in"
                data-aos-delay="700"
            >
                <img src={back} alt="background circles" />
            </div>
        </div>
    );
}

export default FormInput;
