import { REDUX_ACTION } from "../constants"

export const overlayReducer = (state = false, action) => {
    switch (action.type) {
        case REDUX_ACTION.TOGGLE_OVERLAY:
            return action.payload

        default:
            return state
    }
}