export const validationProps = {
    form: '.dashboard__form',
    input: '.input__input',
    submit: '.control__button[type=submit]'
};

export const incomeProps = {
    form: '.dashboard__form',
    wrapper: '.input__wrapper',
    input: '.input__input',
    error: 'span',
    submit: '.control__button[type=submit]'
};

export const controlHandleClassNames = {
    inactive: 'control__element_inactive',
    hidden: 'display_none'
};

export const controlHandleAttributes = {
    disabled: 'disabled',
    required: 'required'
};

export const USER_INCOME_INPUT_IDS = {
    SalaryInput: 'salary-input',
    DepositAmount: 'deposit-amount',
    CustomRate: 'custom-rate',
    CustomDepositPercent: 'custom-deposit-percent'
};

export const USER_ADJUNCT_INPUT_IDS = {
    TargetInput: 'target-input',
};

export const DEPOSIT_RATES = {
    Other: 'other',
}

export const userInputProps = {
    income: {
        sectionSelector: '#income-data',
        inputSelector: '.input__input',
        inputIds: [
            USER_INCOME_INPUT_IDS.SalaryInput,
            USER_INCOME_INPUT_IDS.DepositAmount,
            USER_INCOME_INPUT_IDS.CustomRate,
            USER_INCOME_INPUT_IDS.CustomDepositPercent
        ],
        dynamicInputIds: ['income-name-input', 'income-amount-input'],
        rangeSelector: undefined,
        customSelect: '#deposit-bank',
        checkBox: '#custom-checkbox__input'
    },
    adjunct: {
        sectionSelector: '#adjunct-data',
        inputSelector: '.input__input',
        inputIds: [USER_ADJUNCT_INPUT_IDS.TargetInput],
        dynamicInputIds: ['expenses-name', 'expenses-amount'],
        rangeSelector: '#goal-period',
        customSelect: undefined,
        checkBox: undefined
    }
};

export const SIDE_INCOME_NUMBER_OF_INPUTS = 1;
export const NUMBER_OF_INPUTS = {
    SIDE_INCOME: 1,
    NUMBER_OF_INPUTS: 2
};
