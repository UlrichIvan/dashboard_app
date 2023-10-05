import { DEFAULT_VIEW, REDUX_ACTIONS, rowsOptions } from "../constants";
import { getIndexes, getPages, getRowsPeerPages } from "../reducers/paginationReducer";

export const setHeaders = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_HEADERS,
        payload
    }
}


export const setRows = (payload) => {

    let rows = {}

    // init rows
    for (const options of rowsOptions) {

        let { value: period } = options

        period = parseInt(period, 10)

        rows[period] = {
            page: 1,
            rowsPages: [],
            period,
            pages: getPages(payload, period),// get pages for each period
        }


        let pages = rows[period].pages

        // get rows for each page index associate to specific period
        for (let page = 1; page <= pages; page++) {

            let rowsPage = getRowsPeerPages(payload, DEFAULT_VIEW, page, period)?.map((row) => ({
                row,
                checked: false
            }))

            rows[period].rowsPages.push({
                [page]: rowsPage,
                views: getIndexes(payload.length, DEFAULT_VIEW, page, period),
            })
        }

    }

    // console.log({ rows })

    return {
        type: REDUX_ACTIONS.SET_ROWS,
        payload: rows
    }
}

export const setUrl = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_URL,
        payload
    }
}

export const setPeriod = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_PERIOD,
        payload
    }
}

export const setViews = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_VIEWS,
        payload
    }
}

export const toggleOverlay = (payload) => {
    return {
        type: REDUX_ACTIONS.TOGGLE_OVERLAY,
        payload
    }
}

export const setPages = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_PAGES,
        payload
    }
}

export const setPage = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_PAGE,
        payload
    }
}


export const setRowsPeerPages = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_ROWS_PEER_PAGES,
        payload
    }
}

export const setInitRowsPeerPages = () => {
    return {
        type: REDUX_ACTIONS.INIT_ROWS_PEER_PAGES,
    }
}

export const getRows = (rows, period) => {

    let { rowsPages, page } = rows[period]

    let row = rowsPages?.find((data => {
        return data?.hasOwnProperty(page)
    }))

    return row ? row[page] : []
}

export const setPageByPeriod = (rows, page, period) => {

    let ob = rows[period]

    ob.page = page

    return {
        type: REDUX_ACTIONS.SET_PAGE_TO_ROWS_PERIOD,
        payload: { ob, period }
    }
}

export const setSelected = (row) => {

    return {
        type: REDUX_ACTIONS.SET_SELECTED,
        payload: row
    }
}

export const getViewByPeriodAndPage = (rows, period) => {

    let { rowsPages, page } = rows[period]

    let row = rowsPages?.find((data => {
        return data?.hasOwnProperty(page)
    }))

    return row ? row["views"] : null
}

export const getRowByPeriodAndPage = (rows, period, index) => {

    let { rowsPages, page } = rows[period]


    let row = rowsPages?.find((data => {
        return data?.hasOwnProperty(page)
    }))

    return row ? row[page][index] : null
}