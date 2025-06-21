import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/formulaire">Formulaire</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
