import './index.scss'
import { NavLink, useLocation } from "react-router-dom";
import {RiContactsBook2Fill} from "react-icons/ri";

function AdminLeftBar() {
    const location = useLocation();

    return (
        <section id="adminLeftBar">
            <li className={location.pathname === "/admin/contact" ? "selected" : ""}>
                <RiContactsBook2Fill className="icon" />
                <NavLink to="/admin/contact">
                    Müraciət
                </NavLink>
            </li>
        </section>
    );
}

export default AdminLeftBar;
