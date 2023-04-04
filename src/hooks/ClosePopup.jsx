import React from 'react';

const ClosePopup = () => {
    document.querySelectorAll(".popup").forEach(popup => popup.classList.remove('_active'))
};

export default ClosePopup;