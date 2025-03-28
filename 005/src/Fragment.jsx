const string = "texto";
const number = 123;
const array = ["mimi", 123];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Hola mnundo" }; /* Los objetos no se pueden pasar */
const fecha = new Date(); /* Las fechas no se pueden pasar */

// Declarar variables

export const PrimerFragment = () => {
  return (
    <div>
      <div>{string}</div> /* no pasa nada si no pnes espacios */
      <div>{array}</div>
      <div>{number}</div>
    </div>
  );
};

// Alt + Shitf + F para ordenar codigo
