import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        const { onReset, onIncrement, onDelete, counters, onDecrement } = this.props;
        return ( 
        <div>
            <button className="btn btn-info mb-4" onClick={onReset}>Reset</button>
            {counters.map( counter => (
                <Counter 
                key={counter.id} 
                counter={counter} 
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete} /> 
            ))}
        </div> 
        );
    }
}
 
export default Counters;