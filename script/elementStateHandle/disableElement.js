export const disableElement = (element) => {
    element.classList.add('control__element_inactive');
    element.disabled = true;
};
