import { REDUX_ACTIONS } from "../constants";

export const setHeaders = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_HEADERS,
        payload
    }
}


export const setRows = (payload) => {
    return {
        type: REDUX_ACTIONS.SET_ROWS,
        payload
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