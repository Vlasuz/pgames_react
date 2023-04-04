import React from 'react';

const JsVideoPreview = () => {
    let videoPreview = document.querySelectorAll('.video__preview')[0];
    if(videoPreview) {
        const parent = videoPreview.closest('.video__wrapper');
        let video = parent.querySelector('.video__block');

        videoPreview.classList.add('_hidden');
        video.play();
    }
};

export default JsVideoPreview;