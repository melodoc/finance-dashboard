import { disableElement } from '../elementStateHandle/disableElement.js';
import { enableElement } from '../elementStateHandle/enableElement.js';

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('input-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('input-error');
    errorElement.classList.remove('input-error_active');
    errorElement.textContent = '';
};

export const isValid = (formElement, inputElement, validationHandler) => {
    const inputValidation = validationHandler(inputElement.value);

    if (!inputValidation.isValid) {
        showInputError(formElement, inputElement, inputValidation.errorText);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList, validationHandler) => {
    return inputList.some((inputElement) => {
        return !validationHandler(inputElement.value).isValid;
    });
};

export const toggleButtonState = (inputList, buttonElement, validationHandler) => {
    if (hasInvalidInput(inputList, validationHandler)) {
        disableElement(buttonElement);
    } else {
        enableElement(buttonElement);
    }
};

const setEventListeners = (formElement, inputSelector, validationHandler) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector('.control__button[type=submit');

    toggleButtonState(inputList, buttonElement, validationHandler);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, validationHandler);
        });
    });
};

export const enableValidation = (formClass, inputValidations) => {
    const formList = Array.from(document.querySelectorAll(formClass));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        inputValidations.forEach((inputParams) => {
            setEventListeners(formElement, inputParams.inputSelector, inputParams.validationHandler);
        });
    });
};
