import { REDUX_ACTION } from "../constants";

export default function toggleOverlay(payload) {
    return {
        type: REDUX_ACTION.TOGGLE_OVERLAY,
        payload
    }
}