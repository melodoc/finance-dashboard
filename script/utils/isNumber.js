export const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};
