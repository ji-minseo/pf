import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';

function Button ({link}) {
    return (
        <a href ={link}><div className="oval ff-castoro flex-center">go to the site →</div></a>

    );
}

export default Button;
