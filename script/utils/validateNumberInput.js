const isNumber = (number) => !isNaN(parseFloat(number)) && isFinite(number);

const hasLetters = (value) => value.replace(/[^A-Za-zА-Яа-яЁё]/g, '').length > 0;

const text = {
    LETTERS: 'Letters are not allowed. Enter number only',
    NUMBERS: 'Enter number e.g. 12.3'
};

export const validateNumberInput = (value) => {
    // Safari support
    const isValid = !hasLetters(value) && isNumber(value);
    let errorText = '';

    if (hasLetters(value)) {
        errorText = text.LETTERS;
    } else if (!isNumber(value)) {
        errorText = text.NUMBERS;
    }

    return { isValid, errorText };
};
