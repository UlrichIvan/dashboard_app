import { combineReducers } from "redux";
import { urlReducer } from "./reducers/urlReducer";

const reducer = combineReducers({
    url: urlReducer
})

export default reducer