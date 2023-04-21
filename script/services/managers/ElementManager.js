import { ELEMENT_CLASSES } from "../../constants/constants.js";

const elementDataAttributes = {
    validationChecker: "data-custom-validation"
};

export class ElementManager {
    static disable(element, inactiveClass = ELEMENT_CLASSES.inactive) {
        element.classList.add(inactiveClass);
        element.disabled = true;
    }

    static enable(element, inactiveClass = ELEMENT_CLASSES.inactive) {
        element.classList.remove(inactiveClass);
        element.disabled = false;
    }

    static createFromTemplate(template, container) {
        return template.querySelector(container).cloneNode(true);
    }

    static append(container, element) {
        container.append(element);
    }

    static show(element, hiddenClass = ELEMENT_CLASSES.hidden) {
        if (Array.isArray(element)) {
            element.forEach((e) => e.classList.remove(hiddenClass));
        } else {
            element.classList.remove(hiddenClass);
        }
    }

    static hide(element, hiddenClass = ELEMENT_CLASSES.hidden) {
        if (Array.isArray(element)) {
            element.forEach((e) => e.classList.add(hiddenClass));
        } else {
            element.classList.add(hiddenClass);
        }
    }

    static setCustomAttribute(element, attribute = elementDataAttributes.validationChecker, value = true) {
        element.setAttribute(attribute, value);
    }

    static hasCustomAttribute(element, attribute = elementDataAttributes.validationChecker) {
        return element.hasAttribute(attribute);
    }
}
