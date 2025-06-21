import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='bg-header' >
        <h1>Del'Ink Studio</h1>
        <h2>Vos histoires, gravées à l'encre noire</h2>
      </div>
      <div className="navbar-logo"></div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/galerie">Galerie</Link></li>
        <li><Link to="/form">Prise de rendez-vous</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
