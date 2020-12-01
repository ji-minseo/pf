import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';
import "./Row.css";

function NavItem ({title, link}) {
    return (<li>
        
        <a href= {link}><p className="ff-karla fs-p text-grey fw-light row__title">{title}</p></a>        
        </li>);
}

export default NavItem;
