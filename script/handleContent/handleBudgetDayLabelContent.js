import { month } from '../constants/constants.js';

const getCurrentMonth = () => {
    const today = new Date();
    return month[today.getMonth() + 1];
};

export const handleBudgetDayLabelContent = (element) => {
    const currentMonth = getCurrentMonth();

    element.textContent = `${element.textContent} for ${currentMonth}`;
};
