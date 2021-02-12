import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect, itemSelected } = props;
    return (<ul className="list-group">
        { items.map(item => (
            <li
                onClick={() => onItemSelect(item[valueProperty])}
                key={item[valueProperty]}
                className={item[valueProperty] === itemSelected ? "list-group-item active" : "list-group-item"}
            >{item[textProperty]}</li>
        ))}
    </ul>);
}

ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name'
}

export default ListGroup;