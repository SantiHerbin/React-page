import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'


const Badge = () => {
    return(
        <div>
                <div className="wraper">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Sobre Nosotros</a></li>
                                <li><a href="">Contáctanos</a></li>
                                <li><a href="">Ayuda</a></li>
                            </ul>
                        </nav>
                        <div className="banner">
                            <img src="" alt=""/>
                            <h1>Banner</h1>
                        </div>
                    </header>
                    <section>
                        <h1>section 1</h1>
                    </section>
                    <section>
                        <h1>section 2</h1>
                    </section>
                </div>  
        </div>
    );
}

export default Badge;