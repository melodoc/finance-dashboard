import { USER_INCOME_INPUT_IDS } from "../../constants/constants.js";
import { SummaryCalculatorHelper } from "../utils/SummaryCalculatorHelper.js";

export class MonthlyIncomeCalculator {
    static calculate(data) {
        const salaryInput = Number(data[USER_INCOME_INPUT_IDS.salaryInput]);

        const monthlyIncomeSum = SummaryCalculatorHelper.calculateTotal(data.dynamicInputData);
        return monthlyIncomeSum + salaryInput;
    }
}
