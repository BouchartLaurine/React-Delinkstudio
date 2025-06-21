import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <nav className="Footer">
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

export default Footer;
