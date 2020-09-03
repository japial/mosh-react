import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count : 0
    }
    formatCount(){
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    badgeClasses(){
        let classes = 'm-2 badge badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
    handleIncrement = () => {
        this.setState({ count : this.state.count + 1 })
    }
    render(){
        return(
            <div>
                <span className={ this.badgeClasses() }>{this.formatCount()}</span>
                <button className="btn btn-secondary" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default Counter;