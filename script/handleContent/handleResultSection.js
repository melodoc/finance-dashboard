const getElements = (containerElement, selectors) => {
    const elements = {};
    Object.keys(selectors).map((key) => {
        elements[key] = containerElement.querySelector(selectors[key]);
    });
    return elements;
};

export const handleResultSection = (resultData) => {
    const result = document.querySelector('#result');

    const {
        budget,
        expenses,
        budgetDay,
        incomePeriod,
        bankDeposit,
        targetMonth,
        additionalIncome,
        additionalExpenses
    } = getElements(result, {
        budget: '#budget_month-result',
        expenses: '#expenses_month-result',
        budgetDay: '#budget_day-result',
        incomePeriod: '#income_period-result',
        bankDeposit: '#bank-deposit-result',
        targetMonth: '#target_month-result',
        additionalIncome: '.additional_income-value',
        additionalExpenses: '.additional_expenses-value'
    });

    budget.value = resultData.total.income;
    expenses.value = resultData.total.expense;
    budgetDay.value = resultData.total.dailyBudget;
    incomePeriod.value = resultData.total.totalSavings;
    bankDeposit.value = resultData.total.bankDeposit ? resultData.total.bankDeposit : 'Nothing to count';
    targetMonth.value = resultData.total.goalReachingPeriod;
    additionalIncome.textContent = resultData.summary.income;
    additionalExpenses.textContent = resultData.summary.expenses;
};
