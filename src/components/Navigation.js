import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return <div>
        <Link to="/"><p className="ff-castoro fs-small fw-light">Lany</p></Link>

        <Link to="/about">About</Link>
    </div>
}

export default Navigation;