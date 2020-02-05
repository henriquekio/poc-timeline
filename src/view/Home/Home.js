import React from 'react';
import styled from 'styled-components';
import Index from "../../components/Timeline";

const Container = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 80%;
justify-content: center;
`;

const Content = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat(2, 1fr);
`;

const Home = () => {
    return (
        <Container>
            <Content>
                <div>
                    <h1>...</h1>
                </div>
                <div>
                    <Index {...{height: 500}}/>
                </div>
            </Content>
        </Container>
    );
};

export default Home;