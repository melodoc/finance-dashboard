import { validateNumberInput } from '../utils/validateNumberInput.js';
import { validateTextInput } from '../utils/validateTextInput.js';

export const inputValidations = [
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
