import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 420);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 420);
      if (window.innerWidth > 420) setMenuOpen(false); // Ferme le menu si on agrandit l'écran
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="bg-header">
        <h1>Del'Ink Studio</h1>
        <h2>Vos histoires, gravées à l'encre noire</h2>
        <a href="/"><img src="./logo-studio.png" alt="logo du studio" className="logo" /></a>

        {/* Burger button */}
        <button
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Accueil</NavLink></li>
        <li><NavLink to="/galerie" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Galerie</NavLink></li>
        <li><NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Prise de rendez-vous</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Contact</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Faq</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
