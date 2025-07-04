import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Galerie from "./page/Galerie.jsx";

describe("Page Galerie", () => {
  test("affiche le titre principal", () => {
    render(<Galerie />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Découvrez une sélection de créations uniques, réalisées avec soin dans un style réaliste noir et gris, inspiré par la nature et les émotions.",
    );
  });

  test("affiche toutes les images avec les bons attributs alt", () => {
    render(<Galerie />);

    // Vérifie la présence des images avec leur alt
    expect(screen.getAllByAltText("tatouage portrait").length).toBe(2); // il y a 2 "tatouage portrait"
    expect(screen.getAllByAltText("tatouage de fleurs").length).toBe(2);
    expect(screen.getByAltText("tatouage léopard")).toBeInTheDocument();
  });

  test("vérifie la structure de la galerie", () => {
    render(<Galerie />);
    expect(screen.getByRole("list")).toBeInTheDocument(); // vérifie qu'il y a une liste <ul>
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(5); // 4 images dans la liste + 1 image dans galerie2
  });
});
