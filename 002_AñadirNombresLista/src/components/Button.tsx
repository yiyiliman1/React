import { ReactNode } from "react"

/* escribiendo tsrfce sale una estructura default */

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick: () => void;
}

function Button({ children, isLoading, onClick }: Props) {
    return (
        <button onClick={onClick} disabled={isLoading}
            type="button" className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}> {/* si es true queremos el texto de secundary, sino el de primary */}
          {isLoading ? 'Cargando.. ' : children} {/* pregunta si esta cargando */}
      </button>
  )
}

export default Button