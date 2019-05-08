const initialState = {
    userErrors: [],
    adventureErrors: []
}

const errorsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ERRORS":
        return {...state, userErrors: [action.payload]}

        case "SET_ADVENTURE_ERRORS":
        return {...state, adventureErrors: [action.payload]}

        default:
        return state
    }
}
export default errorsReducer
