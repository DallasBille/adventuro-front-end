const initialState = {
    adventures: [],
    adventure: {}
}

const adventureReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_ADVENTURES":
        return {...state, adventures: action.payload}

        case "LOAD_ADVENTURE":
        return {...state, adventure: action.payload}

        case "CREATE_ADVENTURE":
        let newAdv = action.payload
        let addedAdv = [newAdv, ...state.adventures]
        return {...state, adventures: addedAdv}

        case "UPDATE_ADVENTURE":
        const newAdventures = state.adventures.map(adventure => {
            if(adventure.id === action.payload.id){
                return {...adventure, ...action.payload}
            } else {
                return adventure
            }
        })
        return {...state, adventures: newAdventures}

        case "ADD_DONATION":
        let advCopy = [...state.adventure]
        advCopy.donations = [...advCopy.donations, action.payload]
        let test = {...state, adventures: advCopy }
        debugger
        return {...state, adventures: advCopy }
        default:
        return state
    }
}

export default adventureReducer
