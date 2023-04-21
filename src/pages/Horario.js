import React from "react";

function Horario({ dias, horas, clases }) {
  return (
    <table className="horario">
      <thead>
        <tr>
          <th></th>
          {dias.map((dia) => (
            <th key={dia}>{dia}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {horas.map((hora) => (
          <tr key={hora}>
            <th>{hora}</th>
            {dias.map((dia) => (
              <td key={`${dia}-${hora}`}>
                {clases[dia][hora] && clases[dia][hora].nombre}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Horario;