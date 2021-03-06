import React, { Component } from 'react';
import Counters from './counter/counters';
import CountNav from './counter/countnav';

class CounterApp extends Component {
    state = {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 2 },
            { id: 5, value: 0 },
        ]
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    };
    render() {
        return (<div className="row">
            <div className="col-6 mx-auto">
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
                <CountNav totalCounters={this.state.counters.filter(c => c.value !== 0).length} />
            </div>
        </div>);
    }
}

export default CounterApp;
