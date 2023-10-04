import { REDUX_ACTIONS } from "../constants"

const initState = {
    rows: [],
    rowsPage: [],
    period: 10,
    pages: 1,
    page: 1,
    headers: [],
    views: { a: 1, b: 10, a_init: 1, index: 1 }
}
export const getIndexes = (views, page, period) => {
    return {
        ...views,
        a: views?.a_init + (page - 1) * period,
        b: (views?.a_init - 1) + (page) * period,
        index: page
    }
}

export const getRowsPeerPages = (rows, views, page, period) => {
    let { a, b } = getIndexes(views, page, period)

    let rowsfiltered = rows.slice(a - 1, b)

    return rowsfiltered
}
export const paginationReducer = (state = initState, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_ROWS:
            return { ...state, rows: action.payload }

        case REDUX_ACTIONS.SET_ROWS_PEER_PAGES:
            let { rowsPage } = action.payload
            console.log({ rowsPage })
            return { ...state, rowsPage: [...rowsPage] }

        case REDUX_ACTIONS.SET_HEADERS:
            return { ...state, headers: action.payload }

        case REDUX_ACTIONS.SET_VIEWS:
            let { views } = state

            let { period, page } = action.payload

            let newViews = getIndexes(views, page, period)

            return { ...state, views: { ...newViews } }

        case REDUX_ACTIONS.SET_PAGES:

            let { rows } = state

            let rowsCount = rows?.length

            let { period: p } = action.payload

            let pre_pages = Math.trunc(rowsCount / p)

            let pos_pages = rowsCount % p


            console.log({ pre_pages, pos_pages })

            return { ...state, pages: pos_pages ? (pre_pages + 1) : pre_pages }

        case REDUX_ACTIONS.SET_PERIOD:
            return { ...state, period: action.payload?.period }

        case REDUX_ACTIONS.SET_PAGE:
            return { ...state, page: action.payload?.page }

        default:
            return state
    }
}