import { SummaryCalculatorHelper } from "../utils/SummaryCalculatorHelper.js";

export class SummaryGenerator {
    #inputData;
    #adjunctData;

    constructor(inputData, adjunctData) {
        this.#inputData = inputData;
        this.#adjunctData = adjunctData;
    }

    generateSummary() {
        return {
            income: SummaryCalculatorHelper.getInputLabels(this.#inputData.dynamicInputData),
            expenses: SummaryCalculatorHelper.getInputLabels(this.#adjunctData.dynamicInputData)
        };
    }
}
