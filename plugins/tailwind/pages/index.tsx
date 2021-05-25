import React from "react";


import { Container, Main, Footer, Cards, Navigation } from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <Navigation/>
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
