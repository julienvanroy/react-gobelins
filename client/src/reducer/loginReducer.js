export const initialState = {
    userConnect: null,
    number1: 0,
    number2: 0,
    hasError: false,
};

const loginReducer = (state, action) => {
    switch (action.type) {
        case '+':
            return {...state, result: parseInt(state.number1, 10) + parseInt(state.number2, 10)};
        case '-':
            return {...state, result: parseInt(state.number1, 10) - parseInt(state.number2, 10)};
        case '*':
            return {...state, result: parseInt(state.number1, 10) * parseInt(state.number2, 10)};
        case '/':
            if(parseInt(state.number2,10) === 0) {
                return {...state, hasError: true};
            }else return {...state, result: parseInt(state.number1, 10) / parseInt(state.number2, 10)};
        case 'reset':
            return {
                result: 0,
                number1: 0,
                number2: 0,
                hasError: false
            };
        case 'setNumber1':
            if(action)
            return {...state, number1: action.number};
        case 'setNumber2':
            return {...state, number2: action.number};
        case 'setHasError':
            return {...state, hasError: action.hasError};
        default:
            return state;
    }
}

export default loginReducer;
