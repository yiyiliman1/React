function Titulo() {
    /* Todas las aplicaciones de React necesitan una funcion llamado App */
    //return <p>Hola mundo</p>; /* Esto es codigo JSX, es parecido a html. Despues con React.createElement se pasa a html*/
  
    const nombre = "Hola Mundo"
    return <h1>Hola {nombre}</h1>;
  }
  
  export default Titulo; /* Importante Exportarlo */