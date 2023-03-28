import { disableElement } from '../elementStateHandle/disableElement.js';
import { enableElement } from '../elementStateHandle/enableElement.js';
import { getUserInputValues } from '../handleInput/getUserInputValues.js';
import { Summary } from '../calculators/Summary.js';
import { handleResultSection } from '../handleContent/handleResultSection.js';

const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('input-error');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('input-error');
    errorElement.classList.remove('input-error_active');
    errorElement.textContent = '';
};

export const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

export const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        disableElement(buttonElement);
    } else {
        enableElement(buttonElement);
    }
};

const setEventListeners = (formElement, validationProps) => {
    const inputList = Array.from(formElement.querySelectorAll(validationProps.input));
    const buttonElement = formElement.querySelector(validationProps.submit);

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

export const enableValidation = (validationProps, userInputProps) => {
    // TODO: Одна форма, убрать проход по всем
    const formList = Array.from(document.querySelectorAll(validationProps.form));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputData = getUserInputValues(formElement, userInputProps.income);
            const adjunctData = getUserInputValues(formElement, userInputProps.adjunct);
            
            const summaryCalculator = new Summary(inputData, adjunctData);
            const result = summaryCalculator.calculate();

            handleResultSection(result);
        });

        setEventListeners(formElement, validationProps);
    });
};

export const updateValidation = ({ selectors }, inputWrapper) => {
    const formList = Array.from(document.querySelectorAll(selectors.form));

    formList.forEach((formElement) => {
        const buttonElement = formElement.querySelector(selectors.submit);
        const updatedInputList = Array.from(inputWrapper.querySelectorAll(selectors.input));
        const inputList = Array.from(formElement.querySelectorAll(selectors.input));
        const joinedAllInputsList = updatedInputList.concat(inputList);

        updatedInputList.forEach((input) => {
            input.addEventListener('input', () => {
                isValid(formElement, input);
                toggleButtonState(joinedAllInputsList, buttonElement);
            });
        });

        toggleButtonState(joinedAllInputsList, buttonElement);
    });
};
