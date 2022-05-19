import { validateNumberInput } from '../validation/validateNumberInput.js';
import { validateTextInput } from '../validation/validateTextInput.js';

export const validationProps = [
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
