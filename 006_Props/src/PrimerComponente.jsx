import PropTypes from "prop-types";

const PrimerComponente = ({ titulo, subtitulo }) =>
  // Es importante poner las props entre comillas
  {
    return (
      <>
        <h1>{titulo}</h1>
        <h1>{subtitulo}</h1> {/* no pasa nada si no pnes espacios */}
      </>
    );
  };

// Las Props son propiedades que pasan de padre a hijo

// Otra forma de ponerlo
PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};
// Este caso, es necesario pasarle el dato que pide (string)
// No me funcioana porque no tenia Proptype instalado
PrimerComponente.defaultProps = {
  titulo: "Ya basta",
  subtitulo: "Yamete",
};// no funciona 

// Notas: Para que funcione por default tiene que quitarle las llaves en el main.
// y poner la exportacion por default

export default PrimerComponente;
