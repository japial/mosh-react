import React, { Component } from 'react'

class Counter extends Component {
    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

    badgeClasses() {
        let classes = 'm-2 badge badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <span className={this.badgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col-10">
                    <button className="btn btn-secondary"
                        onClick={() => this.props.onIncrement(this.props.counter)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button className="btn btn-secondary m-2"
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-danger"
                        onClick={() => this.props.onDelete(this.props.counter.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>


            </div>
        );
    }
}

export default Counter;