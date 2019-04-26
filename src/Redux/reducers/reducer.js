const initialState = {
    user: {},
    adventures: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_USER":
        return {...state, user: action.payload}

        case "LOAD_USER":
        return {...state, user: action.payload}

        case "LOGOUT_USER":
        localStorage.clear()
        return {...state, user: {} }

        case "LOGIN_USER":
        return {...state, user: action.payload}

        case "LOAD_ADVENTURES":
        return {...state, adventures: action.payload}

        default:
        return state
    }
}

export default reducer;
