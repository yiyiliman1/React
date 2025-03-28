import Card, { CardBody } from './components/Card';
import Button from "./components/Button"; /* estaba importando mal porque button estaba en minuscula */
import List from './components/List';
import { useState } from 'react';

function App() {
  /* Todas las aplicaciones de React necesitan una funcion llamado App */
  //return <p>Hola mundo</p>; /* Esto es codigo JSX, es parecido a html. Despues con React.createElement se pasa a html*/

  /* const nombre = "Hola Mundo"
  return <p>Hola {nombre}</p>; */
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ['Hola', 'Buenos', 'dias']
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento)
  }
  
  return <Card>
      
      <CardBody title='Hola mundo' text='Texto'/>
      {list.length !== 0 ? (<List data={list} onSelect={handleSelect} />
    ) : ("no hay contenido")}
    <Button isLoading={isLoading} onClick={handleClick}>Hola mundo</Button>
  </Card>
}

export default App; /* Importante Exportarlo */