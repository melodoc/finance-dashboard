import { incomeProps } from '../constants/constants.js';

const INPUT_NUMBER_LIMITS = 10;

export const setIncomeProps = ({template, container, button}) => {
    return {
        elements: {
            template,
            container,
            button
        },
        selectors: incomeProps,
        params: {
            inputNumberLimit: INPUT_NUMBER_LIMITS
        }
    };
};
