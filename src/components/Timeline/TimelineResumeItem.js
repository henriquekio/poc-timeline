import React from 'react';
import styled from 'styled-components'
import _ from 'lodash';
import moment from "moment";

const ContainerItem = styled.div`
margin-top: .5em;
display: grid;
grid-template-rows: 1fr 4fr;
`;

const ContainerTitle = styled.div`
position: relative;
text-align: center;
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
font-size: .8rem;
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
padding: 0 .5em;
`;

const ContainerPoint = styled.div(({month}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridArea: 'month'+month
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
    const month = _.chain(data)
        .groupBy(({date}) => (moment(date).month() + 1))
        .map((value, index) => ({month: parseInt(index), data: value}))
        .value();

    return (
        <ContainerItem>
            <ContainerTitle>
                <Title>{item.year}</Title>
            </ContainerTitle>
            <ContainerPointItem>
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