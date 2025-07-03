import React from 'react';
const Home = () => {
  return (
    <main>
      <div className="home-container">
     <div className="tatoueur">
       <img src="/tatoueur.jpg" alt="image du tatoueur" />
       <p>Passionné par les détails et l’émotion que transmet un tatouage. Lucas compose des pièces mêlant finesse florale et puissance animale. Son style, à la fois doux et expressif, reflète un vrai savoir-faire dans le réalisme en noir et gris.</p>
       <div className="social-links">
           <h4 className="title" >Mes réseaux :</h4>
         <ul className="social-list">
           <li><a href="#"><img src="/logo-linkedin.png" alt="logo linkedin" /></a></li>
           <li><a href="#"><img src="/logo-instagram.png" alt="logo instagram" /></a></li>
            <li><a href="#"><img src="/logo-facebook.png" alt="logo facebook" /></a></li>
           </ul>
        </div>
     </div>
     <div className="salon">
      <img src="/salon.jpg" alt="Photo du salon de tatouage" />
      <p>Del’Ink Studio est un salon de tatouage artistique situé au cœur de Lens. Spécialisé en réalisme noir et gris, motifs floraux et animaliers, il offre un cadre sobre et apaisant, propice à la création sur mesure. Chaque projet est réalisé avec précision, dans le respect des normes d’hygiène les plus strictes.</p>

     </div>
     </div>
    </main>
  );
};

export default Home;