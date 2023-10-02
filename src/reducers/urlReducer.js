import { REDUX_ACTION } from "../constants"

export const urlReducer = (state = "/", action) => {
    switch (action.type) {
        case REDUX_ACTION.SET_URL:
            return action.payload

        default:
            return state
    }
}