import { DEPOSIT_RATES } from '../constants/constants.js';

const MONTHS_IN_YEAR = 12;
const HUNDRED_PERCENT = 100;

export class BankDeposit {
    #amount;
    #rate;
    #periodInMonths;

    constructor(amount, baseRate, customRate, periodInMonths) {
        this.#amount = Number(amount);
        this.#rate = baseRate !== DEPOSIT_RATES.Other ? Number(baseRate) : Number(customRate);
        this.#periodInMonths = Number(periodInMonths);
    }

    #getMonthlyRate() {
        return (this.#amount * this.#rate) / HUNDRED_PERCENT / MONTHS_IN_YEAR;
    }

    calculate(isMonthly) {
        const monthlyRate = this.#getMonthlyRate();
        const depositAmountPercent = isMonthly ? monthlyRate : monthlyRate * this.#periodInMonths;

        return this.#amount + depositAmountPercent;
    }
}
