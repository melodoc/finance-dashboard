import { DEPOSIT_RATES } from "../../constants/constants.js";
import { ElementManager } from "./ElementManager.js";

const elementAttributes = {
    disabled: "disabled",
    required: "required"
};

export class TermDepositManager {
    constructor() {
        this.depositContainer = document.querySelector(".deposit");
        this.customSelectWrapper = this.depositContainer.querySelector(".custom-select__wrapper");
        this.amountInputContainer = this.depositContainer.querySelector(".input-large");
        this.amountInput = this.depositContainer.querySelector("#deposit-amount");
        this.depositBankSelect = this.customSelectWrapper.querySelector("#deposit-bank");
        this.customRateWrapper = this.depositContainer.querySelector(".input__wrapper");
        this.customRateNameInput = this.customRateWrapper.querySelector("#custom-deposit-percent");
        this.customRatePercentInput = this.customRateWrapper.querySelector("#custom-rate");
    }

    showTermDepositInput() {
        ElementManager.show([this.customSelectWrapper, this.amountInput, this.amountInputContainer]);
    }

    hideTermDepositInput() {
        ElementManager.hide([this.customSelectWrapper, this.amountInputContainer, this.amountInput, this.customRateWrapper]);
    }

    showCustomRateInput() {
        ElementManager.show(this.customRateWrapper);
        this.customRateNameInput.removeAttribute(elementAttributes.disabled);
    }

    setRequiredAttributes() {
        this.customRateNameInput.setAttribute(elementAttributes.required, "");
        this.customRatePercentInput.setAttribute(elementAttributes.required, "");
    }

    removeRequiredAttributes() {
        this.customRateNameInput.removeAttribute(elementAttributes.required);
        this.customRatePercentInput.removeAttribute(elementAttributes.required);
    }

    handleAdditionalSelect() {
        if (this.depositBankSelect.value === DEPOSIT_RATES.other) {
            this.showCustomRateInput();
            this.setRequiredAttributes();
        } else {
            ElementManager.hide(this.customRateWrapper);
            this.removeRequiredAttributes();
        }
    }

    setTermDepositInputRequired() {
        this.amountInput.setAttribute(elementAttributes.required, "");
    }

    removeTermDepositInputRequired() {
        this.amountInput.removeAttribute(elementAttributes.required);
    }
}
