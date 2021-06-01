import React from 'react';
import {Container, Footer, Navigation} from "@components";

export const Layout: React.FunctionComponent = ({children}) => {
    return (
        <>
            <Container>
                <Navigation/>
                {children}
                <Footer/>
            </Container>
        </>
    );
};


