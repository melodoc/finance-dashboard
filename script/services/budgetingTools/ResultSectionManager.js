const selectors = {
    budget: "#budget_month-result",
    expenses: "#expenses_month-result",
    budgetDay: "#budget_day-result",
    incomePeriod: "#income_period-result",
    bankDeposit: "#bank-deposit-result",
    targetMonth: "#target_month-result",
    additionalIncome: ".additional_income-value",
    additionalExpenses: ".additional_expenses-value"
};

export class ResultSectionManager {
    static getElements() {
        const result = document.querySelector("#result");

        return Object.keys(selectors).reduce((elements, key) => {
            elements[key] = result.querySelector(selectors[key]);
            return elements;
        }, {});
    }

    static render(resultData) {
        const {
            budget,
            expenses,
            budgetDay,
            incomePeriod,
            bankDeposit,
            targetMonth,
            additionalIncome,
            additionalExpenses
        } = ResultSectionManager.getElements();

        budget.value = resultData.total.income;
        expenses.value = resultData.total.expense;
        budgetDay.value = resultData.total.dailyBudget;
        incomePeriod.value = resultData.total.totalSavings;
        bankDeposit.value = resultData.total.bankDeposit ? resultData.total.bankDeposit : "Nothing to count";
        targetMonth.value = resultData.total.goalReachingPeriod;
        additionalIncome.textContent = resultData.summary.income;
        additionalExpenses.textContent = resultData.summary.expenses;
    }
}
