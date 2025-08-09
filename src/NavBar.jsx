import { Link, NavLink } from 'react-router-dom';
import './assets/css/App.css';


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm w-100 navStyle">
            <div className="container py-3">
                <Link className="navbar-brand brandNav" to="/">
                    Start Framework
                </Link>
                <button className="navbar-toggler d-lg-none shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text-white fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 gap-2">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" aria-current="page">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/protfolio" aria-current="page">protfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" aria-current="page">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
