import {combineReducers} from "redux";

import loadingReducer from "./loading/loading.module"
import userReducer from "./user/user.module";

const rootReducer = combineReducers({

    loading: loadingReducer,
    user: userReducer


});

export default rootReducer;

