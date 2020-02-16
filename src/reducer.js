import Action from './actions';

let initialState = {
    expressionToSolve: '',
    firstNumber: '',
    secondNumber: '',
    operator: '',
    result: '',
    count: 0
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Action.appendNumber: {
            return { firstNumber: action.payload, result: '' }
        }
        case Action.secondNumber: {
            return { ...state, secondNumber: action.payload, result: '' }
        }
        case Action.operator: {
            if (state.secondNumber) {
                if (state.expressionToSolve)
                    state.expressionToSolve += state.firstNumber + state.operator + state.secondNumber
                else
                    state.expressionToSolve = state.firstNumber + state.operator + state.secondNumber
                console.warn('expression ', state.expressionToSolve)
                return {
                    ...state, operator: action.payload,
                    secondNumber: '', firstNumber: '', expressionToSolve: state.expressionToSolve
                }
            }
            else if (initialState.secondNumber == '') {
                return { ...state, operator: action.payload }
            }
        }
        case Action.clear: {
            return {
                expressionToSolve: '', firstNumber: '', secondNumber: '',
                operator: '', count: 0, result: ''
            }
        }
        case Action.result: {
            if (state.expressionToSolve) {
                state.result = state.expressionToSolve + state.firstNumber + state.operator + state.secondNumber
            } else
                state.result = state.firstNumber + state.operator + state.secondNumber
            return {
                result: eval(state.result), expressionToSolve: state.result, firstNumber: '', secondNumber: '',
                operator: '', count: 0
            }
        }
        default:
            console.warn('default ')
            break;
    }
    return initialState;
}