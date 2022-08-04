import { controlHandleClassName } from '../constants/constants.js';

export const disableElement = (element) => {
    element.classList.add(controlHandleClassName.inactive);
    element.disabled = true;
};
