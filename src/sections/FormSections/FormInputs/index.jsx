import { useState } from 'react';
import './index.scss';
import frame from '/src/assets/Frame50.png';
import frame2 from '/src/assets/Frame50Blue.png';
import image from '/src/assets/2e3a97a1912299a934a643055768d2db1138202b.png';
import { usePostFormsMutation } from '../../../services/userApi.jsx';
import showToast from "../../../components/ToastMessage.js";
import back from "/src/assets/Circles.png"
function FormInput() {
    const [postForms] = usePostFormsMutation();

    // form fields state
    const [fullName, setFullName] = useState('');
    const [classNumber, setGrade] = useState('');
    const [phoneNumber, setContactNumber] = useState('');
    const [parentFullName, setParentName] = useState('');
    const [parentPhoneNumber, setParentContact] = useState('');

    // clear all inputs
    const clearForm = () => {
        setFullName('');
        setGrade('');
        setContactNumber('');
        setParentName('');
        setParentContact('');
    };

    // submit as FormData
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('fullName', fullName);
        data.append('classNumber', classNumber);
        data.append('phoneNumber', phoneNumber);
        data.append('parentFullName', parentFullName);
        data.append('parentPhoneNumber', parentPhoneNumber);

        try {
            await postForms(data).unwrap();
            showToast("Müraciət uğurlu oldu","success")
            clearForm();
        } catch (err) {
            console.error('Submission error:', err);
            showToast("Müraciət uğursuz oldu","error")
        }
    };

    return (
        <div id="form-input">
            <div className="container">
                <form className="form-input" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="forms">
                            <div className="frame">
                                <img src={frame} alt="frame" />
                            </div>
                            <label>
                                Ad, Soyad <span>*</span>
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms">
                            <div className="frame2">
                                <img src={frame2} alt="frame blue" />
                            </div>
                            <label>
                                Neçənci sinifdə təhsil alırsınız? <span>*</span>
                            </label>
                            <input
                                type="text"
                                value={classNumber}
                                onChange={e => setGrade(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms">
                            <div className="frame">
                                <img src={frame} alt="frame" />
                            </div>
                            <label>
                                Əlaqə nömrəniz <span>*</span>
                            </label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={e => setContactNumber(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms">
                            <div className="frame2">
                                <img src={frame2} alt="frame blue" />
                            </div>
                            <label>
                                Valideynin adı və soyadı <span>*</span>
                            </label>
                            <input
                                type="text"
                                value={parentFullName}
                                onChange={e => setParentName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forms">
                            <div className="frame">
                                <img src={frame} alt="frame" />
                            </div>
                            <label>
                                Valideynin əlaqə nömrəsi <span>*</span>
                            </label>
                            <input
                                type="tel"
                                value={parentPhoneNumber}
                                onChange={e => setParentContact(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" className="clear" onClick={clearForm}>
                            Formu təmizləyin
                        </button>
                        <button type="submit" className="submit">
                            Təqdim edin
                        </button>
                    </div>
                </form>

                <div className="row">
                    <div className="col-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="image">
                            <h2>Təhsildə Zəmanət, Gələcəkdə Uğur!</h2>
                            <img src={image} alt="decoration" />
                        </div>
                    </div>
                    <div className="col-9 col-md-12 col-sm-12 col-xs-12">
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
            <div className={"back"}>
                <img src={back}/>
            </div>
        </div>
    );
}

export default FormInput;
