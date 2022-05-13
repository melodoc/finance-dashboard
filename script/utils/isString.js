export const isString = function (string) {
    if (string && isNaN(parseFloat(string)) && !isFinite(string)) {
        return true;
    } else {
        return false;
    }
};
