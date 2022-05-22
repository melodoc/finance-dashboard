export const handleResultSection = (resultData) => {
    const result = document.querySelector('#result');
    const budgetMonthResult = result.querySelector('#budget_month-result');
    const expensesMonthResult = result.querySelector('#expenses_month-result');
    const budgetDayResult = result.querySelector('#budget_day-result');
    const incomePeriodResult = result.querySelector('#income_period-result');
    const bankDepositResult = result.querySelector('#bank-deposit-result');
    const targetMonthResult = result.querySelector('#target_month-result');

    const summaryIncomeSection = result.querySelector('.additional_income-value');
    const summaryExpensesSection = result.querySelector('.additional_expenses-value');

    budgetMonthResult.value = resultData.total.income;
    expensesMonthResult.value = resultData.total.expense;
    budgetDayResult.value = resultData.total.dailyBudget;
    incomePeriodResult.value = resultData.total.totalSavings;
    bankDepositResult.value = resultData.total.bankDeposit ? resultData.total.bankDeposit : 'Nothing to count';
    targetMonthResult.value = resultData.total.goalReachingPeriod;
    summaryIncomeSection.textContent = resultData.summary.income;
    summaryExpensesSection.textContent = resultData.summary.expenses;
};
