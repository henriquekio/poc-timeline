import React from 'react';
import styled from 'styled-components'
import TimelineItens from "./TimelineItens";
import TimelineResume from "./TimelineResume";
import TimelineContextProvider from '../Timeline/context/TimelineContextProvider';

const TimeLineContainer = styled.div`
        display: grid;
        grid-template-columns: 10fr 2fr;
        height: ${props => props.height || 0}px;  
`;

const Index = ({height}) => {
    return (
        <TimelineContextProvider>
            <TimeLineContainer {...{height}}>
                <TimelineItens/>
                <TimelineResume/>
            </TimeLineContainer>
        </TimelineContextProvider>
    );
};

export default Index;