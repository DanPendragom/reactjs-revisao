import React from "react";
import PropTypes from 'prop-types';

function Item({food, onDelete}) {
    return (
        <li>
            {food}
            <input
                type="button"
                value="Remover"
                onClick={onDelete}
            />
        </li>
    );
}

Item.defaultProps = {
    food: 'que fome',
};

Item.propTypes = {
    food: PropTypes.string,
    onDelete: PropTypes.func,
};

export default Item;