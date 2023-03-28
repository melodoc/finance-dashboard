export class DateHelper {
    static #daysInMonthsLeap = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    static #month = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    static #daysInMonths = {
        ...this.#daysInMonthsLeap,
        2: 28
    };

    static getCurrentMonthDate() {
        const today = new Date();
        const isLeapYear = today.getFullYear() % 4 === 0;
        return isLeapYear
            ? DateHelper.#daysInMonthsLeap[today.getMonth() + 1]
            : DateHelper.#daysInMonths[today.getMonth() + 1];
    }

    static getCurrentMonth() {
        const today = new Date();
        return DateHelper.#month[today.getMonth() + 1];
    }
}
