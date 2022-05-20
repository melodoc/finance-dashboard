'use strict';

import { handleTitleContent } from './handleTitleContent/handleTitleContent.js';
import { appendInput } from './handleInput/handleInput.js';
import { enableValidation } from './validation/enableValidation.js';
import { validationProps } from './constants/constants.js';
import {setIncomeProps} from './handleInput/setInputProps.js';
const dashboardTitle = document.querySelector('.dashboard__title');

const addSideIncomeButton = document.querySelectorAll('.header__button')[0];
const sideIncomeTemplate = document.querySelector('#side-income').content;
const sideIncomeContainer = addSideIncomeButton.closest('.input-list');

const addMandatoryExpensesButton = document.querySelectorAll('.header__button')[1];
const mandatoryExpensesTemplate = document.querySelector('#mandatory-expenses').content;
const mandatoryExpensesContainer = addMandatoryExpensesButton.closest('.input-list');

const formClass = '.dashboard__form';

const sideIncomeProps = setIncomeProps(sideIncomeTemplate, sideIncomeContainer, addSideIncomeButton);
const mandatoryExpensesProps = setIncomeProps(mandatoryExpensesTemplate, mandatoryExpensesContainer, addMandatoryExpensesButton);

handleTitleContent(dashboardTitle);

appendInput(sideIncomeProps);
appendInput(mandatoryExpensesProps);

enableValidation(formClass, validationProps);

addSideIncomeButton.addEventListener('click', () => {
    appendInput(sideIncomeProps, true);
});

addMandatoryExpensesButton.addEventListener('click', () => {
    appendInput(mandatoryExpensesProps, true);
});
