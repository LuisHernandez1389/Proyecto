import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
function Select() {
  const [opciones, setOpciones] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    axios.get('https://retoolapi.dev/k3qZsf/Proyecto')
      .then(response => {
        setOpciones(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      const opcionSeleccionadaAlmacenada = localStorage.getItem("opcionSeleccionada");
  if (opcionSeleccionadaAlmacenada) {
    setOpcionSeleccionada(opcionSeleccionadaAlmacenada);
  }
  if (opcionSeleccionada) {
    axios.get(`https://retoolapi.dev/k3qZsf/Proyecto/${opcionSeleccionada}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  },
   [opcionSeleccionada]);

  function guardarOpcion(event) {
    const opcionSeleccionada = event.target.value;
    setOpcionSeleccionada(opcionSeleccionada);
    localStorage.setItem("opcionSeleccionada", opcionSeleccionada);
  }
  function mostrarUsuario () {
    axios.get(`https://retoolapi.dev/k3qZsf/Proyecto/${opcionSeleccionada}`).then(response => {
        
    }
    
    )
    
  }
  return (

    <div>

    <div id='container-b'>
    <select  value={opcionSeleccionada} onChange={guardarOpcion}>
      <option value="">Selecciona una opción</option>
      {opciones.map(opcion => (
        <option  value={opcion.id}>{opcion.nombre}</option>
      ))}
    </select>
    <br />
    </div>
    <br/>
    
    {usuario &&
        
        <div className="card text-center">
          <div className="card-header">
            Instructor Seleccionado
          </div>
          <div className="card-body">
            <h5 className="card-title">{usuario.nombre}</h5>
            <div id="container-b" ><img id="instructorimg"  src={usuario.photo}  /></div>
            <p className="card-text">ID: {usuario.id}</p>
            <a href="#" className="btn btn-primary">Ver detalles</a>
          </div>

        </div>
      }
    </div>

  );
}

export default Select;