import React from 'react';

const testWebP = (elem) => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
        webP.height === 2 ? elem.classList.add('webp-true') : elem.classList.add('webp-false')
    }
}

export default testWebP;