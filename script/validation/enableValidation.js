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

const isValid = (formElement, inputElement, validationHandler) => {
    const inputValidation = validationHandler(inputElement.value);

    if (!inputValidation.isValid) {
        showInputError(formElement, inputElement, inputValidation.errorText);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement, inputSelector, validationHandler) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, validationHandler);
        });
    });
};

export const enableValidation = (inputValidations) => {
    const formClass = '.dashboard__form';
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
