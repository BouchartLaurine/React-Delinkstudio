


const Contact = () => {
  return (
   <main className="main-contact"> 
     <div className="container">
       <h1 className="txt">Vous souhaitez discuter d’une idée de tatouage ? Remplissez le formulaire ci-dessous ou contactez-nous directement via nos réseaux.</h1>
       <p className="info">Information importantes :</p>
       <div className="info-content">
         <img src="/email.png" alt="logo email" />
         <p>contact@delinkstudio.fr</p>
       </div>
       <div className="info-content">
         <img src="/mobile.png" alt="logo telephone" />
         <p>06 12 34 56 78</p>
       </div>
       <div className="info-content">
         <img src="/broche-de-localisation.png" alt="logo localisation" />
         <p>42 rue des Fusillés, 62300 Lens</p>
       </div>
       <div className="info-content">
         <img src="/horloge-murale.png" alt="logo horloge" />
         <p>Ouvert du mardi au samedi – sur rendez-vous</p>
      </div>
 
     
     </div> 
     
    </main>
  );
};

export default Contact;