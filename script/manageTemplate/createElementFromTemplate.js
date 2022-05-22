export const createElementFromTemplate = (templateContent, container) => {
    return templateContent.querySelector(container).cloneNode(true);
};
