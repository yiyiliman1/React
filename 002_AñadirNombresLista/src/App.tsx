import Card, { CardBody } from './components/Card';
import Button from "./components/Button"; /* estaba importando mal porque button estaba en minuscula */
import List from './components/List';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(["mimi", "shishi", "chichi"]);
  const addMinion = () => setData([...data, 'Lili']); /* ...data (spread operator) copia todos los elementos actuales de data. */
  const delMinion = () => setData(data.slice(0, -1)); /* Esta función elimina el último elemento del array  */

  return < Card > {/*no me salia la pagina porque no estaba colocado <Card> aqui */}
    <Button onClick={addMinion}>Agregar
    </Button>
    <Button onClick={delMinion}>Eliminar
      </Button>
    <List data={data}>
      </List>
  </Card>
}

export default App; /* Importante Exportarlo */