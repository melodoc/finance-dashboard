import { DateHelper } from '../utils/DateHelper.js';

export const handleBudgetDayLabelContent = (element) => {
    element.textContent = `${element.textContent} for ${DateHelper.getCurrentMonth()}`;
};
