import { createDonationAction } from '../Redux/actions/donationActions'

export const createDonation = (donation) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/donations`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(donation)
        })
        .then(res => res.json())
        .then(donation => {
            console.log(donation)
            dispatch(createDonationAction(donation))
    })
    }
}
