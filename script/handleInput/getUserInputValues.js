export const getUserInputValues = (
    formElement,
    { sectionSelector, inputSelector, inputIds, dynamicInputIds, rangeSelector, customSelect, checkBox }
) => {
    const section = formElement.querySelector(sectionSelector);
    const inputs = Array.from(section.querySelectorAll(inputSelector));

    const inputData = {
        dynamicInput: {
            name: [],
            amount: []
        }
    };

    const [name, amount] = dynamicInputIds;

    inputs.forEach((incomeInput) => {
        if (inputIds.includes(incomeInput.id)) {
            inputData[incomeInput.id] = incomeInput.value;
        }
        if (incomeInput.id.includes(name)) {
            inputData.dynamicInput.name.push(incomeInput.value);
        }
        if (incomeInput.id.includes(amount)) {
            inputData.dynamicInput.amount.push(incomeInput.value);
        }
    });

    if (rangeSelector) {
        inputData.period = formElement.querySelector(rangeSelector).value;
    }

    if (customSelect) {
        inputData.depositRate = formElement.querySelector(customSelect).value;
        inputData.isDepositChecked = formElement.querySelector(checkBox).checked;
    }

    return inputData;
};
