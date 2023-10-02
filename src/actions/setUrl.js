import { REDUX_ACTION } from "../constants";

export default function setUrl(payload) {
    return {
        type: REDUX_ACTION.SET_URL,
        payload
    }
}