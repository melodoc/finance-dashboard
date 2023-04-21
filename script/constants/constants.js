export const DASHBOARD_FORM_SELECTORS = {
    input: {
        element: ".input__input",
        classNames: {
            error: "input-error",
            errorActive: "input-error_active"
        }
    },
    wrapper: ".input__wrapper",
    error: "span",
    form: ".dashboard__form",
    submit: ".control__button[type=submit]"
};

export const USER_INCOME_INPUT_IDS = {
    salaryInput: "salary-input",
    depositAmount: "deposit-amount",
    customRate: "custom-rate",
    customDepositPercent: "custom-deposit-percent",
    incomeNameInput: "income-name",
    incomeAmountInput: "income-amount"
};

export const USER_ADJUNCT_INPUT_IDS = {
    targetInput: "target-input",
    expensesName: "expenses-name",
    expensesAmount: "expenses-amount"
};

export const DEPOSIT_RATES = {
    other: "other"
};

export const ELEMENT_CLASSES = {
    inactive: "control__element_inactive",
    hidden: "display_none",
    validityActive: "control__element_validity_active"
};
