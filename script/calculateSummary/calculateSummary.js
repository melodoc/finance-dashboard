import { daysInMonthsLeap, daysInMonths, MONTHS_IN_YEAR, HUNDRED_PERCENT } from '../constants/constants.js';

const getDynamicAmount = (amountList) => {
    return amountList.reduce((prevAmount, currentAmount) => Number(prevAmount) + Number(currentAmount), 0);
};

const getDynamicName = (nameList) => {
    return nameList.join(', ');
};

const getSalary = (inputData) => {
    return Number(inputData['salary-input']);
};

const getMonthlyIncome = (inputData) => {
    return getDynamicAmount(inputData.dynamicInput.amount) + getSalary(inputData);
};

const getBankDeposit = (inputData, adjunctData, isMonthly) => {
    const depositAmount = Number(inputData['deposit-amount']);
    const depositPeriod = Number(adjunctData.period);
    let depositRate;

    if (inputData.depositRate !== 'other') {
        depositRate = Number(inputData.depositRate);
    } else {
        depositRate = Number(inputData['custom-deposit-percent']);
    }

    const depositAmountPercent = isMonthly
        ? (depositAmount * depositRate) / HUNDRED_PERCENT / MONTHS_IN_YEAR
        : ((depositAmount * depositRate) / HUNDRED_PERCENT / MONTHS_IN_YEAR) * depositPeriod;
    const totalResult = depositAmount + depositAmountPercent;

    return totalResult;
};

const getDaysInMonths = () => {
    const today = new Date();
    const isLeapYear = today.getFullYear() % 4 === 0;
    return isLeapYear ? daysInMonthsLeap[today.getMonth() + 1] : daysInMonths[today.getMonth() + 1];
};

export const calculateSummary = (inputData, adjunctData) => {
    const calculationPeriod = Number(adjunctData.period);

    // Monthly income
    const monthlyIncome = getMonthlyIncome(inputData);

    // Monthly expense
    const monthlyExpense = getDynamicAmount(adjunctData.dynamicInput.amount);

    // Clear income
    const clearIncome = monthlyIncome - monthlyExpense;

    // Daily budget for Month
    const dailyBudgetForMonth = clearIncome / getDaysInMonths();

    // Bank deposit
    let bankDeposit = 0;
    let monthlyDeposit = 0;
    if (inputData.isDepositChecked) {
        bankDeposit = getBankDeposit(inputData, adjunctData);
        monthlyDeposit = getBankDeposit(inputData, adjunctData, true);
    }

    // totalSavings for the period
    const baseSavings = clearIncome * calculationPeriod;
    const totalSavings = bankDeposit ? baseSavings + bankDeposit : baseSavings;

    // Months to reach the goal
    // Handle error
    const savingsGoal = Number(adjunctData['target-input']);
    const goalReachingPeriod = Math.ceil((savingsGoal - monthlyDeposit) / clearIncome);

    // Summary -- Income
    const summaryIncome = getDynamicName(inputData.dynamicInput.name);
    // Summary -- Expenses
    const summaryExpenses = getDynamicName(adjunctData.dynamicInput.name);

    return {
        total: {
            income: monthlyIncome,
            expense: monthlyExpense,
            dailyBudget: Math.floor(dailyBudgetForMonth),
            totalSavings: Math.floor(totalSavings),
            bankDeposit: Math.floor(bankDeposit),
            goalReachingPeriod: goalReachingPeriod
        },
        summary: {
            income: summaryIncome,
            expenses: summaryExpenses
        }
    };
};
