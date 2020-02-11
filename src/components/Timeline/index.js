import React from 'react';
import styled from 'styled-components'
import TimelineItens from "./TimelineItens";
import TimelineResume from "./TimelineResume";
import _ from 'lodash';
import moment from "moment";

const TimeLineContainer = styled.div`
        display: grid;
        grid-template-columns: 10fr 2fr;
        height: ${props => props.height || 0}px;  
`;

const Index = ({height, timelineItens}) => {

    const itens = _.chain(timelineItens)
        .sortBy('date')
        .groupBy('date', (item) => moment(item.date).month())
        .map((value, key) => ({
            date: key,
            data: value
        })).value();

    return (
        <TimeLineContainer {...{height}}>
            <TimelineItens {...{itens}}/>
            <TimelineResume {...{itens}}/>
        </TimeLineContainer>
    );
};

export default Index;