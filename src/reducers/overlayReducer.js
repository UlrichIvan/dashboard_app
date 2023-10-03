import { REDUX_ACTIONS } from "../constants"

export const overlayReducer = (state = false, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.TOGGLE_OVERLAY:
            return action.payload

        default:
            return state
    }
}