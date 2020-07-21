import React, {ReactDOM} from 'react';
import { render } from '@testing-library/react';

import portafolio from './styles/portafolio.css';
import tsp from '../images/tsprogramacion.PNG';
import contacts from '../images/contactsapp.PNG';
import easyyy from '../images/easyy.PNG';

function Portafolio() {
    return(
            <div className="contain">
                <div className="content">
                    <div className="column">
                        <div className="col-sm">
                            <a href="https://santiherbin.github.io/TSProgramacionfull/index.html" target="_blank"><img src={tsp} width="50px" height="40px" alt=""/></a>
                            <div className="text">
                                <h3>TSProgramacion</h3>
                                <p>Este proyecto se basa en una web de ayuda para iniciantes en la programacion, Que no estan desididos como empezar. Hecha en vanilla</p>
                                <a href="https://github.com/SantiHerbin/TSProgramacionfull">Repositorio en GitHub</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <a href="https://github.com/SantiHerbin/App-Contacts" target="_blank"><img src={contacts} width="50px" height="40px" alt=""/></a>
                                <div className="text">
                                    <h3>Contacts App</h3>
                                    <p>Este proyecto se basa en una aplicación web de contactos hecha con Python y Flask como Framework, Donde puedes Agregar, Editar y Eliminar Contactos. Los contactos se almacenan en una base de datos SQL.</p>
                                    <a href="https://github.com/SantiHerbin/App-Contacts" target="_blank">Repositorio en GitHub</a>
                                </div>
                        </div>
                        <div className="col-sm">
                            <a href="https://github.com/SantiHerbin/easybank-movile-page" target="_blank"><img src={easyyy} width="50px" height="40px" alt=""/></a>
                                <div className="text">
                                    <h3>Easy Bank</h3>
                                    <p>Este proyecto se basa en una Web de Banco hecha en vanilla y SASS.</p>
                                    <a href="https://github.com/SantiHerbin/easybank-movile-page" target="_blank">Repositorio en GitHub</a>
                                </div>
                        </div>
                    </div>
                    <div className="profile-github">
                        <p>
                            Esos son algunos de mis repositorios, Si quieres ver mas puedes entrar a mi perfil de GitHub y ver más.
                        </p>
                        <button className="btn btn-primary"><i className="fab fa-github"></i>Mi GitHub</button>
                    </div>
                </div>
            </div>
    );
}

export default Portafolio;