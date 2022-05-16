import { disableElement } from '../elementStyleHandle/disableElement.js';
import { appendInputFromTemplate } from './appendInputFromTemplate.js';

export const handleInput = (templateId, container) => {
    const inputLength = Array.from(container.querySelectorAll('.input__input[type=text]')).length;
    const MAX_COUNT = 3;

    if (inputLength < MAX_COUNT) {
        appendInputFromTemplate(templateId, container);

        if (inputLength + 1 === MAX_COUNT) {
            disableElement(container, '.header__button');
        }
    }
};
