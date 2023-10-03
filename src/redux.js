import { combineReducers } from "redux";
import { urlReducer } from "./reducers/urlReducer";
import { overlayReducer } from "./reducers/overlayReducer";
import { paginationReducer } from "./reducers/paginationReducer";

const reducer = combineReducers({
    url: urlReducer,
    toggle: overlayReducer,
    pagination:paginationReducer
})

export default reducer