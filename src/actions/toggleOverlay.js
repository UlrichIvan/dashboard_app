import { REDUX_ACTIONS } from "../constants";

export default function toggleOverlay(payload) {
    return {
        type: REDUX_ACTIONS.TOGGLE_OVERLAY,
        payload
    }
}