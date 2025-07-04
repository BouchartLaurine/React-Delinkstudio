import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./page/Home.jsx";

describe("Page Home", () => {
  test("affiche les images avec les bons alt", () => {
    render(<Home />);
    expect(screen.getByAltText("image du tatoueur")).toBeInTheDocument();
    expect(
      screen.getByAltText("Photo du salon de tatouage"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("logo linkedin")).toBeInTheDocument();
    expect(screen.getByAltText("logo instagram")).toBeInTheDocument();
    expect(screen.getByAltText("logo facebook")).toBeInTheDocument();
  });

  test("affiche les paragraphes avec les bons textes", () => {
    render(<Home />);
    expect(screen.getByText(/Passionné par les détails/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Del’Ink Studio est un salon/i),
    ).toBeInTheDocument();
  });

  test("affiche le titre Mes réseaux", () => {
    render(<Home />);
    expect(screen.getByText("Mes réseaux :")).toBeInTheDocument();
  });
});
