import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditableTable from './Pruebas';
import Select from './Select';
function PagoM1() {
    
    const navigate = useNavigate();
    const [pagoRealizado, setPagoRealizado] = useState(localStorage.getItem('pagoRealizado') === 'true');
    const [tipoUsuario, setTipoUsuario] = useState(localStorage.getItem('tipoUsuario') === 'instructor');

  
    const onPagoExitoso = () => {
      setPagoRealizado(true);
      
    };
  
  useEffect(() => {
    window.paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-3K211737KN738873DMRA4G2A',
          
        });
      },
      
      onApprove: function(data, actions) {
        // Redirigir a la página de éxito después de que se haya aprobado el pago
        
        navigate('/dos');
        localStorage.setItem('pagoRealizado', true);
        onPagoExitoso();

      }
    }).render('#paypal-button-container');
  }, []);
  function button () {
    console.log(pagoRealizado)
  }
  function tUsuario (){
    
  }
  return (
    
    
    <div>

    {!pagoRealizado && (

    <div>
    <div class="card text-center">
  <div class="card-header">
    Pago de Membresia Plata
  </div>
  <div class="card-body">
  
      
  <div class="card mb-3">
  <br/>
  <div id='container-b' ><img id='beneficios' src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/> </div>
  <div class="card-body">
    <h5 class="card-title">Acceso a Instructores</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Ghost Gym</small></p>
  </div>
</div>

<div class="card mb-3">
  <br/>
  <div id='container-b' ><img id='beneficios' src="https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/> </div>
  <div class="card-body">
    <h5 class="card-title">Acceso a Horarios</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Ghost Gym</small></p>
  </div>
</div>
<div class="card mb-3">
  <br/>
  <div id='container-b' ><img id='beneficios' src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/> </div>
  <div class="card-body">
    <h5 class="card-title">Acceso a Rutinas</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Ghost Gym</small></p>
  </div>
</div>

  </div>


  
      </div>
    
    
    
    
<div id="paypal-button-container"></div>
    </div>
    
    
    )}
    
    {pagoRealizado && (
<div>
<div class="card text-center">
  <div class="card-header">
    Membresia Plata
  </div>
  <div class="card-body">
<div class="container-fluid">
<div class="row">
  <div class="col-md-5">
    <EditableTable/>
  </div>
  <div id="container-b" class="col-md-7 center">
  
    <Select/>
    
  </div>
</div>
</div>

</div>
</div>
</div>

)}
    </div>
  );
  
  
}

export default PagoM1;

