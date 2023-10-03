import { REDUX_ACTIONS } from "../constants";

export default function setRows(payload) {
    return {
        type: REDUX_ACTIONS.SET_ROWS,
        payload
    }
}