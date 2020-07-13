import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'

import navegacion from './styles/navegacion.css'
import navLogo from './images/icon.svg'


function Navegacion() {
    return(
        <div class="navegacion">
                <img src={navLogo} height="60px" width="60px" alt=""/>
            <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Contáctanos</a></li>
                        <li><a href="">Ayuda</a></li>
                    </ul>
            </nav>  
        </div>    
    );
}

export default Navegacion;