import { controlHandleClassNames } from '../constants/constants.js';

export const enableElement = (element) => {
    element.classList.remove(controlHandleClassNames.inactive);
    element.disabled = false;
};
