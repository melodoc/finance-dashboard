export const createElementFromTemplate = (templateId, container) => {
    const template = document.querySelector(templateId).content;
    return template.querySelector(container).cloneNode(true);
};