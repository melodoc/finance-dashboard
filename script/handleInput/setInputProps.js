export const setIncomeProps = (template, container, button) => {
    return {
        elements: {
            template,
            container,
            button
        },
        selectors: {
            wrapper: '.input__wrapper',
            input: '.input__input',
            error: 'span'
        },
        params: {
            inputNumberLimit: 10
        }
    };
};
