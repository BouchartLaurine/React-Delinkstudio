import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './page/Contact'; 

describe('Composant Contact', () => {
  test('affiche les champs du formulaire et permet de le soumettre', () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Contact />);

    // Vérifie que les champs existent
    const nameInput = screen.getByLabelText(/Nom complet/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Description du projet/i);
    const submitButton = screen.getByRole('button', { name: /envoyer/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Remplit les champs
    fireEvent.change(nameInput, { target: { value: 'Jean Dupont' } });
    fireEvent.change(emailInput, { target: { value: 'jean@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Je veux un tatouage fleur.' } });

    // Soumet le formulaire
    fireEvent.click(submitButton);

    // Vérifie que console.log a bien été appelé avec les bonnes données
    expect(consoleLogSpy).toHaveBeenCalledWith('Formulaire soumis :', {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      message: 'Je veux un tatouage fleur.'
    });

    consoleLogSpy.mockRestore();
  });
});
