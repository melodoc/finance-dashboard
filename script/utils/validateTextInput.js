const hasLetters = (value) => value.replace(/[^A-Za-zА-Яа-яЁё]/g, '').length > 0;

export const validateTextInput = (value) => {
    const isValid = hasLetters(value);

    let errorText = '';

    if (!isValid) {
        errorText = 'Please, enter name with letters';
    }

    return { isValid, errorText };
};
