import { combineReducers } from "redux";
import { urlReducer } from "./reducers/urlReducer";
import { overlayReducer } from "./reducers/overlayReducer";

const reducer = combineReducers({
    url: urlReducer,
    toggle: overlayReducer
})

export default reducer