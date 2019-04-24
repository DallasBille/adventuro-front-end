const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_USER":
        return {...state, user: action.payload}
        // this.props.history.push("/home")
        case "LOAD_USER":
        return {...state, user: action.payload}
        case "LOGOUT_USER":
        localStorage.clear()
        console.log("reducer",state, action);
        return {...state, user: {} }
        default:
        return state
    }
}

export default userReducer;
