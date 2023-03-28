import { DASHBOARD_FORM_SELECTORS, USER_INCOME_INPUT_IDS, USER_ADJUNCT_INPUT_IDS } from "../../constants/constants.js";

const USER_INPUT_PROPS = {
    income: {
        sectionSelector: "#income-data",
        inputSelector: DASHBOARD_FORM_SELECTORS.input.element,
        inputIds: [
            USER_INCOME_INPUT_IDS.salaryInput,
            USER_INCOME_INPUT_IDS.depositAmount,
            USER_INCOME_INPUT_IDS.customRate,
            USER_INCOME_INPUT_IDS.customDepositPercent
        ],
        dynamicInputClassName: {
            label: USER_INCOME_INPUT_IDS.incomeNameInput,
            value: USER_INCOME_INPUT_IDS.incomeAmountInput
        },
        rangeSelector: undefined,
        customSelect: "#deposit-bank",
        checkBox: "#custom-checkbox__input"
    },
    adjunct: {
        sectionSelector: "#adjunct-data",
        inputSelector: DASHBOARD_FORM_SELECTORS.input.element,
        inputIds: [USER_ADJUNCT_INPUT_IDS.targetInput],
        dynamicInputClassName: {
            label: USER_ADJUNCT_INPUT_IDS.expensesName,
            value: USER_ADJUNCT_INPUT_IDS.expensesAmount
        },
        rangeSelector: "#goal-period",
        customSelect: undefined,
        checkBox: undefined
    }
};

export class SummaryUserInputValuesExtractor {
    constructor(formElement) {
        this.formElement = formElement;
    }

    extractIncomeData() {
        return this.#getUserInputValues(USER_INPUT_PROPS.income);
    }

    extractAdjunctData() {
        return this.#getUserInputValues(USER_INPUT_PROPS.adjunct);
    }

    #getUserInputElements(options) {
        const { label, value } = options.dynamicInputClassName;

        const section = this.formElement.querySelector(options.sectionSelector);
        const inputs = Array.from(section.querySelectorAll(options.inputSelector));
        const dynamicInputs = Array.from(section.querySelectorAll(`.${label}, .${value}`));

        return { inputs, dynamicInputs };
    }

    #getDynamicInputsData(dynamicInputs) {
        return dynamicInputs.reduce((dynamicInputData, input, index) => {
            if (index % 2 !== 0) {
                dynamicInputData.push({
                    id: dynamicInputData.length,
                    value: input.value,
                    label: dynamicInputs[index - 1].value
                });
            }
            return dynamicInputData;
        }, []);
    }

    #getUserInputValues(options) {
        const { inputs, dynamicInputs } = this.#getUserInputElements(options);
        const { inputIds, rangeSelector, customSelect, checkBox } = options;

        const inputData = {
            dynamicInputData: this.#getDynamicInputsData(dynamicInputs)
        };

        inputs.forEach((input) => {
            const id = input.id;
            if (inputIds.includes(id)) {
                inputData[id] = input.value;
            }
        });

        if (rangeSelector) {
            inputData.period = this.formElement.querySelector(rangeSelector).value;
        }

        if (customSelect) {
            inputData.depositRate = this.formElement.querySelector(customSelect).value;
            inputData.isDepositChecked = this.formElement.querySelector(checkBox).checked;
        }

        return inputData;
    }
}
