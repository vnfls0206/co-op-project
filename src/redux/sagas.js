import {all} from 'redux-saga/effects';
import {userSaga} from "./user/user.module";


export default function* rootSaga() {
    yield all([
        userSaga(),
    ]);
};