import React from 'react';
import styled from 'styled-components';
import Timeline from "../../components/Timeline";
import moment from "moment";

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

const data = [
    {
        id: 1,
        title: 'teste 123456',
        date: moment().subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 2,
        title: 'teste 123456',
        date: moment().subtract(3, 'years').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 3,
        title: 'teste 123456',
        date: moment().subtract(3, 'months').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 4,
        title: 'teste 123456',
        date: moment().subtract(4, 'days').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 5,
        title: 'teste 123456',
        date: moment().subtract(5, 'months').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 6,
        title: 'teste 123456',
        date: moment().subtract(2, 'years').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 7,
        title: 'teste 123456',
        date: moment().subtract(7, 'months').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        id: 8,
        title: 'teste 123456',
        date: moment().subtract(5, 'months').format('YYYY-MM-DD HH:mm:ss'),
    }, {
        id: 9,
        title: 'teste 123456',
        date: moment().subtract(4, 'days').format('YYYY-MM-DD HH:mm:ss'),
    }, {
        id: 10,
        title: 'teste 123456',
        date: moment().subtract(11, 'months').format('YYYY-MM-DD HH:mm:ss'),
    },
];

const Home = () => {
    return (
        <Container>
            <Content>
                <div>
                    <h1>...</h1>
                </div>
                <div>
                    <Timeline {...{height: 500, timelineItens: data}}/>
                </div>
            </Content>
        </Container>
    );
};

export default Home;