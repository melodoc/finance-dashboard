import { getUid } from '../utils/getUid.js';

const createElementFromTemplate = (templateId, container) => {
    const template = document.querySelector(templateId).content;
    return template.querySelector(container).cloneNode(true);
};

const appendInputFromTemplate = (templateId, container) => {
    const inputContainer = createElementFromTemplate(templateId, '.input__wrapper');
    const inputElements = Array.from(inputContainer.querySelectorAll('.input__input'));
    const spanElements = Array.from(inputContainer.querySelectorAll('span'));
    const uid = getUid();

    inputElements.map((inputElement, index) => {
        spanElements[index].className = `${inputElement.id}${uid}-error`;
        inputElement.id = `${inputElement.id}${uid}`;
    });

    container.append(inputContainer);
};

const disableButton = (container, selector) => {
    const button = container.querySelector(selector);
    button.disabled = true;
};

export const handleInput = (templateId, container) => {
    const inputLength = Array.from(container.querySelectorAll('.input__input[type=text]')).length;
    const MAX_COUNT = 3;

    if (inputLength < MAX_COUNT) {
        appendInputFromTemplate(templateId, container);

        if (inputLength + 1 === MAX_COUNT) {
            disableButton(container, '.header__button');
        }
    }
};
