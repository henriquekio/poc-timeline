import React from 'react';
import styled from 'styled-components'
import TimelineItens from "./TimelineItens";
import TimelineResume from "./TimelineResume";

const Timeline = (props) => {
    const TimeLineContainer = styled.div`
        display: grid;
        grid-template-columns: 10fr 2fr;
        height: ${props.height || 0}px;
    `;
    return (
        <TimeLineContainer>
            <TimelineItens/>
            <TimelineResume/>
        </TimeLineContainer>
    );
};

export default Timeline;