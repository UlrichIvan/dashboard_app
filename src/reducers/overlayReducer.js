import { REDUX_ACTION } from "../constants"

export const overlayReducer = (state = false, action) => {
    switch (action.type) {
        case REDUX_ACTION.OVERLAY_IS_OPEN:
            return action.payload

        default:
            return state
    }
}