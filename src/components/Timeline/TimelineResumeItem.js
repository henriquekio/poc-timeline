import React from 'react';
import styled from 'styled-components'
import {chain} from 'lodash';
import moment from "moment";

const ContainerItem = styled.div`
position: relative;
display: grid;
grid-template-rows: 2fr;
`;

const ContainerTitle = styled.div`
position: absolute;
text-align: center;
top: 0;
right: 0;
left: 0;
display: inline-block;
margin: 0 auto;
&:before{
position: absolute;
content: '';
width: 99%;
border: .5px solid #5a73a3;
top: 50%;
left: 0;
height: 0;
}
`;

const Title = styled.p`
position: relative;
display: inline-block;
margin: 0;
padding: 0 .2em;
color: #5a73a3;
font-size: .6rem;
font-weight: 500;
background: white;
z-index: 2;
`;

const ContainerPointItem = styled.div`
display: grid;
grid-template-areas: "month1"
"month2"
"month3"
"month4"
"month5"
"month6"
"month7"
"month8"
"month9"
"month10"
"month11"
"month12";
width: 40px;
`;

const ContainerPoint = styled.div(({month}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridArea: 'month' + month
}));

const Point = styled.div`
width: 3px;
height: 3px;
border-radius: 50%;
background: #5a73a3;
margin: 1px;
`;

const TimelineResumeItem = ({item = {}}) => {
    const {data} = item;
    const month = chain(data)
        .groupBy(({date}) => (moment(date).month() + 1))
        .map((value, index) => ({month: parseInt(index), data: value}))
        .value();

    return (
        <ContainerItem>
            <ContainerPointItem>
                <ContainerTitle>
                    <Title>{item.year}</Title>
                </ContainerTitle>
                {month.map(({month, data}) => (
                    <ContainerPoint key={month} {...{month}}>
                        {data.map((data, index) => <Point key={index}/>)}
                    </ContainerPoint>
                ))}
            </ContainerPointItem>
        </ContainerItem>
    );
};

export default TimelineResumeItem;