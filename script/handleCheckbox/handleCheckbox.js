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
        element.forEach((e) => e.classList.remove('display_none'));
    } else {
        element.classList.remove('display_none');
    }
};

const setElementInvisible = (element) => {
    if (Array.isArray(element)) {
        element.forEach((e) => e.classList.add('display_none'));
    } else {
        element.classList.add('display_none');
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
    customRateNameInput.removeAttribute('disabled');
};

const setRequiredAttributes = () => {
    customRateNameInput.setAttribute('required', '');
    customRatePercentInput.setAttribute('required', '');
};

export const removeRequiredAttributes = () => {
    customRateNameInput.removeAttribute('required');
    customRatePercentInput.removeAttribute('required');
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
    amountInput.setAttribute('required', '');
};
