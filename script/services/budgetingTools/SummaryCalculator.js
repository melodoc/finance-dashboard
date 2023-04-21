import { BankDepositCalculator } from "./BankDepositCalculator.js";
import { MonthlyIncomeCalculator } from "./MonthlyIncomeCalculator.js";
import { MonthlyExpenseCalculator } from "./MonthlyExpenseCalculator.js";
import { DailyBudgetCalculator } from "./DailyBudgetCalculator.js";
import { GoalReachingPeriodCalculator } from "./GoalReachingPeriodCalculator.js";
import { SummaryGenerator } from "./SummaryGenerator.js";
import { SummaryUserInputValuesExtractor } from "./SummaryUserInputValuesExtractor.js";

export class SummaryCalculator {
    constructor(formElement) {
        const summaryUserInputValuesExtractor = new SummaryUserInputValuesExtractor(formElement);
        this.inputData = summaryUserInputValuesExtractor.extractIncomeData();
        this.adjunctData = summaryUserInputValuesExtractor.extractAdjunctData();

        this.period = this.adjunctData.period;

        this.monthlyIncome = MonthlyIncomeCalculator.calculate(this.inputData);
        this.monthlyExpense = MonthlyExpenseCalculator.calculate(this.adjunctData);
        this.bankDeposit = new BankDepositCalculator(this.inputData, this.adjunctData).calculate();

        this.monthlyNetIncome = this.monthlyIncome - this.monthlyExpense;
        this.totalSavings = Math.floor(this.monthlyNetIncome * this.period + this.bankDeposit);

        this.dailyBudget = DailyBudgetCalculator.calculate(this.monthlyNetIncome);
        this.goalReachingPeriod = GoalReachingPeriodCalculator.calculate(
            this.adjunctData,
            this.bankDeposit,
            this.monthlyNetIncome
        );

        this.summary = new SummaryGenerator(this.inputData, this.adjunctData).generateSummary();
    }

    calculate() {
        return {
            total: {
                income: this.monthlyIncome,
                expense: this.monthlyExpense,
                dailyBudget: this.dailyBudget,
                totalSavings: this.totalSavings,
                bankDeposit: this.bankDeposit,
                goalReachingPeriod: this.goalReachingPeriod
            },
            summary: this.summary
        };
    }
}
