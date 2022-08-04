import { controlHandleClassNames } from '../constants/constants.js';

export const disableElement = (element) => {
    element.classList.add(controlHandleClassNames.inactive);
    element.disabled = true;
};
