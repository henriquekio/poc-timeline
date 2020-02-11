import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const Container = styled.div`
display: flex;
flex-direction: column;
padding: .5em;
margin: .7em;
overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #EBEBEB;  
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc; 
  }
`;

const ContainerItem = styled.div`
display: grid;
border-bottom: 2px dashed rgba(90, 115, 163, 0.15);
`;

const Item = styled.div`
display: grid;
grid-template-columns: auto 10fr;
padding-top: 1em;
`;

const FooterItem = styled.div`
text-align: right;
color: #7c7c7c;
font-size: .9em;
padding-bottom: 5px;
`;

const Icon = styled.div`
width: 44px;
height: 44px;
border-radius: 50%;
background: #b11438;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-right: .5em;
`;

const Badge = styled.div`
padding: .8em 1em;
display: inline-block;
border-radius: 1.6em;
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
border: solid 1px rgba(177, 20, 56, 0.5);
font-size: 1em;
color: #757575;
`;

const TimelineItens = ({itens = []}) => {
    return (
        <Container>
            {itens.map(((item, index) => (
                <ContainerItem key={index}>
                    {item.data.map(event => (
                        <Item key={event.id}>
                            <Icon>
                                <i className="material-icons">face</i>
                            </Icon>
                            <div>
                                <Badge>
                                    {event.title}
                                </Badge>
                            </div>
                        </Item>
                    ))}
                    <FooterItem>{moment(item.date).format('DD/MM/YYYY')}</FooterItem>
                </ContainerItem>
            )))}
        </Container>
    );
};

export default TimelineItens;