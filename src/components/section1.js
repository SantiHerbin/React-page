import React, {ReactDOM} from 'react'
import { render } from '@testing-library/react'

import section1 from './styles/section1.css'

function Section1() {
    return(
        <div className="section1">
            <h1>
                Section One
            </h1>
        </div>
    );
}

export default Section1;