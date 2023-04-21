import { USER_INCOME_INPUT_IDS, DEPOSIT_RATES } from "../../constants/constants.js";

const MONTHS_IN_YEAR = 12;
const HUNDRED_PERCENT = 100;

export class BankDepositCalculator {
    #amount;
    #customDepositPercent;
    #periodInMonths;
    #isDepositChecked;
    #depositRate;
    #rate;
    #monthlyReturn;

    constructor(inputData, adjunctData) {
        const { depositRate, isDepositChecked } = inputData;
        const { period } = adjunctData;

        this.#amount = Number(inputData[USER_INCOME_INPUT_IDS.depositAmount]);
        this.#customDepositPercent = Number(inputData[USER_INCOME_INPUT_IDS.customDepositPercent]);
        this.#periodInMonths = Number(period);

        this.#isDepositChecked = isDepositChecked;
        this.#depositRate = depositRate;
   
        this.#rate = this.#calculateRate();
        this.#monthlyReturn = this.#calculateMonthlyReturn();
    }

    #calculateMonthlyReturn() {
        return (this.#amount * this.#rate) / HUNDRED_PERCENT / MONTHS_IN_YEAR;
    }

    #calculateRate() {
        return this.#depositRate !== DEPOSIT_RATES.other ? Number(this.#depositRate) : this.#customDepositPercent;
    }

    calculate() {
        if (!this.#isDepositChecked) return 0;
        return Math.floor(this.#amount + this.#monthlyReturn * this.#periodInMonths);
    }
}
