import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import TimelineResumeItem from "./TimelineResumeItem";
import {Range, Direction, getTrackBackground} from 'react-range';
import _ from 'lodash';
import moment from "moment";

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
overflow-y: hidden;
display: block; 
content: '';
height: 100%;
width: 100%;
z-index: 999;
`;


const TimelineResume = ({itens}) => {
    const scrollTimelineItens = _.chain(itens)
        .groupBy(item => moment(item.date).year())
        .map((data, index) => ({
            year: index, data
        })).value();
    console.log(scrollTimelineItens);
    const MIN = 0;
    const MAX = 100;
    const STEP = 0.1;

    const [range, setRange] = useState([50, 75]);
    useEffect(() => {
    });

    return (
        <Container>
            <ContainerYears>
                <ScrollTimeLineContainer>
                    <Range
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        direction={Direction.Down}
                        values={range}
                        onChange={values => setRange(values)}
                        renderTrack={({props, children}) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: getTrackBackground({
                                            direction: Direction.Down,
                                            values: range,
                                            colors: ['transparent', 'rgba(90, 115, 163, 0.5)', 'transparent'],
                                            min: MIN,
                                            max: MAX,
                                        }),
                                        alignSelf: 'center'
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({props}) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    width: '16px',
                                    height: '8px',
                                    borderRadius: '5px',
                                    backgroundColor: '#31518c',
                                }}
                            />
                        )}
                    />
                </ScrollTimeLineContainer>
                {scrollTimelineItens.map((item, index) => (<TimelineResumeItem key={index} {...{item}} />))}
            </ContainerYears>
        </Container>
    );
};

export default TimelineResume;