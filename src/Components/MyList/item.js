import React from "react";

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
    food: 'que fome'
}

export default Item;