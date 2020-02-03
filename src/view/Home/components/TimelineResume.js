import React from 'react';
import styled from 'styled-components'
import TimelineResumeItem from "./TimelineResumeItem";

const Container = styled.div`
padding: 1em;
background: rgba(90, 115, 163, 0.2);
`;

const ContainerYears = styled.div`
display: grid;
grid-template-rows: auto;
background: white;
border: 1px solid #5a73a3;
border-radius: 4px;
height: 100%;
width: 100%;
`;

const TimelineResume = () => {
    return (
        <Container>
            <ContainerYears>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
            </ContainerYears>
        </Container>
    );
};

export default TimelineResume;