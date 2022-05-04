import axios from "axios";
import db from "./fbase";
import {get, set , ref, child} from "firebase/database";


export const getData = id => {
    return
};


export const getUserData = id => {
    return get(child(ref(db), `/user/${id}`));
};

export const setUserData = payload => {
    return set(ref(db, `user/${payload.id}`), (({id, ...etc}) => etc)(payload));
};


export const deleteUserData = id => {
    return set(ref(db, `user/${id}`), null);
}