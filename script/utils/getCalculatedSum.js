export const getCalculatedSum = (list) => {
    return list.reduce((prevAmount, currentAmount) => Number(prevAmount) + Number(currentAmount), 0);
};