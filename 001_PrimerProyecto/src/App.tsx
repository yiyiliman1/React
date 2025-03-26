import Titulo from './Titulo';

function App() {
  /* Todas las aplicaciones de React necesitan una funcion llamado App */
  //return <p>Hola mundo</p>; /* Esto es codigo JSX, es parecido a html. Despues con React.createElement se pasa a html*/

  /* const nombre = "Hola Mundo"
  return <p>Hola {nombre}</p>; */

  return <Titulo></Titulo>
}

export default App; /* Importante Exportarlo */