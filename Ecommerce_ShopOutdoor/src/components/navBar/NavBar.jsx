//Definición del componente NavBar

import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>SHOP OUTDOOR</h2>
      </div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Indumentaria</li>
        <li>Calzado</li>
        <li>Camping</li>
        <li>Escalada</li>
        <li>Mochilas y Bolsos</li>
        <li>Contacto</li>

        
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
