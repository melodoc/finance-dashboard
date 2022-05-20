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
            input: '.input__input',
            error: 'span',
            submit: '.control__button[type=submit]'
        },
        params: {
            inputNumberLimit: 10
        }
    };
};
