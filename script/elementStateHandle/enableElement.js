import { controlHandleClassName } from '../constants/constants.js';

export const enableElement = (element) => {
    element.classList.remove(controlHandleClassName.inactive);
    element.disabled = false;
};
