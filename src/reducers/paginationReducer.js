import { REDUX_ACTIONS } from "../constants"

const initState = {
    rows: [],
    rowsPage: [],
    period: 10,
    pages: 1,
    currentPage: 1,
}
export const paginationReducer = (state = initState, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_ROWS:
            return { ...state, rows: action.payload }
        case REDUX_ACTIONS.SET_ROWS_PAGE:
            return action.payload
        case REDUX_ACTIONS.SET_ROWS_PERIOD:
            return action.payload
        case REDUX_ACTIONS.SET_ROWS_PAGES:
            return action.payload
        case REDUX_ACTIONS.SET_ROWS_CUREENT_PAGE:
            return action.payload

        default:
            return state
    }
}