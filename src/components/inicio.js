import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'

import inicio from './styles/inicio.css'

function Inicio() {
    return(
                <div className="conten">
                    <div id="content">
                        <h2>Hola, Me llamo Santiago</h2>
                        <p>Soy FrontEnd Developer JR. Actualmente Manejo Tecnologías Como JavaScript, ReactJS, Html, Css, Bootstrap, Sass.</p>
                        <p>Me gusta todo lo que este relacionado con la tecnologia, Y Aprender aún más.</p>
                    </div>
                </div>
    );
}

export default Inicio;