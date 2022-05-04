import React from 'react';
import persistor, {store} from "../../redux/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";

const ReduxContainer = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
};

export default ReduxContainer;