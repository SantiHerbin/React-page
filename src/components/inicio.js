import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'

import inicio from './styles/inicio.css'

function Inicio() {
    return(
                <div className="conten">
                    <div id="center">
                        <h2>Hola, Me llamo Santiago</h2>
                        <p>Soy FrontEnd Developer JR. Actualmente Manejo Tecnologías Como JavaScript, ReactJS, Html, Css, Bootstrap, Sass.</p>
                        <p>Me gusta todo lo que este relacionado con la tecnologia, Y Aprender aún más.</p>
                        <div className="icons">
                            <a href="https://twitter.com/santeh07"><i className="fa fa-twitter"></i></a>
                            <a href="https://github.com/SantiHerbin"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/santiago-herbin-509a45185/"><i className="fa fa-linkedin"></i></a>
                        </div>
                        
                    </div>
                </div>
    );
}

export default Inicio;