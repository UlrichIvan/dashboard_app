import { REDUX_ACTIONS } from "../constants"

const initState = {
    rows: [],
    selected: [],
    period: 10,
    pages: 1,
    page: 1,
    headers: [],
    // views: { a: 1, b: 10, a_init: 1, index: 1 }
}
export const getIndexes = (len, views, page, period) => {
    return {
        a: views?.a_init + (page - 1) * period,
        b: (views?.a_init - 1) + (page) * period,
        index: page,
        len
    }
}

export const getRowsPeerPages = (rows, views, page, period) => {

    let { a, b } = getIndexes(rows, views, page, period)

    let rowsfiltered = rows.slice(a - 1, b)

    return rowsfiltered
}

export const getPages = (rows, period) => {
    let rowsCount = rows?.length

    let pre_pages = Math.trunc(rowsCount / period)

    let pages = rowsCount % period ? (pre_pages + 1) : pre_pages

    return pages
}


export const paginationReducer = (state = initState, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_ROWS:
            return { ...state, rows: { ...action.payload } }

        case REDUX_ACTIONS.SET_ROWS_PEER_PAGES:

            let { rowsPage } = action.payload

            return { ...state, rowsPage: [...rowsPage] }

        case REDUX_ACTIONS.SET_HEADERS:
            return { ...state, headers: action.payload }

        case REDUX_ACTIONS.SET_VIEWS:
            let { views } = state

            let { period, page } = action.payload

            let newViews = getIndexes(views, page, period)

            return { ...state, views: { ...newViews } }

        case REDUX_ACTIONS.SET_PAGES:

            return { ...state, pages: action.payload }

        case REDUX_ACTIONS.SET_PERIOD:
            return { ...state, period: action.payload?.period }

        case REDUX_ACTIONS.SET_PAGE:
            return { ...state, page: action.payload?.page }

        case REDUX_ACTIONS.SET_PAGE_TO_ROWS_PERIOD:
            let { period: p, ob } = action.payload
            return { ...state, rows: { ...state.rows, [p]: { ...ob } } }

        case REDUX_ACTIONS.SET_SELECTED:
            let { selected } = state
            let newSelected = [...selected, action.payload]
            console.log({ selected, newSelected })
            return { ...state, selected: [...newSelected] }

        default:
            return state
    }
}