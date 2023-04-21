import { DateHelper } from "../utils/DateHelper.js";

export class DailyBudgetCalculator {
    static calculate(monthlyNetIncome) {
        const currentMonthDays = DateHelper.getCurrentMonthDays();
        return (monthlyNetIncome / currentMonthDays).toFixed(2);
    }
}
