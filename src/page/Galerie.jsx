import React from 'react';

const Galerie = () => {
  return (
    <main>
      <h1>Découvrez une sélection de créations uniques, réalisées avec soin dans un style réaliste noir et gris, inspiré par la nature et les émotions.</h1>
     <div className="galerie-container">
       <div className="galerie">
         <ul className="galerie-list">
         <li className="image-wrapper">
           <img src="./tatoo-portrait.jpg" alt="tatouage portrait" />
          </li>
          <li className="image-wrapper">
           <img src="./tatoo-fleurs.jpg" alt="tatouage de fleurs" />
          </li>
          <li className="image-wrapper">
           <img src="./tatoo-leopard.jpg" alt="tatouage léopard" />
          </li>
          <li className="image-wrapper">
           <img src="./tatoo-fleurs2.jpg" alt="tatouage de fleurs" />
          </li>
        </ul>
       </div>

        <div className="galerie2">
        <img src="./tatoo-.jpg" alt="tatouage portrait" />
        </div>
      </div>

    </main>
  );
};

export default Galerie;