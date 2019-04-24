import { createUserAction } from "../Redux/actions/userActions"

const signUpNewUser = (userObj) =>
    dispatch =>
    fetch(`http://localhost:3000/api/v1/users`,{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(user => {
            dispatch(createUserAction(user.user))
            localStorage.setItem("token", user.jwt)
        })


export { signUpNewUser }
