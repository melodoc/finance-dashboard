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
        checkBox: '#custom-checkbox__input',
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

const obj = {
    total: {
        income: 53,
        expense: 34,
        dailyBudget: 34,
        savings: 34,
        period: 12
    },
    summary: {
        income: ['Bank of America'],
        expenses: ['Cash withdrawal']
    }
};
