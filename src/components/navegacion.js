import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'

import navegacion from './styles/navegacion.css'


function Navegacion() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#">Santiago Herbin</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/inicio">Inicio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/portafolio">Portafolio</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navegacion;