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

const getTotalIncome = (inputData) => {
    return getDynamicAmount(inputData.dynamicInput.amount) + getSalary(inputData);
};

const getBankDeposit = (inputData, adjunctData) => {
    const depositAmount = Number(inputData['deposit-amount']);
    const depositPeriod = Number(adjunctData.period);
    let depositRate;

    if (inputData.depositRate !== 'other') {
        depositRate = Number(inputData.depositRate);
    } else {
        depositRate = Number(inputData['custom-deposit-percent']);
    }

    return ((depositAmount * depositRate) / HUNDRED_PERCENT / MONTHS_IN_YEAR) * depositPeriod;
};

const getDaysInMonths = () => {
    const today = new Date();
    const isLeapYear = today.getFullYear() % 4 === 0;
    return isLeapYear ? daysInMonthsLeap[today.getMonth() + 1] : daysInMonths[today.getMonth() + 1];
};

export const calculateSummary = (inputData, adjunctData) => {
    // Monthly income
    const totalIncome = getTotalIncome(inputData);

    // Monthly expense
    const totalAdjunctAmount = getDynamicAmount(adjunctData.dynamicInput.amount);

    // Daily budget for May
    const dailyBudgetForMonth = (totalIncome - totalAdjunctAmount) / getDaysInMonths();

    // Bank deposit
    let bankDeposit;
    if (inputData.isDepositChecked) {
        bankDeposit = getBankDeposit(inputData, adjunctData);
    }

    // totalSavings for the period
    const totalSavings = bankDeposit
        ? (totalIncome - totalAdjunctAmount) * Number(adjunctData.period) +
          bankDeposit +
          Number(inputData['deposit-amount'])
        : (totalIncome - totalAdjunctAmount) * Number(adjunctData.period) + Number(inputData['deposit-amount']);

    // Months to reach the goal
    // Handle error
    const goalReachingPeriod = Math.ceil(Number(adjunctData['target-input']) / totalSavings);

    // Summary -- Income
    const summaryIncome = getDynamicName(inputData.dynamicInput.name);
    // Summary -- Expenses
    const summaryExpenses = getDynamicName(adjunctData.dynamicInput.name);

    return {
        total: {
            income: totalIncome,
            expense: totalAdjunctAmount,
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
