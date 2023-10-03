import { REDUX_ACTIONS } from "../constants"

export const urlReducer = (state = "/", action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_URL:
            return action.payload

        default:
            return state
    }
}