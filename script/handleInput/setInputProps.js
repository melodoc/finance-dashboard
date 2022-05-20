export const setIncomeProps = (template, container, button) => {
    return {
        elements: {
            template,
            container,
            button
        },
        selectors: {
            form: '.dashboard__form',
            wrapper: '.input__wrapper',
            input: '.input__input_size_small',
            error: 'span',
        },
        params: {
            inputNumberLimit: 10
        }
    };
};
