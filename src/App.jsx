import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/index.scss";

import Navbar from "./components/Navbar";
import Contact from "./page/Contact";
import Formulaire from "./page/Formulaire";
import Galerie from "./page/Galerie";
import Home from "./page/Home";


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/galerie" element={<Galerie/>} />
      <Route path="/form" element={<Formulaire/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
  )
}


export default App;