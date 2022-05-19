import { getUid } from '../utils/getUid.js';
import { createElementFromTemplate } from '../manageTemplate/createElementFromTemplate.js';
import { disableElement } from '../elementStateHandle/disableElement.js';

const appendElement = (container, element) => {
    container.append(element);
};

const createInput = ({ template, selectors }) => {
    const inputWrapper = createElementFromTemplate(template, selectors.wrapper);
    const inputElements = Array.from(inputWrapper.querySelectorAll(selectors.input));
    const errorElements = Array.from(inputWrapper.querySelectorAll(selectors.error));
    const uid = getUid();

    inputElements.map((inputElement, index) => {
        errorElements[index].className = `${inputElement.id}${uid}-error`;
        inputElement.id = `${inputElement.id}${uid}`;
        inputElement.name = `${inputElement.id}${uid}`;
    });

    return inputWrapper;
};

export const appendInput = ({ elements, selectors, params }) => {
    const inputLength = Array.from(elements.container.querySelectorAll(selectors.wrapper)).length;

    if (inputLength < params.inputNumberLimit) {
        const inputWrapper = createInput({
            template: elements.template,
            selectors: {
                wrapper: selectors.wrapper,
                input: selectors.input,
                error: selectors.error
            }
        });

        appendElement(elements.container, inputWrapper);

        if (inputLength + 1 === params.inputNumberLimit) {
            disableElement(elements.button);
        }
    }
};
