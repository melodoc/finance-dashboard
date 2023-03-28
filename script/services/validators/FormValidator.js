import { ElementManager } from "../managers/ElementManager.js";
import { SummaryCalculator } from "../budgetingTools/SummaryCalculator.js";
import { ResultSectionManager } from "../budgetingTools/ResultSectionManager.js";
import { DASHBOARD_FORM_SELECTORS, ELEMENT_CLASSES } from "../../constants/constants.js";

export class FormValidator {
    #validationProps = {
        form: DASHBOARD_FORM_SELECTORS.form,
        input: `${DASHBOARD_FORM_SELECTORS.input.element}:not(.${ELEMENT_CLASSES.hidden})`,
        submit: DASHBOARD_FORM_SELECTORS.submit
    };

    #inputClassNames = {
        error: DASHBOARD_FORM_SELECTORS.input.classNames.error,
        errorActive: DASHBOARD_FORM_SELECTORS.input.classNames.errorActive
    };

    #formElement = document.querySelector(this.#validationProps.form);
    #inputList = Array.from(this.#formElement.querySelectorAll(this.#validationProps.input));
    #buttonElement = this.#formElement.querySelector(this.#validationProps.submit);

    updateInputList() {
        this.#inputList = Array.from(this.#formElement.querySelectorAll(this.#validationProps.input));
        this.#toggleButtonState();
    }

    enableValidation() {
        this.#formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const result = new SummaryCalculator(this.#formElement).calculate();
            ResultSectionManager.render(result);
        });
        this.updateInputList();
        this.#setEventListeners();
    }

    #setEventListeners() {
        this.#toggleButtonState();
        this.#inputList.forEach((inputElement) => {
            this.#addEventInputListener(inputElement);
        });
    }

    updateEventListeners() {
        this.#inputList.forEach((inputElement) => {
            if (ElementManager.hasCustomAttribute(inputElement)) {
                return;
            }
            this.#addEventInputListener(inputElement);
        });
    }

    #addEventInputListener(inputElement) {
        inputElement.addEventListener("input", () => {
            this.#isValid(inputElement);
            this.#toggleButtonState();
        });
        ElementManager.setCustomAttribute(inputElement);
    }

    #toggleButtonState() {
        if (this.#hasInvalidInput(this.#inputList)) {
            ElementManager.disable(this.#buttonElement);
        } else {
            ElementManager.enable(this.#buttonElement);
        }
    }

    #hasInvalidInput() {
        return this.#inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    #isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this.#showInputError(inputElement);
        } else {
            this.#hideInputError(inputElement);
        }
    }

    #showInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.#inputClassNames.error);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this.#inputClassNames.errorActive);
    }

    #hideInputError(inputElement) {
        const errorElement = this.#formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.#inputClassNames.error);
        errorElement.classList.remove(this.#inputClassNames.errorActive);
        errorElement.textContent = "";
    }
}
