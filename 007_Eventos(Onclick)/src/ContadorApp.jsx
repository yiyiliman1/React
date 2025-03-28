import React from "react";

function handleClick(value) {
    value += 1
}
// comando rafc
export const ContadorApp = ({ value }) => {
  return (
    <>
          <h1>Contador</h1>
          <p>{value}</p>
          <button onClick={{} => handleClick{ value }}>Pulsame</button>
    </>
  );
};
