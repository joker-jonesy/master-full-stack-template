const rootReducer =  (state, action) => {

    switch (action.type) {
        case "actionOne":
            return {
                ...state,
                actionOne: action.val
            };

        case "actionTwo":
            return{
            ...state,
                actionTwo: action.val
        }

        case "personSubmission":

            let newList = state.list;
            newList.push(action.val)
            return{
                ...state,
                actionTwo: newList
            }

        default:
            return state;
    }
}

export default rootReducer;