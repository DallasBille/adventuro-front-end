import { loadAdventuresAction } from '../Redux/actions/adventureActions'
import { loadAdventureAction } from '../Redux/actions/adventureActions'
import { createAdventureAction } from '../Redux/actions/adventureActions'
import { updateAdventureAction } from '../Redux/actions/adventureActions'

export const fetchAdventures = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/adventures`)
        .then(res => res.json())
        .then(adventures => {
        dispatch(loadAdventuresAction(adventures))
        })
    }
}

export const showAdventure = (urlParam) => {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${urlParam}`)
    .then(res => res.json())
    .then(adventure => {
        dispatch(loadAdventureAction(adventure))
    })
    }
}

export const createAdventure = (formData) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/adventures`, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(adventure => {
            dispatch(createAdventureAction(adventure))
    })
    }
}

export const updateAdventure = (adventure, adventureId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/adventures/${adventureId}`, {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(adventure)
        })
        .then(res => res.json())
        .then(adventure => {
            dispatch(updateAdventureAction(adventure))
    })
    }
}
