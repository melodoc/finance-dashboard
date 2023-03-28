import { USER_ADJUNCT_INPUT_IDS } from "../../constants/constants.js";

export class GoalReachingPeriodCalculator {
    static calculate(adjunctData, deposit, monthlyNetIncome) {
        const savingsGoal = adjunctData[USER_ADJUNCT_INPUT_IDS.targetInput];
        if (!monthlyNetIncome || monthlyNetIncome <= 0) "N/A";

        const result = Math.ceil((savingsGoal - deposit) / monthlyNetIncome);
        return result > 0 ? result.toFixed() : "N/A";
    }
}
