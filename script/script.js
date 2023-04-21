"use strict";

import { TitleContentManager } from "./services/managers/TitleContentManager.js";
import { SummaryCalculatorHelper } from "./services/utils/SummaryCalculatorHelper.js";
import { InputManager } from "./services/managers/InputManager.js";
import { FormValidator } from "./services/validators/FormValidator.js";
import { TermDepositManager } from "./services/managers/TermDepositManager.js";

const dashboardTitle = document.querySelector(".dashboard__title");

const addSideIncomeButton = document.querySelectorAll(".header__button")[0];
const sideIncomeTemplate = document.querySelector("#side-income").content;
const sideIncomeContainer = addSideIncomeButton.closest(".input-list");

const addMandatoryExpensesButton = document.querySelectorAll(".header__button")[1];
const mandatoryExpensesTemplate = document.querySelector("#mandatory-expenses").content;
const mandatoryExpensesContainer = addMandatoryExpensesButton.closest(".input-list");

const termDepositCheckBox = document.querySelector("#custom-checkbox__input");
const depositBankSelect = document.querySelector("#deposit-bank");

const goalAchievementPeriodInput = document.querySelector("#goal-period");
const goalAchievementPeriodTitle = document.querySelector(".custom-range__title");

const budgetDayResultLabel = document.querySelector("[for=\"budget_day-result\"]");

TitleContentManager.updateContent(dashboardTitle);

const termDepositManager = new TermDepositManager();

const sideIncomeInputManager = new InputManager({
    template: sideIncomeTemplate,
    container: sideIncomeContainer,
    button: addSideIncomeButton
});

const mandatoryExpensesInputManager = new InputManager({
    template: mandatoryExpensesTemplate,
    container: mandatoryExpensesContainer,
    button: addMandatoryExpensesButton
});

const appendInputs = (inputCount, callbackFn) => {
    Array(inputCount)
        .fill()
        .forEach(() => callbackFn());
};

const NUMBER_OF_INPUTS = {
    sideIncome: 1,
    mandatoryExpenses: 2
};

appendInputs(NUMBER_OF_INPUTS.sideIncome, () => sideIncomeInputManager.append());
appendInputs(NUMBER_OF_INPUTS.mandatoryExpenses, () => mandatoryExpensesInputManager.append());

termDepositCheckBox.setAttribute("checked", true);
termDepositManager.showTermDepositInput();

const formValidator = new FormValidator();
formValidator.enableValidation();

addSideIncomeButton.addEventListener("click", () => {
    sideIncomeInputManager.append();
    formValidator.updateInputList();
    formValidator.updateEventListeners();
});

addMandatoryExpensesButton.addEventListener("click", () => {
    mandatoryExpensesInputManager.append();
    formValidator.updateInputList();
    formValidator.updateEventListeners();
});

termDepositCheckBox.addEventListener("change", () => {
    if (termDepositCheckBox.checked) {
        termDepositManager.showTermDepositInput();
        termDepositManager.setTermDepositInputRequired();
        termDepositManager.handleAdditionalSelect();
        formValidator.updateInputList();
    } else {
        termDepositManager.hideTermDepositInput();
        termDepositManager.removeTermDepositInputRequired();
        termDepositManager.removeRequiredAttributes();
        formValidator.updateInputList();
    }
});

depositBankSelect.addEventListener("change", () => {
    termDepositManager.handleAdditionalSelect();
});

goalAchievementPeriodInput.addEventListener("input", () => {
    goalAchievementPeriodTitle.textContent = goalAchievementPeriodInput.value;
});

SummaryCalculatorHelper.appendMonthToLabel(budgetDayResultLabel);
