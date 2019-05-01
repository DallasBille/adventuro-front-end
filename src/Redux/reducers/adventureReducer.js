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

        case "UPDATE_ADVENTURE":
        const newAdventures = state.adventures.map(adventure => {
            if(adventure.id === action.payload.id){
                return {...adventure, ...action.payload}
            } else {
                return adventure
            }
        })
        return {...state, adventures: newAdventures}


        default:
        return state
    }
}

export default adventureReducer
