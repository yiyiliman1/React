import { ReactNode } from "react"
import styled from "styled-components";

const Btn = styled.button` 
    color: peru;
    padding: 25px 30px;
`;
 /* El codigo se meete aqui */

/* escribiendo tsrfce sale una estructura default */

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick: () => void;
}

function Button({ children, isLoading, onClick }: Props) {
    // const className = [`btn btn-${isLoading ? 'secondary' : 'primary'}`, styles.button].join(" ") esta es otra forma de hacer, convertirlo en una  variable
    return (
        <Btn onClick={onClick} disabled={isLoading}
            type="button"
            // className={[styles.button, styles.padded].join(' ')} /* Se usa .join(' ') para convertir un array de clases en un string válido para className, asegurando que las clases se separen correctamente con espacios. */
            className={[`btn btn-${isLoading ? 'secondary' : 'primary'}`, styled.button].join(" ")}>
            {/* className{className} si es true queremos el texto de secundary, sino el de primary */}
          {isLoading ? 'Cargando.. ' : children} {/* pregunta si esta cargando */}
      </Btn>
  )
}

export default Button