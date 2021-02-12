import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, itemSelected }) => {
    return (<ul className="list-group">
        { items.map(item => (
            <li
                onClick={() => onItemSelect(item[valueProperty])}
                key={item[valueProperty]}
                className={item[valueProperty] === itemSelected ? "list-group-item clickable active" : "list-group-item clickable"}
            >{item[textProperty]}</li>
        ))}
    </ul>);
}

ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name'
}

export default ListGroup;