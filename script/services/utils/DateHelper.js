export class DateHelper {
    static #DAYS_IN_MONTHS_LEAP = {
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

    static #MONTHS = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    static #DAYS_IN_MONTHS = {
        ...DateHelper.#DAYS_IN_MONTHS_LEAP,
        2: 28
    };

    static getCurrentMonthDays() {
        const today = new Date();
        const isLeapYear = today.getFullYear() % 4 === 0;
        return isLeapYear
            ? DateHelper.#DAYS_IN_MONTHS_LEAP[today.getMonth() + 1]
            : DateHelper.#DAYS_IN_MONTHS[today.getMonth() + 1];
    }

    static getCurrentMonth() {
        const today = new Date();
        return DateHelper.#MONTHS[today.getMonth() + 1];
    }
}
