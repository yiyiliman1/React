import { ReactNode } from "react"
import styles from "./Button.module.css";

/* escribiendo tsrfce sale una estructura default */

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick: () => void;
}

function Button({ children, isLoading, onClick }: Props) {
    // const className = [`btn btn-${isLoading ? 'secondary' : 'primary'}`, styles.button].join(" ") esta es otra forma de hacer, convertirlo en una  variable
    return (
        <button onClick={onClick} disabled={isLoading}
            type="button"
            // className={[styles.button, styles.padded].join(' ')} /* Se usa .join(' ') para convertir un array de clases en un string válido para className, asegurando que las clases se separen correctamente con espacios. */
            className={[`btn btn-${isLoading ? 'secondary' : 'primary'}`, styles.button].join(" ")}>
            {/* className{className} si es true queremos el texto de secundary, sino el de primary */}
          {isLoading ? 'Cargando.. ' : children} {/* pregunta si esta cargando */}
      </button>
  )
}

export default Button