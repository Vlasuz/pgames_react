import React from 'react';
import 'lc-select/lc_select.min';

const JsCustomSelect = () => {

    // eslint-disable-next-line no-undef
    new lc_select('.custom-select', {

        // (bool) whether to enable fields search
        enable_search : false,
        addit_classes : ['lcslt-dark'],
        labels : [
            'Поиск вариантов',
            'Добавить вариант',
            'Выберите вариант ..',
            '.. нет подходящих вариантов ..',
        ],
    });

    document.querySelectorAll('.custom-multiple-select').forEach(customMultipleSelect => {
        // eslint-disable-next-line no-undef
        new lc_select(customMultipleSelect, {

            // (bool) whether to enable fields search
            enable_search : false,
            addit_classes : ['lcslt-dark'],
            labels : [
                'Поиск вариантов',
                'Добавить вариант',
                (customMultipleSelect.dataset.placeholder) ? customMultipleSelect.dataset.placeholder : 'Выберите вариант ..',
                '.. нет подходящих вариантов ..',
            ],
        });
    })

};

export default JsCustomSelect;