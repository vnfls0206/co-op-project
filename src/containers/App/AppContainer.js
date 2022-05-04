import React from 'react';
import RoutesContainer from "./RoutesContainer";


const AppContainer = () => {
    const loading = false;
    return (
        <>
            {!loading && <RoutesContainer />}
        </>
    );
};

export default AppContainer;