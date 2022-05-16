'use strict';

import { handleTitleContent } from './handleTitleContent/handleTitleContent.js';
import { handleInput } from './handleInput/handleInput.js';
import { appendInputFromTemplate } from './handleInput/appendInputFromTemplate.js';
import { enableValidation } from './validation/enableValidation.js';
import { onLoadInputValidations, additionalInputValidations } from './constants/constants.js';

const dashboardTitle = document.querySelector('.dashboard__title');
const addSideIncomeButton = document.querySelectorAll('.header__button')[0];
const addMandatoryExpensesButton = document.querySelectorAll('.header__button')[1];
const sideIncomeContainer = addSideIncomeButton.closest('.input-list');
const mandatoryExpensesContainer = addMandatoryExpensesButton.closest('.input-list');

handleTitleContent(dashboardTitle);
appendInputFromTemplate('#side-income', sideIncomeContainer);
appendInputFromTemplate('#mandatory-expenses', mandatoryExpensesContainer);
enableValidation(onLoadInputValidations);

addSideIncomeButton.addEventListener('click', () => {
    handleInput('#side-income', sideIncomeContainer);
    enableValidation(additionalInputValidations);
});

addMandatoryExpensesButton.addEventListener('click', () => {
    handleInput('#mandatory-expenses', mandatoryExpensesContainer);
    enableValidation(additionalInputValidations);
});
