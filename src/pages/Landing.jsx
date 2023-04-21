import { Link } from 'react-router-dom'
import '../styles/Landing.css'

const Landing =()=>{
    return(
        <div>
            <img width="100%" height='100%' src='https://firebasestorage.googleapis.com/v0/b/ghostgym-f8921.appspot.com/o/pexels-photo-1954524.webp?alt=media&token=0bb61692-7eab-49b7-b05b-652bd6dd9973' />
            <br/><br/>
            <div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Membresia Plata</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$100<small class="text-muted fw-light">/semana</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Acceso a instructores</li>
              <li>Acceso a Horarios</li>
              <li>Acceso a Rutinas</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary"><Link to="/uno" >Comprar</Link></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Membresia Oro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$400<small class="text-muted fw-light">/mes</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            <li>Acceso a instructores</li>
              <li>Acceso a Horarios</li>
              <li>Acceso a Rutinas</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary"><Link to="/dos" >Comprar</Link></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Membresia Platino</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$1000<small class="text-muted fw-light">/año</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            <li>Acceso a instructores</li>
              <li>Acceso a Horarios</li>
              <li>Acceso a Rutinas</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary"><Link to="/tres" >Comprar</Link></button>
          </div>
        </div>
      </div>

    </div>
    
            </div>


        </div>
       
    )
}
export default Landing