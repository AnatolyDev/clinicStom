import React from 'react';
import spinner from '../../img/spinner.gif';

function Spinner() {
    return(
        <div>
            <img src={spinner} alt="loading..." />
        </div>
    )
}

export default Spinner;