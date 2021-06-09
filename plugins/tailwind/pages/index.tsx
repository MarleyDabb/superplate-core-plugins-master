import React from "react";

<% if (answers.testing_plugins === 'amplify') {
  if (test) {
    console.log(test);
  }
} %>


import { Container, Main, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <Main />
            <Cards />
        </Container>
    );
};

export default Home;
