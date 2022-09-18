import React from 'react';
import Logo from "../../assets/images/logo/logo.jpg";
import Carrito from "../../assets/images/Carrito.png"
import "./NavBar.css";
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="Logo" src={Logo} alt="logo Empresa"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Guitarras</a></li>
                                <li><a className="dropdown-item" href="#">Bajos</a></li>
                                <li><a className="dropdown-item" href="#">Baterias</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Carrito</a><img className="Carrito" src={Carrito} alt="logo Carrito"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;