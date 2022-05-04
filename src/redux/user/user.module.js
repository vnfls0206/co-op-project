import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest, all, takeEvery} from 'redux-saga/effects'

import * as Api from '../../shared/api/firebaseAxiosApi';
import createRequestSaga from "../helpers/createRequestSaga";

const GET_USER_DATA = 'user/GET_USER_DATA';
const GET_USER_DATA_SUCCESS = 'user/GET_USER_DATA_SUCCESS';
//const GET_USER_DATA_FAILURE = 'user/GET_USER_DATA_FAILURE';

const SET_USER_DATA = 'user/SET_USER_DATA';
const DELETE_USER_DATA = 'user/DELETE_USER_DATA';

export const getUserData = createAction(GET_USER_DATA);
export const setUserData = createAction(SET_USER_DATA);
export const deleteUserData = createAction(DELETE_USER_DATA);


const getUserDataSaga = createRequestSaga(GET_USER_DATA, Api.getUserData);      //비동기 통신을 요청할 때 리퀘스트를 만들어준다
const setUserDataSaga = createRequestSaga(SET_USER_DATA, Api.setUserData);
const deleteUserDataSaga = createRequestSaga(DELETE_USER_DATA, Api.setUserData);

export function* userSaga() {
    yield takeEvery(GET_USER_DATA, getUserDataSaga);
    yield takeEvery(SET_USER_DATA, setUserDataSaga);
    yield takeEvery(DELETE_USER_DATA, deleteUserDataSaga);
};

const initialState = {  //초기 상태에는 어떠한 데이터도 없기때문에 비워준다
    userdata: null,
};

const userReducer = handleActions(
    {
    [GET_USER_DATA_SUCCESS]: (state, action) => ({  //데이터를 수신에 성공하면 userdata 에 넣어준다
    ...state,
    userdata: action.payload.val()
    })

    },
    initialState
);


export default userReducer;