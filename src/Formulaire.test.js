import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Formulaire from "./page/Formulaire";

describe("Page Formulaire", () => {
  test("affiche tous les champs avec leurs labels", () => {
    render(<Formulaire />);
    expect(screen.getByLabelText(/Nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Téléphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date souhaitée/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Heure souhaitée/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type de tatouage/i)).toBeInTheDocument();
  });

  test("permet de remplir les champs et soumettre le formulaire", () => {
    render(<Formulaire />);

    fireEvent.change(screen.getByLabelText(/Nom complet/i), {
      target: { value: "Jean Dupont" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "jean@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Téléphone/i), {
      target: { value: "0123456789" },
    });
    fireEvent.change(screen.getByLabelText(/Date souhaitée/i), {
      target: { value: "2025-07-10" },
    });
    fireEvent.change(screen.getByLabelText(/Heure souhaitée/i), {
      target: { value: "14:00" },
    });
    fireEvent.change(screen.getByLabelText(/Type de tatouage/i), {
      target: { value: "portrait" },
    });

    // Mock console.log
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    fireEvent.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(consoleLogSpy).toHaveBeenCalledWith("Formulaire de rdv soumis :", {
      firstname: "Jean Dupont",
      email: "jean@example.com",
      phone: "0123456789",
      date: "2025-07-10",
      time: "14:00",
      tattooType: "portrait",
    });

    consoleLogSpy.mockRestore();
  });
});
