const initialState = {
    adventures: []
}

const adventureReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_ADVENTURES":
        return {...state, adventures: action.payload}

        default:
        return state
    }
}

export default adventureReducer
