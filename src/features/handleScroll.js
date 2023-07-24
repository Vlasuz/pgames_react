import hiddenHeader from "./hiddenHeader";

export default function handleScroll() {

    window.addEventListener('scroll', (event) => {
        const scrollHeight = window.pageYOffset
        const windowWidth = window.innerWidth
        const headerBlock = document.querySelector('.header')

        if(windowWidth < 992) return null;

        if (scrollHeight < 1) {
            headerBlock.classList.add('_on-top')
        } else if (scrollHeight > 1) {
            headerBlock.classList.remove('_on-top')
            if (scrollHeight > 100) {

                // Header hidden
                hiddenHeader()

            }
        }

    })

}