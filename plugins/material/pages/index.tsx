import React from 'react';

import { Cards } from "@components"
import { NavigationBar } from "@components";


const Home: React.FC = () => {

    return (
        <>
            <NavigationBar/>
            <div className={'container'}>
                <h1>My test</h1>
                <Cards/>
            </div>
        </>
    );
}

export default Home;