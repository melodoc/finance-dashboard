import { UniqueIdGenerator } from "../utils/UniqueIdGenerator.js";
import { ElementManager } from "./ElementManager.js";
import { DASHBOARD_FORM_SELECTORS } from "../../constants/constants.js";

export class InputManager {
    inputNumberLimit = 10;

    elements = {
        template: null,
        container: null,
        button: null
    };

    selectors = {
        input: DASHBOARD_FORM_SELECTORS.input.element,
        wrapper: DASHBOARD_FORM_SELECTORS.wrapper,
        error: DASHBOARD_FORM_SELECTORS.error
    };

    constructor({ template, container, button }) {
        this.elements = {
            template,
            container,
            button
        };
    }

    createInput() {
        const inputWrapper = ElementManager.createFromTemplate(this.elements.template, this.selectors.wrapper);
        const inputElements = Array.from(inputWrapper.querySelectorAll(this.selectors.input));
        const errorElements = Array.from(inputWrapper.querySelectorAll(this.selectors.error));
        const id = UniqueIdGenerator.generateId();

        inputElements.forEach((inputElement, index) => {
            const inputId = `${inputElement.id}${id}`;

            errorElements[index].className = `${inputId}-error`;
            inputElement.id = inputId;
            inputElement.name = inputId;
        });

        return inputWrapper;
    }

    append() {
        const inputWrappers = Array.from(this.elements.container.querySelectorAll(this.selectors.wrapper));

        if (inputWrappers.length >= this.inputNumberLimit) return;

        const inputWrapper = this.createInput();

        ElementManager.append(this.elements.container, inputWrapper);

        const isInputLimitReached = inputWrappers.length + 1 === this.inputNumberLimit;
        if (isInputLimitReached) ElementManager.disable(this.elements.button);
    }
}
