import React, { Component } from 'react'

class Counter extends Component{
    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

    badgeClasses(){
        let classes = 'm-2 badge badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    render(){
        return(
            <div className="p-3">
                <span className={ this.badgeClasses() }>
                {this.formatCount()}
                </span>
                <button className="btn btn-secondary" 
                onClick={() => this.props.onIncrement(this.props.counter)}> Increment </button>
                <button className="btn btn-danger ml-2"
                onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
}

export default Counter;