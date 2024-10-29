//Definición del componente NavBar

import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import {Link } from "react-router-dom";
import logo from "/img/logo-2.jpg";

const NavBar = () => {
  return (
    <nav className="navbar">

      <Link to ="/" className="brand-link">
       <div className="brand">
        <img src={logo} alt="Logo" className="logo" /> 
        <h2>Shop Mountain Outdoor</h2>
      </div>
      </Link>

      <ul className="categories">
        <li className="category">
          <Link to="/" >Inicio</Link>
        </li>
        <li className="category">
          <Link to="/category/Indumentaria" >Indumentaria</Link>
        </li>
        <li className="category">
          <Link to="/category/Calzado">Calzado</Link>
        </li>
        <li className="category">
          <Link to="/category/Camping">Camping</Link>
        </li>
        <li className="category">
          <Link to="/category/Escalada">Escalada</Link>
        </li>
        <li className="category">
          <Link to="/category/Mochilas y Bolsos">Mochilas y Bolsos </Link>
        </li>
        <li className="category">
          <Link to="/category/Contacto">Contacto</Link>
        </li>
      </ul>

     


      <CartWidget />
    </nav>
  );
};

export default NavBar;
