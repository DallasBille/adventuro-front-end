const initialState = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    full_name: "",
    token: "",
    user_adventures: [],
    donation_adventures: [],
    user_donations: []
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
            user_adventures: userObj.user_adventures,
            donation_adventures: userObj.donation_adventures,
            user_donations: userObj.user_donations
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
            user_adventures: userObj.user_adventures,
            donation_adventures: userObj.donation_adventures,
            user_donations: userObj.user_donations

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
        user_adventures: [],
        donation_adventures: [],
        user_donations: []
    }


        case "LOGIN_USER":
        return {...state,
            id: userObj.id,
            username: userObj.username,
            email: userObj.email,
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            full_name: userObj.full_name,
            user_adventures: userObj.user_adventures,
            donation_adventures: userObj.donation_adventures,
            user_donations: userObj.user_donations

        }
        case "NEW_ADVENTURE":
        let newAdventure = action.payload
        let addedAdv = [...state.user_adventures, newAdventure]
        return {...state, user_adventures: addedAdv}

        case "NEW_DONATION":
        let newDonation = action.payload
        let addedDon = [newDonation ,...state.user_donations]
        return {...state, user_donations: addedDon}

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
