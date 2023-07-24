export default function getHeights() {
    document.querySelector('html').style.setProperty('--height-screen', window.innerHeight + 'px');
    document.querySelector('html').style.setProperty('--height-header', document.querySelector('header').offsetHeight + 'px');
}