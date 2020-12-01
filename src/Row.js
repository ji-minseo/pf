import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';
import "./Row.css";

function Row ({title, contents, classname}) {
    return (<div className ="row">
        
        <p className="ff-karla fs-p text-grey fw-light row__title">{title}</p>
        <div className={classname}>{contents}</div>
        
        </div>);
}

export default Row;
