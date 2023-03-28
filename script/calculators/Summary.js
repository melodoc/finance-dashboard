import { DateHelper } from '../utils/DateHelper.js';
import { USER_INCOME_INPUT_IDS, USER_ADJUNCT_INPUT_IDS } from '../constants/constants.js';
import { BankDeposit } from './BankDeposit.js';

export class Summary {
    constructor(inputData, adjunctData) {
        this.inputData = inputData;
        this.adjunctData = adjunctData;
    }

    getCalculatedSum(list) {
        return list.reduce((prevAmount, currentAmount) => Number(prevAmount) + Number(currentAmount), 0);
    }

    getMonthlyIncome() {
        return (
            this.getCalculatedSum(this.inputData.dynamicInput.amount) +
            Number(this.inputData[USER_INCOME_INPUT_IDS.SalaryInput])
        );
    }

    getMonthlyExpense() {
        return this.getCalculatedSum(this.adjunctData.dynamicInput.amount);
    }

    getClearIncome() {
        return this.getMonthlyIncome() - this.getMonthlyExpense();
    }

    getBankDeposit() {
        const bankDepositCalculator = new BankDeposit(
            this.inputData[USER_INCOME_INPUT_IDS.DepositAmount],
            this.inputData.depositRate,
            this.inputData[USER_INCOME_INPUT_IDS.CustomDepositPercent],
            this.adjunctData.period
        );
        const bankDeposit = bankDepositCalculator.calculate();
        const monthlyDeposit = bankDepositCalculator.calculate(true);
        return { bankDeposit, monthlyDeposit };
    }

    getDailyBudget() {
        return Math.floor(this.getClearIncome() / DateHelper.getCurrentMonthDate());
    }

    getGoalReachingPeriod(savingsGoal, clearIncome, monthlyDeposit) {
        return clearIncome ? Math.ceil((savingsGoal - monthlyDeposit) / clearIncome) : 'N/A';
    }

    getInputSummary(inputName) {
        return inputName.join(', ');
    }

    calculate() {
        const calculationPeriod = Number(this.adjunctData.period);
        const savingsGoal = Number(this.adjunctData[USER_ADJUNCT_INPUT_IDS.TargetInput]);
        const isDepositChecked = this.inputData.isDepositChecked;
        const clearIncome = this.getClearIncome();
        const { bankDeposit, monthlyDeposit } = isDepositChecked
            ? this.getBankDeposit()
            : { bankDeposit: 0, monthlyDeposit: 0 };

        const baseSavings = clearIncome * calculationPeriod;
        const totalSavings = bankDeposit ? baseSavings + bankDeposit : baseSavings;

        return {
            total: {
                income: this.getMonthlyIncome(),
                expense: this.getMonthlyExpense(),
                dailyBudget: this.getDailyBudget(),
                totalSavings: Math.floor(totalSavings),
                bankDeposit: Math.floor(bankDeposit),
                goalReachingPeriod: this.getGoalReachingPeriod(savingsGoal, clearIncome, monthlyDeposit)
            },
            summary: {
                income: this.getInputSummary(this.inputData.dynamicInput.name),
                expenses: this.getInputSummary(this.adjunctData.dynamicInput.name)
            }
        };
    }
}
