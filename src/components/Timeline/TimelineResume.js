import React, {useContext, useRef} from 'react';
import TimelineContext from "./context/TimelineContext";
import styled from 'styled-components'
import TimelineResumeItem from "./TimelineResumeItem";

const Container = styled.div`
padding: 1em;
background: rgba(90, 115, 163, 0.2);
`;

const ContainerYears = styled.div`
position: relative;
display: grid;
grid-template-rows: auto; 
background: white;
border: 1px solid #5a73a3;
border-radius: 4px;
height: 100%;
width: 100%;
`;

const ScrollTimeLineContainer = styled.div`
position: absolute;
overflow-y: scroll;
display: block; 
content: '';
height: 100%;
width: 100%;
z-index: 999;

::-webkit-scrollbar {
  width: 100%;
}

::-webkit-scrollbar-track {
  background: transparent; 
}
 
::-webkit-scrollbar-thumb {
  background: rgba(90, 115, 163, 0.5); 
  height: 48px;
}
`;

const ScrollTimeLine = styled.div`
height: ${props => props.heightScroll || 0}px;
`;

const TimelineResume = () => {
    const scrollRef = useRef(null);
    const {scrollHeight, setScrollTop} = useContext(TimelineContext);

    const updateScrollTop = () => {
      setScrollTop(scrollRef.current.scrollTop)
    };

    return (
        <Container>
            <ContainerYears>
                <ScrollTimeLineContainer onScroll={updateScrollTop} ref={scrollRef}>
                    <ScrollTimeLine heightScroll={scrollHeight}>

                    </ScrollTimeLine>
                </ScrollTimeLineContainer>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
                <TimelineResumeItem/>
            </ContainerYears>
        </Container>
    );
};

export default TimelineResume;