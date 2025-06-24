import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='bg-header'>
        <h1>Del'Ink Studio</h1>
        <h2>Vos histoires, gravées à l'encre noire</h2>
       <a href="/"><img src="./logo-studio.png" alt="logo du studio"  className='logo'/> </a> 
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
        <li><NavLink to="/galerie" className={({ isActive }) => isActive ? 'active' : ''}>Galerie</NavLink></li>
        <li><NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''}>Prise de rendez-vous</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
