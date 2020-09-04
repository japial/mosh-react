import React from 'react';

const Navbar = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">Total Counters 
            <span className="badge badge-secondary p-2">{ totalCounters }</span>
            </a>
        </nav> 
        );
}
 
export default Navbar;