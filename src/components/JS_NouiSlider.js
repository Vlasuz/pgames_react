import nouislider from "nouislider";

function customeRange(setBet, bet) {
    const range = document.querySelectorAll('.input-range');

    if (range[0]) {
        range.forEach(thisRange => {

            let rangeBody = thisRange.closest('.input-range-body'),
                rangeElem = rangeBody.querySelector('.input-range-elem'),
                rangeValue = document.querySelectorAll('.input-range-value');

            let start     = Number(thisRange.dataset.start),
                step      = Number(thisRange.getAttribute('step')),
                min       = Number(thisRange.getAttribute('min')),
                max       = Number(thisRange.getAttribute('max'));


            try {

                const rangeSlider = nouislider.create(rangeElem, {
                    tooltips: true,

                    start: [(start) ? start : 0],
                    connect: 'lower',

                    step: step,
                    range: {
                        'min': min,
                        'max': max,
                    },

                    tooltips: false,

                    format: {
                        to: function (value) {
                            rangeValue.forEach(div => div.textContent = Number(value).toFixed(0));

                            return Number(value).toFixed(0);

                        },
                        from: function (value) {
                            return Number(value).toFixed(0);
                        }
                    }

                });

                thisRange.classList.add('_hidden');

            } catch { }


        })
    }

}

export default customeRange;