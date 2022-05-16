import { getUid } from '../utils/getUid.js';
import { createElementFromTemplate } from '../manageTemplate/createElementFromTemplate.js';

export const appendInputFromTemplate = (templateId, container) => {
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
