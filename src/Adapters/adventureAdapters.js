import { loadAdventuresAction } from '../Redux/actions/adventureActions'

export const fetchAdventures = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/adventures`)
        .then(res => res.json())
        .then(adventures => {
        dispatch(loadAdventuresAction(adventures))
        })
    }
}
