import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/logo.png';
import './navBar.css';

export const NavBar = () => {
    return (
        <div className="background">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="" height="100" className="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item mx-2 my-auto">
                                <Link to='/' className="nav-link active"><h4>Inicio</h4></Link>
                            </li>
                            <li className="nav-item mx-2 my-auto">
                                <Link to='/' className="nav-link"><h4>Contacto</h4></Link>
                            </li>
                            <li className="nav-item mx-2 my-auto">
                                <Link to='/' className="nav-link"><h4>Nosotros</h4></Link>
                            </li>
                            <li className="nav-item dropdown mx-2 my-auto ">
                                <p className="nav-link dropdown-toggle my-auto" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h4 className="d-inline-block">Tickets</h4>
                                </p>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/category/Musica' className="dropdown-item">Musica</Link></li>
                                    <li><Link to='/category/Evento' className="dropdown-item">Ultimos eventos</Link></li>
                                    <li><Link to='/category/Teatro' className="dropdown-item">Teatros</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2 my-auto">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}