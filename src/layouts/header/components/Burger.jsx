import React from 'react';

const Burger = (props) => {
    return (
        <button {...props} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Burger;