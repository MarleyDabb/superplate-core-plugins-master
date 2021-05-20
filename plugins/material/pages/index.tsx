import React from 'react';

import { Cards } from "@components"
import { Container } from "../../tailwind/src/components";

const Home: React.FC = () => {
    return (
        <Container>
            <h1>My test</h1>
            <Cards/>
        </Container>
    );
}

export default Home;