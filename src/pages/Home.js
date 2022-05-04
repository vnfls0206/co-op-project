import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUserData, setUserData, deleteUserData} from "../redux/user/user.module";

const Home = (
    {
        getUserData,
        setUserData,
        deleteUserData,
        userdata,
    }
) => {

    useEffect(() => {
        getUserData("vnfls0206");
    }, []);

    const onClickAdd = () => {
        setUserData({
            id: "vkfks0206",
            name: "김보라",
            password: "1234",
        })
    };

    const onClickDelete = () => {
        deleteUserData({
            id: "vkfks0206"
        })
    };

    return (
        <div>
            {userdata ? (<div>{userdata.name}</div>): <div>loading........</div>}
            <button onClick={onClickAdd}>데이터 추가</button>
            <button onClick={onClickDelete}>데이터 삭제</button>

        </div>
    );
};

export default connect(
    state => ({
        userdata: state.user.userdata,
    }),
    {
        getUserData,
        setUserData,
        deleteUserData,
    }
)(Home);