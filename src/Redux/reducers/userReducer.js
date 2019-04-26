const initialState = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    full_name: "",
    token: "",
    user_adventures: []
}

const userReducer = (state = initialState, action) => {
    let userObj = action.payload
    switch(action.type){
        case "CREATE_USER":
        return {...state,
            id: userObj.id,
            username: userObj.username,
            email: userObj.email,
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            full_name: userObj.full_name,
            user_adventures: userObj.user_adventures
        }

        case "LOAD_USER":
        // let userObj = action.payload
        return {...state,
            id: userObj.id,
            username: userObj.username,
            email: userObj.email,
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            full_name: userObj.full_name,
            user_adventures: userObj.user_adventures
        }

        case "LOGOUT_USER":
        localStorage.clear()
        return {...state,
        id: "",
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        full_name: "",
        token: "",
        user_adventures: []}

        case "LOGIN_USER":
        debugger
        return {...state,
            id: userObj.id,
            username: userObj.username,
            email: userObj.email,
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            full_name: userObj.full_name,
            user_adventures: userObj.user_adventures
        }
        case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      }
        default:
        return state
    }
}


export default userReducer;
