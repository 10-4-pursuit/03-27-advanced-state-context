import React from "react";

const CartItem = ({ item, onDelete, onIncrease, onDecrease }) => {
    console.log(item)
    if (!item) {
        return <div>Error: Item is undefined</div>;
    }

    // Event handlers
    const handleDelete = () => {
        onDelete(item);
    };

    const handleIncrease = () => {
        onIncrease(item);
    };

    const handleDecrease = () => {
        onDecrease(item);
    };

    return (
        <div>
            {/* Display item details */}
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>

            {/* Buttons for actions */}
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleDecrease}>-1</button>
            <button onClick={handleDelete}>Delete</button>
            <hr/>
        </div>
    );
};

export default CartItem;