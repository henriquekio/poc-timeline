import React from 'react';
import styled from 'styled-components'

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
grid-template-rows: repeat(12, 1fr);
`;

const Point = styled.div`

`;

const TimelineResumeItem = () => {
    return (
        <ContainerItem>
            <ContainerTitle>
                <Title>2029</Title>
            </ContainerTitle>
            <ContainerPointItem>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </ContainerPointItem>
        </ContainerItem>
    );
};

export default TimelineResumeItem;