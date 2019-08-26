const initialState = {
  user_id: null,
  adventure_id: null,
  amount: null
};

const donationReducer = (state = initialState, action) => {
  let donationObj = action.payload;
  switch (action.type) {
    case "CREATE_DONATION":
      console.log("DONATION", donationObj);
      return {
        ...state,
        user_id: donationObj.user_id,
        adventure_id: donationObj.adventure_id,
        amount: donationObj.amount
      };
    default:
      return state;
  }
};
export default donationReducer;
