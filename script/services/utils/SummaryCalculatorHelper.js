import { DateHelper } from "../../services/utils/DateHelper.js";

export class SummaryCalculatorHelper {
    static calculateTotal(dynamicInputList) {
        return dynamicInputList.reduce((previous, dynamicInput) => previous + parseInt(dynamicInput.value), 0);
    }

    static getInputLabels(dynamicInputList) {
        return dynamicInputList.map((dynamicInput) => dynamicInput.label).join(", ");
    }

    static appendMonthToLabel(element) {
        element.textContent = `${element.textContent} for ${DateHelper.getCurrentMonth()}`;
    }
}
