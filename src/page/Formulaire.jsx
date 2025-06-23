import { useState } from "react";

const Formulaire = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tattooType, setTattooType] = useState("fleurs");

  const handleSubmit = (e) => {
    e.preventDefault();
    

  };


  

  return (
    <main>
    <div className="form-rdv">
      <h2 className="form-h2" >Formulaire de prise de rendez-vous</h2>
      <form className="rdv" onSubmit={handleSubmit}>
       
        <div className="form-input">
          <label htmlFor="firstname">Nom complet :</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Entrez votre nom complet"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="phone">Téléphone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
  <label htmlFor="date">Date souhaitée :</label>
  <div className="tooltip-container">
    <input
      type="date"
      id="date"
      name="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    />
    <span className="tooltip-text">Du mardi au samedi</span>
  </div>
</div>


   <div className="form-input">
  <label htmlFor="time">Heure souhaitée :</label>
  <div className="tooltip-container">
    <input
      type="time"
      id="time"
      name="time"
      min="10:00"
      max="19:00"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
    />
    <span className="tooltip-text">Entre 10h et 19h</span>
  </div>
</div>


        <div className="form-input">
          <label htmlFor="tattooType">Type de tatouage :</label>
          <select
            id="tattooType"
            name="tattooType"
            value={tattooType}
            onChange={(e) => setTattooType(e.target.value)}
            required
          >
            <option value="fleurs">Fleurs</option>
            <option value="portrait">Portrait</option>
            <option value="animaux">Animaux</option>
          </select>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
    </main>
  );
};

export default Formulaire;
