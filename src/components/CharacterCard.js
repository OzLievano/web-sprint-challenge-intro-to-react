import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader
  } from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
  justify-content:center;
`;

const CharacterCard = (props) =>{
    return (
        <CardDiv>
            <Card>
                <CardHeader>{props.character.name}</CardHeader>
                <CardBody>
                    {`${props.character.name} is ${props.character.height} cm's tall, weighs ${props.character.mass} and has ${props.character.hair_color} hair and ${props.character.skin_color} skin`}
                </CardBody>
            </Card>
        </CardDiv>
    )
}


export default CharacterCard;