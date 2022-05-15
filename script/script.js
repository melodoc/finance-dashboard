'use strict';

import { handleTitleContent } from './handleTitleContent/handleTitleContent.js';
import { enableValidation } from './validation/enableValidation.js';
import { inputValidations } from './constants/constants.js';

const dashboardTitle = document.querySelector('.dashboard__title');
handleTitleContent(dashboardTitle);
enableValidation(inputValidations);

const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
};

const insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const startBtn = document.querySelector('#start'),
    plusBtn = document.querySelectorAll('.header__button'),
    incomePlus = plusBtn[0],
    expensesPlus = plusBtn[1],
    additionalIncomes = document.querySelectorAll('#additional_income-item'),
    depositCheck = document.querySelector('#custom-checkbox__input');

const budgetDay = document.querySelector('.budget_day-value'),
    budgetMonth = document.querySelector('.budget_month-value'),
    expensesMonth = document.querySelector('.expenses_month-value'),
    addIncome = document.querySelector('.additional_income-value'),
    addExpenses = document.querySelector('.additional_expenses-value'),
    addExpensesTitle = document.querySelector('.additional_expenses'),
    addExpensesItem = document.querySelector('.additional_expenses-item'),
    targetMonth = document.querySelector('.target_month-value'),
    targetAmount = document.querySelector('.target-amount'),
    salaryAmount = document.querySelector('#salary-input');

let expensesItems = document.querySelectorAll('.expenses-items'),
    expensesTitle = document.querySelector('.expenses-title');

let incomeItems = document.querySelectorAll('.input__wrapper'),
    incomeAmount = document.querySelector('.input__input');

const periodSelect = document.querySelector('.custom-range'),
    periodAmount = document.querySelector('.period-amount'),
    incomePeriod = document.querySelector('.income_period-value'),
    cancelBtn = document.querySelector('#cancel');

const itemExpenses = document.querySelector('.expenses-title'),
    cashExpenses = document.querySelector('.expenses-amount'),
    depositBank = document.querySelector('.custom-select'),
    // its display_none!
    depositAmount = document.querySelector('#deposit-amount'),
    depositPercent = document.querySelector('#deposit-percent');

const incomeData = document.querySelector('#income-data');
const expensesData = document.querySelector('#adjunct-data');
const expensesWrapper = document.querySelector('.expenses-wrapper');
const incomeWrapper = document.querySelector('.header__wrapper');
