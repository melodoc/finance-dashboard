import { validateNumberInput } from '../validation/validateNumberInput.js';
import { validateTextInput } from '../validation/validateTextInput.js';

export const onLoadInputValidations = [
    {
        inputSelector: '.input-large__input',
        validationHandler: validateNumberInput
    },
    {
        inputSelector: '.input__input[type=number]',
        validationHandler: validateNumberInput
    },
    {
        inputSelector: '.input__input[type=text]',
        validationHandler: validateTextInput
    }
];

export const additionalInputValidations = [
    {
        inputSelector: '.input__input[type=number]',
        validationHandler: validateNumberInput
    },
    {
        inputSelector: '.input__input[type=text]',
        validationHandler: validateTextInput
    }
];
