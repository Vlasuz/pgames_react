import React from 'react';

const JsScroll = () => {

    const body = document.querySelector('body'),
        html = document.querySelector('html'),
        header = document.querySelector('.header');

    const topElement = document.createElement('div');
    topElement.classList.add('top-element');
    body.append(topElement)

    let offsetTop = 0;

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    let hToDown = 50,
        hToUp = 50,

        headerPos = getCoords(header),

        hPosToDown, hPosToUp, hCheck = [true, true], hPosCheck = false,
        hTopCheck = false, scrolled = [0, 0], checkScrolled = '';

    function headerScrollFunc() {

        scrolled[0] = headerPos.top
        headerPos = getCoords(header);
        scrolled[1] = headerPos.top

        if (!hPosCheck) {

            hPosCheck = true;

            hPosToDown = headerPos.top + hToDown;
            hPosToUp = headerPos.top - hToUp;

        }

        if (scrolled[0] > scrolled[1]) {
            checkScrolled = 'up';
        } else if (scrolled[0] < scrolled[1]) {
            checkScrolled = 'down';
        }

        if (!hTopCheck && headerPos.top > 0) {
            hTopCheck = true;

            header.classList.remove('_on-top');
        } else if (headerPos.top == 0) {
            hTopCheck = false;
            header.classList.add('_on-top');
        }

        if (checkScrolled == 'down') hPosToUp = headerPos.top - hToUp;
        if (checkScrolled == 'up') hPosToDown = headerPos.top + hToDown;

        if (hPosToUp >= headerPos.top && hCheck[0]) {
            hCheck[0] = false;
            hCheck[1] = true;

            // header.classList.remove('_hide'); // SHOW HEADER
        }

        if (hPosToDown <= headerPos.top && hCheck[1]) {
            hCheck[1] = false;
            hCheck[0] = true;

            // header.classList.add('_hide'); // HIDE HEADER
        }

    }

    headerScrollFunc();

    function scroll() {
        offsetTop = getCoords(topElement).top;

        html.style.setProperty('--height-screen', window.innerHeight + 'px');
        html.style.setProperty('--height-header', header.offsetHeight + 'px');

        /* if(offsetTop <= 0) {

          header.classList.add('_on-top');
        } else {
          header.classList.remove('_on-top');
        } */

        headerScrollFunc();

    }

    scroll()

    window.onscroll = scroll;
};

export default JsScroll;