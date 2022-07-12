export const validationProps = {
    form: '.dashboard__form',
    input: '.input__input',
    submit: '.control__button[type=submit]'
};

export const userInputProps = {
    income: {
        sectionSelector: '#income-data',
        inputSelector: '.input__input',
        inputIds: ['salary-input', 'deposit-amount', 'custom-rate', 'custom-deposit-percent'],
        dynamicInputIds: ['income-name-input', 'income-amount-input'],
        rangeSelector: undefined,
        customSelect: '#deposit-bank',
        checkBox: '#custom-checkbox__input'
    },
    adjunct: {
        sectionSelector: '#adjunct-data',
        inputSelector: '.input__input',
        inputIds: ['target-input'],
        dynamicInputIds: ['expenses-name', 'expenses-amount'],
        rangeSelector: '#goal-period',
        customSelect: undefined,
        checkBox: undefined
    }
};

export const month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

export const daysInMonthsLeap = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

export const daysInMonths = {
    ...daysInMonthsLeap,
    2: 28
};

export const MONTHS_IN_YEAR = 12;
export const HUNDRED_PERCENT = 100;
export const INIT_NUMBER_OF_INPUTS = 3;
