import React from "react";

function Item({food, onDelete}) {
    return (
        <li key={food}>
            {food}
            <input
                type="button"
                value="Remover"
                onClick={onDelete}
            />
        </li>
    );
}

export default Item;