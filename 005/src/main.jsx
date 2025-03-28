import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente";
import { PrimerFragment } from "./Fragment";

// Las llaves { } se utilizan para importar "exportaciones con nombre"(named exports) en JavaScript.
// Esto significa que estás importando específicamente un valor(en este caso, el componente PrimerComponente),
// que ha sido exportado con un nombre específico.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimerComponente />
    <PrimerFragment />
  </StrictMode>
);

// Tenia un error: npm error Missing script: "dev".
// El problema es que no estaba lanzandolo desde la terminar del del proyecto
