import { combineReducers } from "redux";
import authorizationReducers from "./authorizationReducers";
import studentListReducers from "./studentListReducers";
import studentCreateReducers from "./studentCreateReducers";



export default combineReducers({
    authorizationResponse: authorizationReducers,
    studentListResponse: studentListReducers,
    studentCreateResponse: studentCreateReducers
});