import  { useState } from 'react';
import Cookies from 'js-cookie';
import './index.scss';
import {useNavigate} from "react-router-dom";
import {usePostAdminLoginMutation} from "../../../services/userApi.jsx";
import showToast from "../../../components/ToastMessage.js";
import { Eye, EyeOff } from 'lucide-react';  // ikonlar

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [postAdminLogin,{ isLoading }] = usePostAdminLoginMutation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postAdminLogin({ email, password }).unwrap();
            showToast("Giriş uğurlu oldu !","success")
            setTimeout(navigate("/admin/contact"), 2000);
            if (response?.statusCode === 200) {
                const token = response?.data?.token;
                console.log(response?.data?.token)
                const expireDate = new Date(response.data.expireDate);
                Cookies.set('victoryToken', token, {
                    expires: 1,
                });
            } else {
                Cookies.set('victoryToken', 'null');
            }
        } catch  {
            alert('Giriş zamanı xəta baş verdi:');
        }
    };

    return (
        <div className="login-panel">
            <div className="login-form">
                <div className="title">
                    <h1>Daxil ol</h1>
                    <p>Admin panelə giriş</p>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Emailinizi daxil edin"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group password-group">
                        <label>Şifrə</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Şifrənizi daxil edin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? 'Şifrəni gizlə' : 'Şifrəni göstər'}
                            >
                                {showPassword ? <EyeOff size={20} color={"black"}/> : <Eye size={20} color={"black"}/>}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Yüklənir...' : 'Daxil ol'}
                    </button>
                </form>
            </div>

            <img src={"back"} alt="" className="login-plane" />
        </div>
    );
}

export default AdminLogin;