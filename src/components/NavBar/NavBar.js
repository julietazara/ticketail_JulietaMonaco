import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/logo.png';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="" height="150" className="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <Link to='/' className="nav-link active">Inicio</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to='/' className="nav-link">Contacto</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to='/' className="nav-link">Nosotros</Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tickets
                                </p>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/category/Musica' className="dropdown-item">Musica</Link></li>
                                    <li><Link to='/category/Evento' className="dropdown-item">Ultimos eventos</Link></li>
                                    <li><Link to='/category/Teatro' className="dropdown-item">Teatros</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}