import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContadorApp } from "./ContadorApp";
import "./Styles.css";

// Las llaves { } se utilizan para importar "exportaciones con nombre"(named exports) en JavaScript.
// Esto significa que estás importando específicamente un valor(en este caso, el componente PrimerComponente),
// que ha sido exportado con un nombre específico.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>
);

// Tenia un error: npm error Missing script: "dev".
// El problema es que no estaba lanzandolo desde la terminar del del proyecto
