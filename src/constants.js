import Action from './actions';

export const saveFirstNumber = (data) => ({
    type: Action.appendNumber,
    payload: data
})

export const saveSecondNumber = (data) => ({
    type: Action.secondNumber,
    payload: data
})

export const saveOperator = (operator) => ({
    type: Action.operator,
    payload: operator
})

export const clearData = () => ({
    type: Action.clear
}) 

export const calculateResult = () => ({
    type: Action.result
})