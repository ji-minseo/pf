import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return <div>
        <NavLink to="/lany" activeClassName="selected"><p className="ff-castoro fs-small fw-light">lany businesscard</p></NavLink>
        <NavLink to="/axis" activeClassName="selected"><p className="ff-castoro fs-small fw-light">axis of horizon</p></NavLink>
        <NavLink to="/jacq" activeClassName="selected"><p className="ff-castoro fs-small fw-light">jacquemus</p></NavLink>
        <NavLink to="/gust" activeClassName="selected"><p className="ff-castoro fs-small fw-light">gustafwestman</p></NavLink>

    </div>
}

export default Navigation;