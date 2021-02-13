import React from 'react';

const CountNav = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light mb-4">
            <a href="/" className="navbar-brand ml-5">Total Counters 
            <span className="badge badge-secondary p-2 ml-5">{ totalCounters }</span>
            </a>
        </nav> 
        );
}
 
export default CountNav;