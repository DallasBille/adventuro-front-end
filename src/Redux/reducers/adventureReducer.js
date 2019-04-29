const initialState = {
    adventures: [],
    adventure: ''
}

const adventureReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_ADVENTURES":
        return {...state, adventures: action.payload}

        case "LOAD_ADVENTURE":
        return {...state, adventure: action.payload}

        case "CREATE_ADVENTURE":
        return {...state, adventure: action.payload}


        default:
        return state
    }
}

export default adventureReducer
