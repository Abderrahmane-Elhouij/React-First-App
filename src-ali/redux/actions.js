
export const SOME = 'SOME';
export const SUBSTRACTION = 'SUBSTRACTION';
export const MULTIPLICATION = 'MULTIPLICATION';
export const DIVISION = 'DIVISION';
export const CALCULE = 'CALCULE';

export const Calcule = (op) => {
    return {
        type: CALCULE,
        payload: { op }
    };
};
export const Some = (num1, num2) => {
    return {
        type: SOME,
        payload: { num1, num2 }
    };
};
export const Substraction = (num1, num2) => {
    return {
        type: SUBSTRACTION,
        payload: { num1, num2 }
    };
};
export const Multiplication = (num1, num2) => {
    return {
        type: MULTIPLICATION,
        payload: { num1, num2 }
    };
};
export const Division = (num1, num2) => {
    return {
        type: DIVISION,
        payload: { num1, num2 }
    };
};
