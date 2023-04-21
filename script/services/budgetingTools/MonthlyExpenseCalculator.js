import { SummaryCalculatorHelper } from "../utils/SummaryCalculatorHelper.js";

export class MonthlyExpenseCalculator {
    static calculate(data) {
        return SummaryCalculatorHelper.calculateTotal(data.dynamicInputData);
    }
}
