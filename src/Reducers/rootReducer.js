import { combineReducers } from "redux";
import entries from "./entryReducer";
import user from "./authReducer";

export default combineReducers({
	entries: entries,
	user: user,
});
