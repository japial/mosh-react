import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        const { onReset, onIncrement, onDelete, counters } = this.props;
        return ( 
        <div>
            <button className="btn btn-warning mb-4" onClick={onReset}>Reset</button>
            {counters.map( counter => (
                <Counter 
                key={counter.id} 
                counter={counter} 
                onIncrement={onIncrement}
                onDelete={onDelete} /> 
            ))}
        </div> 
        );
    }
}
 
export default Counters;