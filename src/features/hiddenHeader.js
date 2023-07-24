let lastScrollTop = 0;
export default function hiddenHeader() {
    const scrollHeight = window.pageYOffset
    const headerBlock = document.querySelector('.header')

    let st = scrollHeight || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        headerBlock.classList.add('_hide')
    } else if (st < lastScrollTop) {
        headerBlock.classList.remove('_hide')
    }
    lastScrollTop = st <= 0 ? 0 : st;
}