import {createAction, handleActions} from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const END_LOADING = 'loading/END_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType  //리퀘스트 요청 타입
);

export const endLoading = createAction(
    END_LOADING,
    requestType => requestType
);

const initialState = {};

const loadingReducer = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [END_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        }),
    },
    initialState
);

export default loadingReducer;
