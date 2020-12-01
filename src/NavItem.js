import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';
import "./Row.css";

function NavItem ({title, link}) {
    return (<li>
        
        <a href= {link}><p className="ff-castoro fs-small fw-light">{title}</p></a>        
        </li>);
}

export default NavItem;
