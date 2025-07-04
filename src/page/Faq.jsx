import React, { useState } from "react";

const FAQ = () => {
  const questions = [
    {
      question: "Est-ce que ça fait mal ?",
      answer:
        "Le ressenti de la douleur varie selon la personne et l'emplacement du tatouage. L'artiste utilise des techniques pour minimiser la douleur.",
    },
    {
      question: "Quels soins après un tatouage ?",
      answer:
        "Il faut garder la zone propre, appliquer une pommade cicatrisante et éviter l'exposition au soleil pendant la cicatrisation.",
    },
    {
      question: "Faut-il un acompte ?",
      answer:
        "Oui, un acompte est généralement demandé pour valider la réservation du rendez-vous.",
    },
    {
      question: "Est-ce que les mineurs peuvent se faire tatouer ?",
      answer:
        "Non, le tatouage est interdit aux mineurs sans consentement parental selon la loi.",
    },
    {
      question: "Combien de temps dure une séance de tatouage ?",
      answer:
        "La durée d’une séance dépend de la taille, du détail du tatouage et de ta tolérance. En général, une séance peut durer de 30 minutes à plusieurs heures.",
    },
    {
      question:
        "Faut-il éviter l’alcool ou certains médicaments avant le tatouage ?",
      answer:
        "Oui, il est fortement conseillé d’éviter l’alcool au moins 24 heures avant le tatouage, car il fluidifie le sang et peut augmenter les saignements. Évite aussi certains médicaments comme l’aspirine ou les anti-inflammatoires qui peuvent avoir le même effet.",
    },
    {
      question: "Combien de temps dure la cicatrisation ?",
      answer:
        "La cicatrisation initiale dure environ 2 à 3 semaines, mais le tatouage peut continuer à se stabiliser pendant plusieurs mois. Pendant cette période, il est important de suivre les soins recommandés pour éviter les infections et préserver les couleurs.",
    },
    {
      question:
        "Puis-je exposer mon tatouage au soleil pendant la cicatrisation ?",
      answer:
        "Non, il est fortement déconseillé d’exposer un tatouage frais au soleil. Les rayons UV peuvent endommager la peau sensible et altérer les pigments. Protège ton tatouage avec des vêtements ou une crème solaire adaptée une fois cicatrisé.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section className="faq-section">
        <h2>FAQ (Foire aux questions)</h2>
        {questions.map(({ question, answer }, index) => (
          <div key={index} className="faq-item">
            <h3 onClick={() => toggleAnswer(index)}>
              {question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            {openIndex === index && <p>{answer}</p>}
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQ;
