import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function Card(props: Props) {
    const {children} = props;
    return <div className="card" style={{width: "350px"}}> {/* Estilos  */}
        <div className="card-body">{children}</div>
    </div>
}

interface CardBodyProps {
    title: string
    text?: string /* ? signififca opcional */
}
export function CardBody(props: CardBodyProps) {
    const {title, text} = props;
    return <> {/* fragmentacion */}
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            </div>
        </div>
    </>    
}
export default Card;