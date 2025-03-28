const string = "texto";
const number = 123;
const array = ["mimi", 123];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Hola mnundo" }; /* Los objetos no se pueden pasar */
const fecha = new Date(); /* Las fechas no se pueden pasar */

// Declarar variables

export const PrimerComponente = () => {
  return <div>{string}</div> /* no pasa nada si no pnes espacios */;
};

// export const PrimerComponente = () => {
//     return (
//         <div>PrimerComponente</div>
//         <div>{ string }</div>
//     )
// }

// Cuando intentas devolver dos elementos < div > directamente uno al lado del otro, estás violando esta regla.
// React no sabe cómo manejar múltiples elementos raíz en el DOM.

/* export const PrimerComponente = () => {
    return (
        <div>{ funcion() }</div>  no pasa nada si no pnes espacios 
 )
} */

// const funcion = () => 1 + 1
// Solo funciona si pones los parentesis
