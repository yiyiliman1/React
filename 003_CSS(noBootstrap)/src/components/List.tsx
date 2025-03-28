import { useState } from "react";

type Props = {
    data: string[];
    onSelect?: (elemento: string) => void;
};

function List({data, onSelect}: Props) {
    const [index, setindex] = useState(1); 
    const handleClick = (i: number, elemento: string) => {

        setindex(i)
        onSelect?.(elemento) /* si esta definido puede ejecutase */
    }; 
    return <ul className="list-group">
        {data.map((elemento, i) =>(
            <li onClick={() => handleClick(i, elemento)} /* funcion */
            key={elemento}
            className={`list-group-item ${index == i ? 'active': ""}`}>{elemento}
            </li>
        ))}       
  </ul>

}

export default List;