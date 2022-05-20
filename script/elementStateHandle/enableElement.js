export const enableElement = (element) => {
    element.classList.remove('control__element_inactive');
    element.disabled = false;
};