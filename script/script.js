'use strict';

const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

const isString = function (string) {
  if (string && isNaN(parseFloat(string)) && !isFinite(string)) {
    return true;
  } else {
    return false;
  }
};

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const startBtn = document.querySelector('#start'),
  plusBtn = document.querySelectorAll('.btn_plus'),
  incomePlus = plusBtn[0],
  expensesPlus = plusBtn[1],
  additionalIncomes = document.querySelectorAll('.additional_income-item'),
  depositCheck = document.querySelector('#deposit-check');

const budgetDay = document.querySelector('.budget_day-value'),
  budgetMonth = document.querySelector('.budget_month-value'),
  expensesMonth = document.querySelector('.expenses_month-value'),
  addIncome = document.querySelector('.additional_income-value'),
  addExpenses = document.querySelector('.additional_expenses-value'),
  addExpensesTitle = document.querySelector('.additional_expenses'),
  addExpensesItem = document.querySelector('.additional_expenses-item'),
  targetMonth = document.querySelector('.target_month-value'),
  targetAmount = document.querySelector('.target-amount'),
  salaryAmount = document.querySelector('.salary-amount');

let expensesItems = document.querySelectorAll('.expenses-items'),
  expensesTitle = document.querySelector('.expenses-title');

let incomeItems = document.querySelectorAll('.income-items'),
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount');

const periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  incomePeriod = document.querySelector('.income_period-value'),
  cancelBtn = document.querySelector('#cancel');

let inputText = document.querySelectorAll("input[type='text']");

const itemExpenses = document.querySelector('.expenses-title').value,
  cashExpenses = document.querySelector('.expenses-amount').value,
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');

const incomeData = document.querySelector('.income-data');
const expensesData = document.querySelector('.adjunct-data');

window.onload = function () {
  startBtn.disabled = true;
};

class AppData {
  constructor() {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.incomeMonths = 0;
    this.expensesMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  start() {
    this.budget = salaryAmount.value;
    this.getExpensesIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.calcBudget();
    this.getTargetMonth();

    this.showResult();

    // TODO: Create disabled function

    startBtn.disabled = true;
    startBtn.style.display = 'none';

    cancelBtn.disabled = false;
    cancelBtn.style.display = 'block';

    incomePlus.disabled = true;
    expensesPlus.disabled = true;

    // TODO: Add disabled for inputs

    const inputText = document.querySelectorAll("input[type='text']");

    inputText.forEach((item) => {
      item.disabled = true;
    });
  }

  reset() {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.incomeMonths = 0;
    this.expensesMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    incomePeriod.value = 0;
    periodSelect.value = 1;
    periodAmount.textContent = '1';

    cancelBtn.style.display = 'none';

    startBtn.disabled = false;
    startBtn.style.display = 'block';

    incomePlus.disabled = false;
    expensesPlus.disabled = false;

    inputText = document.querySelectorAll("input[type='text']");

    inputText.forEach((item) => {
      item.disabled = false;
      item.value = '';
    });

    for (let i = 0; i < incomeItems.length; i++) {
      if (i !== 0) {
        incomeItems[i].remove();
      }
    }

    for (let i = 0; i < expensesItems.length; i++) {
      if (i !== 0) {
        expensesItems[i].remove();
      }
    }

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'block';
    }

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'block';
    }
  }

  checkStartBtn() {
    if (!isNumber(salaryAmount.value) || +salaryAmount.value === 0) {
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  }

  checkField(event) {
    const target = event.target;
    console.info(target);
    const numberRegExp = /[^0-9]/g;
    if (target.getAttribute('placeholder') === 'Enter the amount') {
      // TODO: only numbers are accepted
      if (target.value.match(numberRegExp)) {
        target.value = target.value.replace(numberRegExp, '');
      }
    }
    if (target.getAttribute('placeholder') === 'Enter the name') {
      target.value = target.value.replace(/[^а-яА-ЯёЁ.,():"'|;\-]/g, '');
      target.className = `${target.className} wrong-value`;
      //  TODO: only russian is accepted
    }
  }

  showResult() {
    const _this = this;
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = Math.ceil(this.budgetDay);
    expensesMonth.value = this.expensesMonth;
    addExpenses.value = this.addExpenses.join(', ');
    addIncome.value = this.addIncome.join(', ');
    targetMonth.value = Math.ceil(this.getTargetMonth());
    incomePeriod.value = this.calcPeriod();
    periodSelect.addEventListener('change', () => {
      incomePeriod.value = _this.calcPeriod();
    });
  }

  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    const expensesWrapper = document.querySelector('.expenses-wrapper');
    // expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    insertAfter(cloneExpensesItem, expensesWrapper);

    expensesItems = document.querySelectorAll('.expenses-items');

    const cloneExpensesItemInput = cloneExpensesItem.querySelectorAll('input');
    cloneExpensesItemInput.forEach((item) => {
      item.value = '';
    });

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  }

  getExpensesIncome() {
    const _this = this;

    const count = (item) => {
      const startStr = item.className.split('-')[0];
      console.log(startStr);
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const cashAmount = item.querySelector(`.${startStr}-amount`).value;

      if (itemTitle !== '' && cashAmount !== '') {
        _this[startStr][itemTitle] = cashAmount;
      }
    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (const key in _this.income) {
      this.incomeMonths += +this.income[key];
    }
  }

  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    const incomeWrapper = document.querySelector('.income-wrapper');
    // incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    insertAfter(cloneIncomeItem, incomeWrapper);

    incomeItems = document.querySelectorAll('.income-items');

    const cloneIncomeItemInput = cloneIncomeItem.querySelectorAll('input');
    cloneIncomeItemInput.forEach((item) => {
      item.value = '';
    });

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  }

  getAddExpenses() {
    const addExpenses = addExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    });
  }

  getAddIncome() {
    const _this = this;
    additionalIncomes.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== '') {
        _this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() {
    for (const key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  }

  // originally named getBudget

  calcBudget() {
    const monthDeposit = this.moneyDeposit * this.percentDeposit;

    this.budgetMonth =
      Number(this.budget) +
      Number(this.incomeMonths) -
      Number(this.expensesMonth) +
      monthDeposit;

    this.budgetDay = this.budgetMonth / 30;
    console.log('Доп. доход за месяц ', this.incomeMonths);
    console.log('Месячный бюджет: ', this.budgetMonth);
    console.log('Ежедневный бюджет: ', this.budgetDay);
  }

  getTargetMonth() {
    console.log(targetAmount.value, this.budgetMonth);
    if (!!this.budgetMonth) {
      return targetAmount.value / this.budgetMonth;
    }
    return 0;
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

  checkDepositPercent() {
    if (
      depositPercent.value > 100 ||
      depositPercent.value < 1 ||
      !isNumber(depositPercent.value)
    ) {
      alert('Введите корректное значение в поле проценты');
      depositPercent.value = '';
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  }

  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.value = '';
      depositPercent.style.display = 'inline-block';
      depositPercent.disabled = false;
      depositPercent.addEventListener(
        'change',
        appData.checkDepositPercent.bind(appData)
      );
    } else {
      depositPercent.style.display = 'none';
      depositPercent.value = valueSelect;
    }
  }

  calcPeriod() {
    return Number(this.budgetMonth) * Number(periodSelect.value);
  }

  rangeHandler() {
    periodAmount.innerText = periodSelect.value;
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '0';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }

  eventListeners() {
    salaryAmount.addEventListener('input', appData.checkStartBtn);
    startBtn.addEventListener('click', appData.start.bind(appData));
    cancelBtn.addEventListener('click', appData.reset.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.rangeHandler);
    depositCheck.addEventListener(
      'change',
      appData.depositHandler.bind(appData)
    );
    incomeData.addEventListener('change', appData.checkField);
    expensesData.addEventListener('change', appData.checkField);
  }
}

const appData = new AppData();
appData.eventListeners();
