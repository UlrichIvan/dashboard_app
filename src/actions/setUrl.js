import { REDUX_ACTIONS } from "../constants";

export default function setUrl(payload) {
    return {
        type: REDUX_ACTIONS.SET_URL,
        payload
    }
}