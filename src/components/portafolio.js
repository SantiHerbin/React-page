import React, {ReactDOM} from 'react';
import { render } from '@testing-library/react';

import portafolio from './styles/portafolio.css';
import tsp from '../images/tsprogramacion.PNG';

function Portafolio() {
    return(
            <div className="contain">
                <div className="content">
                    <div className="column">
                        <div className="col-sm">
                            <img src={tsp} width="50px" height="40px" alt=""/>
                            <h3>TSProgramacion</h3>
                            <p>Todo bien</p>
                        </div>
                        <div className="col-sm">
                            <img src="" alt=""/>
                            <p>Hola que tal!!</p>
                        </div>
                        <div className="col-sm">
                            <img src="" alt=""/>
                            <p>Hola que tal!!</p>
                        </div>
                </div>
                </div>
            </div>
    );
}

export default Portafolio;