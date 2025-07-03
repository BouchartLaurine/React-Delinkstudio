import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './page/Faq';

describe('Composant FAQ', () => {
  test('affiche toutes les questions', () => {
    render(<FAQ />);
    // Vérifie que toutes les questions sont présentes
    expect(screen.getByText(/Est-ce que ça fait mal ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Quels soins après un tatouage ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Faut-il un acompte ?/i)).toBeInTheDocument();
    expect(screen.getByText(/Est-ce que les mineurs peuvent se faire tatouer ?/i)).toBeInTheDocument();
    // Ajoute autant que tu veux
  });

  test('affiche la réponse quand on clique sur une question et la masque quand on reclique', () => {
    render(<FAQ />);
    const question = screen.getByText(/Est-ce que ça fait mal ?/i);

    // Au départ, la réponse n’est pas visible
    expect(screen.queryByText(/Le ressenti de la douleur varie/i)).not.toBeInTheDocument();

    // Clique sur la question — la réponse doit apparaître
    fireEvent.click(question);
    expect(screen.getByText(/Le ressenti de la douleur varie/i)).toBeInTheDocument();

    // Clique à nouveau — la réponse doit disparaître
    fireEvent.click(question);
    expect(screen.queryByText(/Le ressenti de la douleur varie/i)).not.toBeInTheDocument();
  });
});
