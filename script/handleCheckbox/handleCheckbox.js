import { controlHandleClassNames, controlHandleAttributes } from '../constants/constants.js';

const depositContainer = document.querySelector('.deposit');
const customSelectWrapper = depositContainer.querySelector('.custom-select__wrapper');
const amountInputContainer = depositContainer.querySelector('.input-large');
const amountInput = depositContainer.querySelector('#deposit-amount');

const depositBankSelect = customSelectWrapper.querySelector('#deposit-bank');
const customRateWrapper = depositContainer.querySelector('.input__wrapper');
const customRateNameInput = customRateWrapper.querySelector('#custom-deposit-percent');
const customRatePercentInput = customRateWrapper.querySelector('#custom-rate');

const setElementVisible = (element) => {
    if (Array.isArray(element)) {
        element.forEach((e) => e.classList.remove(controlHandleClassNames.hidden));
    } else {
        element.classList.remove(controlHandleClassNames.hidden);
    }
};

const setElementInvisible = (element) => {
    if (Array.isArray(element)) {
        element.forEach((e) => e.classList.add(controlHandleClassNames.hidden));
    } else {
        element.classList.add(controlHandleClassNames.hidden);
    }
};

export const showTermDepositInput = () => {
    setElementVisible([customSelectWrapper, amountInputContainer]);
};

export const hideTermDepositInput = () => {
    setElementInvisible([customSelectWrapper, amountInputContainer, customRateWrapper]);
};

const showCustomRateInput = () => {
    setElementVisible(customRateWrapper);
    customRateNameInput.removeAttribute(controlHandleAttributes.disabled);
};

const setRequiredAttributes = () => {
    customRateNameInput.setAttribute(controlHandleAttributes.required, '');
    customRatePercentInput.setAttribute(controlHandleAttributes.required, '');
};

export const removeRequiredAttributes = () => {
    customRateNameInput.removeAttribute(controlHandleAttributes.required);
    customRatePercentInput.removeAttribute(controlHandleAttributes.required);
};

export const handleAdditionalSelect = () => {
    if (depositBankSelect.value === 'other') {
        showCustomRateInput();
        setRequiredAttributes();
    } else {
        setElementInvisible(customRateWrapper);
        removeRequiredAttributes();
    }
};

export const setTermDepositInputRequired = () => {
    amountInput.setAttribute(controlHandleAttributes.required, '');
};

export const removeTermDepositInputRequired = () => {
    amountInput.removeAttribute(controlHandleAttributes.required);
};
