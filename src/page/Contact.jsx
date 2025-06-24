import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    // Tu peux envoyer les données vers une API ici
  };

  return (
    <main className="main-contact">
      <div className="container">
        <div className="contact-header">
          <h1 className="txt">
            Vous souhaitez discuter d’une idée de tatouage ? Remplissez le formulaire ci-dessous ou contactez-nous directement via nos réseaux.
          </h1>
         <div className="color-line"></div>
          <p className="info">Informations importantes :</p>

          <div className="info-content-c">
            <img src="/email.png" alt="logo email" />
            <p>contact@delinkstudio.fr</p>
          </div>
          <div className="info-content-c">
            <img src="/mobile.png" alt="logo téléphone" />
            <p>06 12 34 56 78</p>
          </div>
          <div className="info-content-c">
            <img src="/broche-de-localisation.png" alt="logo localisation" />
            <p>42 rue des Fusillés, 62300 Lens</p>
          </div>
          <div className="info-content-c">
            <img src="/horloge-murale.png" alt="logo horloge" />
            <p>Ouvert du mardi au samedi – sur rendez-vous</p>
          </div>
        </div>
        <div className="color-line" />

        {/* Formulaire --------------------- */}
        <div className="form-container">   
                <h2>Prenons contact</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Nom complet :</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Votre adresse email"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Description du projet :</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet, vos envies..."
                required
              />
            </div>
            <div className="button-container">
            <button type="submit" className="form-button">Envoyer</button>  </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;


