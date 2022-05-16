export const disableElement = (container, selector) => {
    const element = container.querySelector(selector);
    element.disabled = true;
};
