import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return <div>
        <Link to="/lany"><p className="ff-castoro fs-small fw-light">lany businesscard</p></Link>
        <Link to="/axis"><p className="ff-castoro fs-small fw-light">axis of horizon</p></Link>
        <Link to="/jacq"><p className="ff-castoro fs-small fw-light">jacquemus</p></Link>
        <Link to="/gust"><p className="ff-castoro fs-small fw-light">gustafwestman</p></Link>

    </div>
}

export default Navigation;